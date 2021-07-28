import AdminLayout from './Pages/shared/AdminLayout'
import Layout from './Pages/shared/Layout'

const routes = [
  {
    path: "",
    element: <AdminLayout />,
  },
  {
    path: "/Account",
    element: <Layout />,
  },
]


export default routes



