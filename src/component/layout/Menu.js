import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { pathNames, pathURL } from '../../urlpath/urlPath'

function Menu() {
  const [value, setValue] = useState('/');
  const [mobileOpen, setMobileOpen] = useState(false);
  const icons = [<DashboardIcon/>, <CalendarMonthIcon/>, <SummarizeIcon/>, <AccountBoxIcon/>];
  const matchMediaWidth = !useMediaQuery('(min-width:600px)');

  const customSearchBarStyle = {
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
    marginRight: '5px',
    marginLeft: '15px',
    display: 'flex'
  };

  const customInputBaseStyle = {
    'aria-label': 'search',
    'style': {
      padding: '4px'
    }
  };

  // menu
  const customMenuStyle = {
    minHeight: 'inherit',
    display: 'flex',
    flexDirection: 'column'
  };

  // menu -> sidebar
  const customSideBarMenuStyle = {
    display: {
      xs: 'none',
      sm: 'flex'
    },
    flexDirection: 'column',
    flexGrow: 1
  };

  // menu -> sidebar -> styling
  const customBrandStyle = {
    padding: '16px',
    display: 'flex',
    alignItems: 'center'
  };

  const customDeviderStyle = {
    '&.MuiDivider-root': {
      borderColor: 'rgba(255, 255, 255, 0.3)'
    }
  };

  const customTabsStyle = {
    '&.MuiButtonBase-root': {
      textTransform: 'none',
      justifyContent: 'left'
    }
  };

  const customTabsIndicatorStyle = {
    sx : {
      width: '4px',
      backgroundColor: 'white'    
    }
  };

  const customMenuFooterStyle = {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // menu -> drawer
  const customAppBarStyle = {
    display: {
      xs: 'block',
      sm: 'none'
    }
  };
  
  // menu -> drawer -> styling
  const customDrawerMenuStyle = {
    '& .MuiDrawer-paper': {
      width: 180,
      backgroundColor: 'black',
      color: 'white'
    }
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    matchMediaWidth && setMobileOpen(!mobileOpen);
  };

  const menu = (
    <>
      <Box sx={customBrandStyle}>
        <MiscellaneousServicesIcon sx={{ marginRight: '8px' }}/>
        <Typography variant='subtitle1'>SERVICING</Typography>
      </Box>

      <Divider sx={customDeviderStyle}/>

      <Tabs
        onChange={handleChange}
        value={value}
        textColor="inherit"
        indicatorColor="primary"
        TabIndicatorProps={customTabsIndicatorStyle}
        orientation="vertical"
        aria-label="tabs"
        sx={{ flexGrow: 1 }}
        >
        {
          pathNames.map((pathName, index) => (
            <Tab
              key={pathName}
              component={Link}
              icon={icons[index]}
              iconPosition='start'
              label={`${pathName}`}
              value={(pathName === 'Dashboard') ? '/' : `/${pathName.toLowerCase()}`}
              to={(pathName === 'Dashboard') ? '/' : `/${pathName.toLowerCase()}`}
              sx={customTabsStyle}
              onClick={handleDrawerToggle}
            />
            ))
          }
      </Tabs>

      <Divider sx={customDeviderStyle}/>

      <Box sx={customMenuFooterStyle}>
        <Typography variant='subtitle2'>Copyright@2022</Typography>
      </Box>
    </>
  )

    return (
      <Box sx={customMenuStyle}>
        <Box sx={customSideBarMenuStyle}>
          { menu }
        </Box>

        <Box sx={customAppBarStyle}>
          <AppBar
            sx={{'&.MuiAppBar-root': {backgroundColor: 'black'}}}
            position="static"
          >
            <Toolbar sx={{'&.MuiToolbar-root': {minHeight: '60px'}}}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant='h5'
                sx={{ flexGrow: 1 }}
                fontWeight='bold'
              >
                {pathNames[pathURL.indexOf(useLocation().pathname)]}
              </Typography>

              <Box sx={customSearchBarStyle} component="form">
                <IconButton type="button" aria-label="search">
                  <SearchIcon/>
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
            sx={customDrawerMenuStyle}
          >
            { menu }
          </Drawer>
        </Box>
      </Box>
  );
}

export default Menu;