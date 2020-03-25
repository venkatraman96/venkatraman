
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// core components/views for covid layout
import DashboardPage from "./views/Dashboard/Dashboard.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/covid"
  },
];

export default dashboardRoutes;
