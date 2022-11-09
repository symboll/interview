
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Layout from '@/layout';
import Sass from '@/pages/scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Sass />
      },
    ]
  },
])

export default router