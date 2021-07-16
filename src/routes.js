// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Slideshow from "views/Slideshow/Slideshow";
import Events from "views/Events/Events";
import Gallery from "views/Gallery/Gallery";
import Courses from "views/Courses/Courses";
import Testimonials from "views/Testimonials/Testimonials";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/slideshow",
    name: "SlideShow",
    icon: "content_paste",
    component: Slideshow,
    layout: "/admin",
  },
  {
    path: "/events",
    name: "Events",
    icon: LibraryBooks,
    component: Events,
    layout: "/admin",
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    icon: BubbleChart,
    component: Testimonials,
    layout: "/admin",
  },
  {
    path: "/gallery",
    name: "Gallery",
    icon: LocationOn,
    component: Gallery,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Courses",
    icon: Notifications,
    component: Courses,
    layout: "/admin",
  },

  {
    path: "/upgrade-to-pro",
    name: "Logout",
    icon: Unarchive,
    layout: "/admin",
  },
];

export default dashboardRoutes;
