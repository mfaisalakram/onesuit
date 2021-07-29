import AdminLayout from './Pages/shared/AdminLayout';
import Layout from './Pages/shared/Layout';

import Login from './Pages/auth/Login/Login';
import Register from './Pages/auth/Register/Register';

const routes = [
  {
    path: '',
    element: <AdminLayout />,
    children: [
      {
        path: '/account',
        element: <Layout />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
];

export default routes;
