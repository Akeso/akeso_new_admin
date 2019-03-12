import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
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
    redirect: '/preview/overview',
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
    path: '/doctors',
    component: Layout,
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
    path: '/enChildren',
    component: Layout,
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
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', // 后端支持可开
  base: 'a',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
