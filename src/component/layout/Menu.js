import { Link } from 'react-router-dom';
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
import Typography from '@mui/material/Typography';
import { pathNames } from '../../urlpath/urlPath'

function Menu() {
  const [value, setValue] = useState('/');
  const icons = [<DashboardIcon/>, <CalendarMonthIcon/>, <SummarizeIcon/>, <AccountBoxIcon/>]

  const customMenuStyle = {
    color: 'white',
    backgroundColor: 'black',
    minHeight: '100vh'    
  };
  
  const customBrandStyle = {
    padding: '16px',
    display: 'flex',
    alignItems: 'center'
  };

  const customLogoStyle = {
    marginRight: '8px'
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

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }

    return (
    <div className='menu'>
      <Box sx={customMenuStyle}>
        <Box sx={customBrandStyle}>
          <MiscellaneousServicesIcon sx={customLogoStyle}/>
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
                />
            ))
          }
        </Tabs>
        </Box>
    </div>
  );
}

export default Menu;