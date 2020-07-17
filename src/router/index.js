import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout.vue'
import dashboard from '../views/dashboard'
import button from '../views/button'
import link from '../views/link'
import input from '../views/input'
import datetimepicker from '../views/datetimepicker'
import table from '../views/table'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [{
  path: '//',
  name: 'layout',
  component: layout,
  meta: {
    title: '首页'
  },
  children: [{
      path: '/',
      name: 'content',
      components: {
        main: dashboard
      },
      meta: {
        title: '首页'
      }
    }, {
      path: '/dashboard',
      name: 'dashboard',
      components: {
        main: dashboard
      },
      meta: {
        title: '首页'
      }
    }, {
      path: '/button',
      name: 'button',
      components: {
        main: button
      },
      meta: {
        title: '按钮'
      }
    },
    {
      path: '/link',
      name: 'link',
      components: {
        main: link
      },
      meta: {
        title: '文字链接'
      }
    },
    {
      path: '/input',
      name: 'input',
      components: {
        main: input
      },
      meta: {
        title: '输入框'
      }
    },
    {
      path: '/datetimepicker',
      name: 'datetimepicker',
      components: {
        main: datetimepicker
      },
      meta: {
        title: '日期时间选择器'
      }
    },
    {
      path: '/table',
      name: 'table',
      components: {
        main: table
      },
      meta: {
        title: '表格'
      }
    }
  ]
}]

const router = new VueRouter({
  mode: 'history',  //去掉url中的#
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router