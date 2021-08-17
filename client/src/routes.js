import AdminLayout from './Pages/shared/AdminLayout/AdminLayout';
import Layout from './Pages/shared/Layout/Layout';

import Login from './Pages/auth/Login/Login';
import Register from './Pages/auth/Register/Register';
import Profile from './Pages/Account/Profile';
import NotFound from './Pages/Error/NotFound';
import IncidentManagement from './Pages/Ticket/IncidentManagement';
import AllTickets from './Pages/Ticket/AllTicket';
import AddTicket from './Pages/Ticket/AddTicket';

import Account from './Pages/Account/Account';
import AllAccounts from './Pages/Account/AllAccounts';
import TicketCenter from './Pages/Ticket/TicketCenter';
import GenerateNew from './Pages/Ticket/GenerateNew';

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
            path: '/allTicketTypes',
            element: <AllTickets />,
          },
          {
            path: '/addTicketType',
            element: <AddTicket />,
          },
          {
            path: '/ticketCenter',
            element: <TicketCenter />,
          },
          {
            path: '/generateNew',
            element: <GenerateNew />,
          },
        ],
      },
      {
        path: '/account',
        element: <Account />,
        children: [
          {
            path: '/allAccounts',
            element: <AllAccounts />,
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
