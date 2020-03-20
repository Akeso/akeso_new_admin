import Layout from '@/views/layout/Layout'

// 学校筛查

const routes = {
  path: '/schools',
  component: Layout,
  redirect: '/schools/school_list',
  name: 'schools',
  roles: ['doctor', 'admin', 'organization', 'agent'],
  meta: { title: 'schools', icon: 'example' },
  children: [{
    path: 'school_list',
    name: 'school_list',
    component: () => import('@/views/schools/schools'),
    meta: { title: 'school_list', icon: 'table' }
  }, {
    path: 'examines',
    name: 'examines',
    component: () => import('@/views/schools/examines'),
    meta: { title: 'examines', icon: 'table' }
  }, {
    path: 'screenings',
    name: 'screenings',
    component: () => import('@/views/schools/screenings'),
    meta: { title: 'screenings', icon: 'table' }
  }, {
    path: 'new_screening',
    name: 'new_screening',
    component: () => import('@/views/schools/children/new_screening'),
    meta: { title: 'simple_archives', icon: 'table' },
    hidden: true
  }, {
    path: 'edit_screening/:id',
    name: 'edit_screening',
    component: () => import('@/views/schools/children/edit_screening'),
    meta: { title: 'simple_archives', icon: 'table' },
    hidden: true
  },
  {
    path: 'report/distribute',
    name: 'reportDistribute',
    component: () => import('@/views/schools/reports/distribute'),
    meta: { title: 'report_distribute', icon: 'table' }
  }
    // {
    //   path: 'simple_archives',
    //   name: 'simple_archives',
    //   component: () => import('@/views/schools/simple_archives'),
    //   meta: { title: 'simple_archives', icon: 'table' },
    //   hidden: true
    // }
  ]
}

export default routes
