import Layout from '@/views/layout/Layout'

// 行为干预

const routes = {
  path: '/intelligent_data',
  component: Layout,
  redirect: '/intelligent_data/class_warn',
  name: 'intelligentData',
  roles: ['doctor', 'admin', 'organization', 'agent'],
  meta: { title: 'intelligentData', icon: 'example' },
  children: [
    {
      path: 'sorting',
      name: 'sorting',
      component: () => import('@/views/intelligent_data/sorting'),
      meta: { title: 'sorting', icon: 'table' }
    },
    {
      path: 'analytics',
      name: 'analytics',
      component: () => import('@/views/intelligent_data/analytics'),
      meta: { title: 'analytics', icon: 'table' }
    },
    {
      path: 'group_report',
      name: 'groupReport',
      component: () => import('@/views/intelligent_data/group_report'),
      meta: { title: 'group_report', icon: 'table' }
    },
    {
      path: 'data_export',
      name: 'dataExport',
      component: () => import('@/views/intelligent_data/data_export'),
      meta: { title: 'data_export', icon: 'table' }
    }
  ]
}

export default routes
