import Dashboard from "../component/view/Dashboard";
import Contract from "../component/view/Contract";
import Ticket from "../component/view/Ticket";
import Report from "../component/view/Report";
import User from "../component/view/User";
import Admin from "../component/view/Admin";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from '@mui/icons-material/Folder';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const pathURLs = [
  { url: "/", name: "Dashboard", component: <Dashboard/>, icon: <DashboardIcon /> },
  { url: "/contract", name: "Contract", component: <Contract/>, icon: <FolderIcon /> },
  { url: "/ticket", name: "Ticket", component: <Ticket/>, icon: <CalendarMonthIcon /> },
  { url: "/report", name: "Report", component: <Report/>, icon: <SummarizeIcon /> },
  { url: "/user", name: "User", component: <User/>, icon: <AccountBoxIcon /> },
  { url: "/admin", name: "Admin", component: <Admin/>, icon: <AdminPanelSettingsIcon /> },
];

export default pathURLs;
