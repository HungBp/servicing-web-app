import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import {
  AppBar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

import pathURLs from "../../pathURL/pathURLs";
import AlertDisplay from "../AlertDisplay";

function View() {
  const currPath = useLocation().pathname;

  const customAppBarStyle = {
    display: {
      xs: "none",
      sm: "block",
    }
  };

  const customToolBarStyle = {
    "&.MuiToolbar-root": {
      minHeight: "60px",
    },
  };

  const customSearchBarStyle = {
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
    marginRight: "5px",
    marginLeft: "15px",
    display: "flex",
  };

  const customInputBaseStyle = {
    "aria-label": "search",
    style: {
      padding: "4px",
    },
  };

  return (
    <>
      <AppBar
        position="relative"
        color="inherit"
        elevation={0}
        sx={customAppBarStyle}
      >
        <Toolbar sx={customToolBarStyle}>
          <Typography
            variant="h5"
            sx={{ flex: 1 }}
            fontWeight="bold"
          >
            { pathURLs.filter(pathURL => pathURL.url === currPath)[0].name }
          </Typography>

          <Box
            sx={customSearchBarStyle}
            component="form"
          >
            <IconButton
              type="button"
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>

            <InputBase
              placeholder="Search"
              inputProps={customInputBaseStyle}
            />
          </Box>

          <IconButton
            size="small"
            aria-label="notifications"
            color="inherit"
          >
            <Badge
              badgeContent={5}
              color="error"
              overlap="circular"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <AlertDisplay/>

      <Routes>
        {
          pathURLs.map(pathURL => (
            <Route
              key={pathURL.name}
              path={pathURL.url}
              element={pathURL.component}
            />
          ))
        }
      </Routes>
    </>
  );
}

export default View;
