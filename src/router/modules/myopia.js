import Layout from '@/views/layout/Layout'

// 预约随访

const routes = {
  path: '/myopia',
  component: Layout,
  redirect: '/myopia/high_warn',
  name: 'myopia',
  roles: ['doctor', 'admin', 'organization'],
  meta: { title: 'myopia', icon: 'example' },
  children: [
    // {
    //   path: 'highwarn',
    //   name: 'highWarn',
    //   component: () => import('@/views/myopia/high_warn'),
    //   meta: { title: 'high_warn', icon: 'table' }
    // },
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
      path: 'by_data',
      name: 'byData',
      component: () => import('@/views/myopia/by_data'),
      meta: { title: 'by_data', icon: 'table' }
    },
    {
      path: 'by_child',
      name: 'byChild',
      component: () => import('@/views/myopia/by_child'),
      meta: { title: 'by_child', icon: 'table' }
    }
  ]
}

export default routes
