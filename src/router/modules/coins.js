import Layout from '@/views/layout/Layout'

// 学校筛查

const routes = {
  path: '/coins',
  component: Layout,
  redirect: '/coins/products',
  roles: ['admin'],
  meta: { title: 'coins', icon: 'example' },
  children: [{
    path: 'products',
    name: 'coinProducts',
    component: () => import('@/views/coins/products'),
    meta: { title: 'coin_products', icon: 'table' }
  }, {
    path: 'product_log',
    name: 'coinProductLog',
    component: () => import('@/views/coins/product_logs'),
    meta: { title: 'coin_product_log', icon: 'table' }
  }]
}

export default routes
