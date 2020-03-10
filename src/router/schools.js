
/* Layout */
import Layout from '../views/layout/Layout'

const routes = [{
  path: '/schools',
  component: Layout,
  redirect: '/schools/school_list',
  name: 'schools',
  meta: { title: 'schools', icon: 'example', roles: ['doctor', 'admin', 'organization'] },
  children: [
    {
      path: 'school_list',
      name: 'school_list',
      component: () => import('@/views/schools/list'),
      meta: { title: 'school_list', icon: 'table' }
    },
    {
      path: 'examines',
      name: 'examines',
      component: () => import('@/views/schools/examines'),
      meta: { title: 'examines', icon: 'table' }
    },
    {
      path: 'simple_archives',
      name: 'simple_archives',
      component: () => import('@/views/schools/simple_archives'),
      meta: { title: 'simple_archives', icon: 'table' },
      hidden: true
    },
    {
      path: 'screenings',
      name: 'screenings',
      component: () => import('@/views/schools/screenings'),
      meta: { title: 'screenings', icon: 'table' }
    }
  ]
}]

export default routes
