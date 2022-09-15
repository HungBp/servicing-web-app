import { Routes, Route, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dashboard from '../Dashboard';
import Plan from '../Plan';
import Report from '../Report';
import User from '../User';
import { pathNames, pathURL } from '../../urlpath/urlPath'

function View() {
  const customAppBarStyle = {
    '&.MuiAppBar-root': {
      boxShadow: 'none'
    }
  };

  const customToolBarStyle = {
    '&.MuiToolbar-root': {
      minHeight: '60px'
    }
  };

  return (
    <div className='view'>
      <AppBar
        position="static"
        color='inherit'
        sx={customAppBarStyle}
      >
        <Toolbar sx={customToolBarStyle}>
          <Typography
            variant='h6'
            sx={{ flexGrow: 1 }}
          >
            {pathNames[pathURL.indexOf(useLocation().pathname)]}
          </Typography>
          <Button color="inherit">Login</Button>
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
    </div>
  );
}

export default View;