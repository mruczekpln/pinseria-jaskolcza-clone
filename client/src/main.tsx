import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/Root'
import Error from './routes/Error'

import './index.css'
import NewOrder from './routes/NewOrder'
import Order from './routes/[Order]'
import Landing from './routes/Landing'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <LandingPage></LandingPage>,
//     errorElement: <div>error</div>,
//   },
//   { path: '/order', element: <OrderPage /> },
//   {
//     path: '/order-complete',
//     element: <OrderCompletePage></OrderCompletePage>,
//   },
//   {
//     path: 'admin',
//     element: null,
//   },
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'order/new',
        element: <NewOrder />,
      },
      {
        path: 'order/:orderId',
        element: <Order />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
