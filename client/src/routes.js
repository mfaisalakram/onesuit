import AdminLayout from './Pages/shared/AdminLayout/AdminLayout';
import Layout from './Pages/shared/Layout/Layout';

import Login from './Pages/auth/Login/Login';
import Register from './Pages/auth/Register/Register';
import Profile from './Pages/Account/Profile';
import NotFound from './Pages/Error/NotFound';
import IncidentManagement from './Pages/Ticket/IncidentManagement';
import TicketTypes from './Pages/Ticket/TicketTypes';

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
      {
        path: '/incidentmanagement',
        element: <IncidentManagement />,
        children: [
          {
            path: '/tickettype',
            element: <TicketTypes />,
          },
        ],
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
