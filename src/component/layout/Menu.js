import { useState } from "react";

import {
  Link,
  useLocation
} from "react-router-dom";

import {
  AppBar,
  Badge,
  Box,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

import pathURLs from "../../pathURL/pathURLs";

const sideBarSize = "180px";

function Menu() {
  const currPath = useLocation().pathname;
  const [value, setValue] = useState(currPath);
  const [mobileOpen, setMobileOpen] = useState(false);
  const matchMediaWidth = !useMediaQuery("(min-width:600px)");

  // menu
  const customBrandStyle = {
    padding: "16px",
    display: "flex",
    alignItems: "center",
  };

  const customDeviderStyle = {
    "&.MuiDivider-root": {
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
  };

  const customTabsStyle = {
    "&.MuiButtonBase-root": {
      textTransform: "none",
      justifyContent: "left",
    },
  };

  const customTabsIndicatorStyle = {
    sx: {
      width: "4px",
      backgroundColor: "white",
    },
  };

  const customMenuFooterStyle = {
    padding: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // sidebar
  const customSideBarStyle = {
    flex: 1,
    display: {
      xs: "none",
      sm: "flex",
    },
    flexDirection: "column",
  };

  // appbar
  const customAppBarStyle = {
    flex: 1,
    display: {
      xs: "block",
      sm: "none",
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

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    matchMediaWidth && setMobileOpen(!mobileOpen);
  };

  const menu = (
    <Stack
      color="white"
      bgcolor="black"
      flex={1}
      width={sideBarSize}
    >
      <Box sx={customBrandStyle}>
        <MiscellaneousServicesIcon sx={{ marginRight: "8px" }} />
        <Typography variant="subtitle1">SERVICING</Typography>
      </Box>

      <Divider sx={customDeviderStyle} />

      <Tabs
        onChange={handleChange}
        value={value}
        textColor="inherit"
        indicatorColor="primary"
        TabIndicatorProps={customTabsIndicatorStyle}
        orientation="vertical"
        aria-label="tabs"
        sx={{ flex: 1 }}
      >
        {pathURLs.map(pathURL => (
          <Tab
            key={pathURL.name}
            component={Link}
            icon={pathURL.icon}
            iconPosition="start"
            label={`${pathURL.name}`}
            value={pathURL.url}
            to={pathURL.url}
            sx={customTabsStyle}
            onClick={handleDrawerToggle}
          />
        ))}
      </Tabs>

      <Divider sx={customDeviderStyle} />

      <Box sx={customMenuFooterStyle}>
        <Typography variant="subtitle2">Copyright@2022</Typography>
      </Box>
    </Stack>
  );

  return (
    <>
      <Box sx={customSideBarStyle}>{menu}</Box>

      <Box sx={customAppBarStyle}>
        <AppBar
          sx={{ "&.MuiAppBar-root": { backgroundColor: "black" } }}
          variant="outline"
        >
          <Toolbar sx={{ "&.MuiToolbar-root": { minHeight: "60px" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

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

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          {menu}
        </Drawer>
      </Box>
    </>
  );
}

export default Menu;
