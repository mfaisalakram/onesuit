import AdminLayout from './Pages/shared/AdminLayout';
import Layout from './Pages/shared/Layout';

import Login from './Pages/auth/Login/Login';
import Register from './Pages/auth/Register/Register';
import Profile from './Pages/Account/Profile';
import NotFound from './Pages/Error/NotFound';

const routes = [
  {
    path: '',
    element: <NotFound />,
  },
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
    children: [
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
    ],
  },
];

export default routes;
