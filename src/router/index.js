import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* only: true                   if `hidden:true` 将只有管理员才展示
* english: true                  if `english:true` 改菜单是英文版本独有的，只有在英文版下才展示(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  { path: '/mobile/doctor', component: () => import('@/views/mobile/doctor') },
  { path: '/mobile/sign_in', component: () => import('@/views/mobile/sign_in') },
  { path: '/mobile/child_select', component: () => import('@/views/mobile/child_select') },
  { path: '/mobile/bind_success', component: () => import('@/views/mobile/bind_success') },
  { path: '/mobile/create_child', component: () => import('@/views/mobile/create_child') },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    // hidden: true,
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path: '/preview',
    component: Layout,
    redirect: '/preview/allchildren',
    name: 'Preview',
    meta: { title: 'preview', icon: 'example' },
    children: [
      // {
      //   path: 'overview',
      //   name: 'Overview',
      //   component: () => import('@/views/preview/overview'),
      //   meta: { title: 'overview', icon: 'table' }
      // },
      {
        path: 'allchildren',
        name: 'Allchildren',
        component: () => import('@/views/preview/allchildren'),
        meta: { title: 'allchildren', icon: 'table' }
      },
      {
        path: 'intelligent',
        name: 'Intelligent',
        component: () => import('@/views/preview/intelligent'),
        meta: { title: 'intelligent', icon: 'table' }
      },
      {
        path: 'child/:id(\\d+)',
        name: 'ShowChild',
        component: () => import('@/views/children/show'),
        meta: { title: 'showChild', noCache: true },
        hidden: true
      }
    ]
  },
  {
    path: '/apt_arch',
    component: Layout,
    redirect: '/apt_arch/appintments',
    name: 'aptArch',
    meta: { title: 'aptArch', icon: 'example' },
    children: [
      {
        path: 'admin_appoints',
        name: 'AdminAppoints',
        only: true,
        component: () => import('@/views/apt_arch/admin_appoints'),
        meta: { title: 'admin_appoints', icon: 'table' }
      },
      {
        path: 'appointments',
        name: 'Appointments',
        component: () => import('@/views/apt_arch/appointments'),
        meta: { title: 'appointments', icon: 'table' }
      },
      {
        path: 'archives',
        name: 'Archives',
        component: () => import('@/views/apt_arch/archives'),
        meta: { title: 'archives', icon: 'table' }
      }
    ]
  },
  {
    path: '/intelligent_data',
    component: Layout,
    redirect: '/intelligent_data/class_warn',
    name: 'intelligentData',
    meta: { title: 'intelligentData', icon: 'example' },
    children: [
      {
        path: 'group_report',
        name: 'groupReport',
        component: () => import('@/views/intelligent_data/group_report'),
        meta: { title: 'group_report', icon: 'table' }
      },
      {
        path: 'analytics',
        name: 'analytics',
        component: () => import('@/views/intelligent_data/analytics'),
        meta: { title: 'analytics', icon: 'table' }
      },
      {
        path: 'sorting',
        name: 'sorting',
        component: () => import('@/views/intelligent_data/sorting'),
        meta: { title: 'sorting', icon: 'table' }
      }
    ]
  },
  {
    path: '/myopia',
    component: Layout,
    redirect: '/myopia/high_warn',
    name: 'myopia',
    meta: { title: 'myopia', icon: 'example' },
    children: [
      // {
      //   path: 'classwarn',
      //   name: 'classWarn',
      //   component: () => import('@/views/myopia/class_warn'),
      //   meta: { title: 'class_warn', icon: 'table' }
      // },
      {
        path: 'highwarn',
        name: 'highWarn',
        component: () => import('@/views/myopia/high_warn'),
        meta: { title: 'high_warn', icon: 'table' }
      }
    ]
  },
  {
    path: '/doctors',
    component: Layout,
    only: true,
    children: [
      {
        path: 'doctors',
        name: 'Doctors',
        component: () => import('@/views/doctors/doctors'),
        meta: { title: 'doctors', icon: 'people' }
      }
    ]
  },
  {
    path: '/frequency',
    component: Layout,
    // only: true,
    children: [
      {
        path: 'frequency',
        name: 'Frequency',
        component: () => import('@/views/frequency/frequency'),
        meta: { title: 'frequency', icon: 'guide' }
      }
    ]
  },
  {
    path: '/channels',
    component: Layout,
    children: [
      {
        path: 'channels',
        name: 'Channels',
        component: () => import('@/views/channels/channels'),
        meta: { title: 'channels', icon: 'bug' }
      }
    ]
  },
  {
    path: '/removements',
    component: Layout,
    children: [
      {
        path: 'removements',
        name: 'Removements',
        component: () => import('@/views/removements/removements'),
        meta: { title: 'removements', icon: 'bug' }
      }
    ]
  },
  {
    path: '/system_setting',
    component: Layout,
    only: true,
    redirect: '/system_setting/devices',
    name: 'systemSetting',
    meta: { title: 'systemSetting', icon: 'example' },
    children: [
      {
        path: 'devices',
        name: 'Devices',
        component: () => import('@/views/devices/devices'),
        meta: { title: 'devices', icon: 'bug' }
      },
      {
        path: 'versions',
        name: 'Versions',
        component: () => import('@/views/versions/versions'),
        meta: { title: 'versions', icon: 'bug' }
      },
      {
        path: 'app_files',
        name: 'AppFiles',
        component: () => import('@/views/app_files/index'),
        meta: { title: 'app_files', icon: 'bug' }
      },
      {
        path: 'feedback',
        name: 'Feedback',
        component: () => import('@/views/feedback/feedback'),
        meta: { title: 'feedback', icon: 'guide' }
      }
    ]
  },
  {
    path: '/weapp',
    component: Layout,
    redirect: '/weapp/awards',
    name: 'weapp',
    only: true,
    meta: { title: 'weapp', icon: 'example' },
    children: [
      {
        path: 'awards',
        name: 'awards',
        component: () => import('@/views/weapp/awards.vue'),
        meta: { title: 'awards', icon: 'table' }
      },
      {
        path: 'wx_organizations',
        name: 'wx_organizations',
        component: () => import('@/views/weapp/organizations.vue'),
        meta: { title: 'wx_organizations', icon: 'table' }
      }
    ]
  },
  {
    path: '/enChildren',
    component: Layout,
    only: true,
    children: [
      {
        path: 'enChildren',
        name: 'EnChildren',
        component: () => import('@/views/internations/enChildren'),
        meta: { title: 'enChildren', icon: 'table', english: true }
      },
      {
        path: 'child/:id(\\d+)',
        name: 'EnShowChild',
        component: () => import('@/views/internations/chilren/show'),
        meta: { title: 'enShowChild', noCache: true },
        hidden: true
      }
    ]
  },

  {
    path: '/account',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Account',
        component: () => import('@/views/account/index'),
        meta: { title: 'Account', icon: 'form' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', // 后端支持可开
  base: 'a',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
