import Layout from '@/views/layout/Layout'

const childRoutes = {
  path: '/preview',
  component: Layout,
  redirect: '/preview/allchildren',
  name: 'Preview',
  roles: ['doctor', 'admin', 'organization', 'agent'],
  meta: { title: 'preview', icon: 'example', roles: ['doctor', 'admin', 'organization'] },
  children: [
    // {
    //   path: 'overview',
    //   name: 'Overview',
    //   component: () => import('@/views/preview/overview'),
    //   meta: { title: 'overview', icon: 'table' }
    // },
    {
      path: 'children',
      name: 'children',
      component: () => import('@/views/preview/children'),
      meta: { title: 'children', icon: 'people', noCache: true },
      hidden: true
    },
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
}

export default childRoutes
