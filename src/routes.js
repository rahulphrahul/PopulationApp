// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Notifications from "@material-ui/icons/Notifications";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import LockIcon from "@material-ui/icons/Lock";
import PeopleIcon from "@material-ui/icons/People";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CommentIcon from "@material-ui/icons/Comment";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ListIcon from "@material-ui/icons/List";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import BusinessIcon from "@material-ui/icons/Business";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EmailIcon from "@material-ui/icons/Email";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import MailIcon from "@material-ui/icons/Mail";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
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
import Placements from "views/Placements/Placements";
import Enquiry from "views/Enquiry/Enquiry";
import Departments from "views/Departments/Departments";
import Admin from "views/Admin/Admin";
import Admission from "views/Admission/Admission";
import Clubs from "views/Clubs/Clubs";
import Facilities from "views/Facilities/Facilities";
import Management from "views/Management/Management";
import Staffs from "views/Sfatts/Staffs";
import SendSMS from "views/SendSMS/SendSMS";

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
    path: "/admission",
    name: "Admission",
    icon: "content_paste",
    component: Admission,
    layout: "/admin",
  },
  {
    path: "/departments",
    name: "Departments",
    icon: ClearAllIcon,
    component: Departments,
    layout: "/admin",
  },
  {
    path: "/admin",
    name: "Manage Admins",
    icon: LockIcon,
    component: Admin,
    layout: "/admin",
  },
  {
    path: "/staffs",
    name: "Manage Staffs",
    icon: PeopleIcon,
    component: Staffs,
    layout: "/admin",
  },
  {
    path: "/slideshow",
    name: "Home screen Carousel",
    icon: ViewCarouselIcon,
    component: Slideshow,
    layout: "/admin",
  },
  {
    path: "/events",
    name: "Events",
    icon: DateRangeIcon,
    component: Events,
    layout: "/admin",
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    icon: CommentIcon,
    component: Testimonials,
    layout: "/admin",
  },
  {
    path: "/gallery",
    name: "Gallery",
    icon: PhotoLibraryIcon,
    component: Gallery,
    layout: "/admin",
  },

  {
    path: "/courses",
    name: "Courses",
    icon: FileCopyIcon,
    component: Courses,
    layout: "/admin",
  },
  {
    path: "/semester",
    name: "Semester",
    icon: ListIcon,
    component: Semester,
    layout: "/admin",
  },
  {
    path: "/subjects",
    name: "Subjects",
    icon: MenuBookIcon,
    component: Subjects,
    layout: "/admin",
  },
  {
    path: "/students",
    name: "Students",
    icon: SupervisedUserCircleIcon,
    component: Students,
    layout: "/admin",
  },
  {
    path: "/sms",
    name: "Send SMS",
    icon: MailIcon,
    component: SendSMS,
    layout: "/admin",
  },
  {
    path: "/clubs",
    name: "Clubs",
    icon: CalendarViewDayIcon,
    component: Clubs,
    layout: "/admin",
  },
  {
    path: "/facilities",
    name: "Facilities",
    icon: BusinessIcon,
    component: Facilities,
    layout: "/admin",
  },
  {
    path: "/management",
    name: "Management",
    icon: BusinessCenterIcon,
    component: Management,
    layout: "/admin",
  },
  {
    path: "/publications",
    name: "Publications",
    icon: LibraryBooksIcon,
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
    icon: VerticalSplitIcon,
    component: InternalMarks,
    layout: "/admin",
  },
  {
    path: "/placements",
    name: "Placements",
    icon: AssignmentIcon,
    component: Placements,
    layout: "/admin",
  },
  {
    path: "/enquiry",
    name: "Enquiry",
    icon: EmailIcon,
    component: Enquiry,
    layout: "/admin",
  },
];

export default dashboardRoutes;
