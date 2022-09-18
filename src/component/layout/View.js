import { Routes, Route, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Dashboard from '../Dashboard';
import Plan from '../Plan';
import Report from '../Report';
import User from '../User';
import { pathNames, pathURL } from '../../urlpath/urlPath'

function View() {
  const customAppBarStyle = {
    display: {
      xs: 'none',
      sm: 'block'
    },
    '&.MuiAppBar-root': {
      boxShadow: 'none'
    }
  };

  const customToolBarStyle = {
    '&.MuiToolbar-root': {
      minHeight: '60px'
    }
  };

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

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar
        position="static"
        color='inherit'
        sx={customAppBarStyle}
      >
        <Toolbar sx={customToolBarStyle}>
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

      <Routes>
        <Route
          path='/'
          element={<Dashboard/>}
        />
        <Route
          path='/plan'
          element={<Plan/>}
        />
        <Route
          path='/report'
          element={<Report/>}
        />
        <Route
          path='/user'
          element={<User/>}
        />
      </Routes>
    </Box>
  );
}

export default View;