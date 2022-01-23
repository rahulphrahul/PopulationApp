// core components/views for Admin layout
import Dashboard from "views/Dashboard/Dashboard";

// core components/views for RTL layout
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "content_paste",
    component: Dashboard,
    layout: "/admin",
  },
];

export default dashboardRoutes;
