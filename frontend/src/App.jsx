
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Cart from './components/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/signuppage',
        element: <SignUpPage />
      },
      {
        path: '/loginpage',
        element: <LoginPage />
      },
      {
        path: '/cart',
        element: <Cart />
      },
     
     
       
    ]
  }])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  )
}

export default App

