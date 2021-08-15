// @material-ui/icons

import UserProfile from "views/UserProfile/UserProfile";
import People from "@material-ui/icons/People";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/userprofile",
    name: "User Profile",
    icon: People,
    component: UserProfile,
    layout: "/user",
  },
];

export default dashboardRoutes;
