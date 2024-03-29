// the layout for most pages
import Layout from '@/views/layout'

export default [
  {
    path: '/file',
    component: Layout,
    children: [
      {
        name: 'file',
        path: '',
        component: () => import('@/views/file'),
        meta: {
          title: 'drawer.file',
          icon: 'folder'
        }
      }
    ]
  }
]
