import AdminLayout from './Pages/shared/AdminLayout';
import Layout from './Pages/shared/Layout';

import Login from './Pages/auth/Login/Login';
import Register from './Pages/auth/Register/Register';
import Profile from './Pages/Account/Profile'
import NotFound from './Pages/Error/NotFound'

const routes = [
  {
    path: 'app',
    element: <AdminLayout />,
    children: [
      {
        path: '/',
        element: <Layout />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
 
  {
    path: 'join',
    element: <Layout />,
    children: 
    [
       {
        path: 'register',
        element: <Register />,
      },
        {
        path: 'login',
        element: <Login />,
      },   
      {
        path: '/',
        element: <Register />,
      },
    ]
  },

  {
    path:'',
    element: <NotFound />
  }
 
];

export default routes;
