


import toast, { Toaster } from 'react-hot-toast';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Cart from './components/Cart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Menu from './components/Menu';
import Contact from './components/Contact';
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
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  )
}

export default App

