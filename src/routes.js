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
import Students from "views/Students/Students";
import Publications from "views/Publications/Publications";
import Subjects from "views/Subjects/Subjects";
import Semester from "views/Semester/Semester";
import InternalMarks from "views/InternalMarks/InternalMarks";
import InternalsNotification from "views/InternalsNotification/InternalsNotification";
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
    path: "/subjects",
    name: "Subjects",
    icon: Notifications,
    component: Subjects,
    layout: "/admin",
  },
  {
    path: "/courses",
    name: "Courses",
    icon: Notifications,
    component: Courses,
    layout: "/admin",
  },
  {
    path: "/semester",
    name: "Semester",
    icon: Notifications,
    component: Semester,
    layout: "/admin",
  },
  {
    path: "/upgrade-to-pro",
    name: "Logout",
    icon: Unarchive,
    layout: "/admin",
  },
  {
    path: "/students",
    name: "Students",
    icon: Notifications,
    component: Students,
    layout: "/admin",
  },
  {
    path: "/publications",
    name: "Publications",
    icon: Notifications,
    component: Publications,
    layout: "/admin",
  },
  {
    path: "/Internalsnotification",
    name: "Internals Notification",
    icon: Notifications,
    component: InternalsNotification,
    layout: "/admin",
  },
  {
    path: "/internals",
    name: "Internal Marks",
    icon: Notifications,
    component: InternalMarks,
    layout: "/admin",
  },
];

export default dashboardRoutes;
