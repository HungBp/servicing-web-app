import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import DoDisturbOffIcon from '@mui/icons-material/DoDisturbOff';
import AppsIcon from '@mui/icons-material/Apps';

function User() {
  function createCheckTimeList(dateCheck, checkin, checkout) {
    return { dateCheck, checkin, checkout };
  }

  function createTodoList(dateCheck, site, task, description, serviceBy) {
    return { dateCheck, site, task, description, serviceBy };
  }
  
  const checkTimeList = [
    createCheckTimeList('25-08-2022', '09:00', '14:00'),
    createCheckTimeList('22-08-2022', '07:30', '11:00'),
    createCheckTimeList('20-08-2022', '12:00', '17:00'),
  ];

  const todoList = [
    createTodoList('20-09-2022', "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList('22-09-2022', "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList('24-09-2022', "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList('25-09-2022', "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList('28-09-2022', "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList('29-09-2022', "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList('02-10-2022', "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList('04-10-2022', "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList('05-10-2022', "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList('10-10-2022', "ABX", "XYZ", "doing something", "Nguyen Van A")
  ];

  const customUserStyle = {
    minHeight: 'calc(100vh - 60px)',
    backgroundColor: '#f5f5f5'
  };

  const customTileStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "20px",
    borderRadius: "8px",
    backgroundColor: "white",
    height: "calc(100% - 2 * 20px)"
  };

  const customCheckTableStyle = {
    width: '90%',
    marginBottom: '12px',
    marginTop: '12px',
    alignSelf: 'center'
  };

  const customTodoTableStyle = {
    width: '90%',
    marginBottom: '12px',
    alignSelf: 'center',
    overflowY: 'scroll',
    maxHeight: '250px'
  };

  return (
    <div className='user'>
      <Grid container spacing={0} sx={customUserStyle}>
        <Grid item xs={12} md={6}>
          <Box sx={customTileStyle}>
            <Typography
              variant='h6'
              margin={1.5}
              lineHeight='1.25rem'
            >
              Check In/Out
            </Typography>

            <Stack
              spacing={1}
              flexGrow={1}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Button variant="contained" startIcon={<LoginIcon />}>Check In</Button>
              <Button variant="contained" endIcon={<LogoutIcon />}>Check Out</Button>
            </Stack>

            <TableContainer component={Paper} elevation={2} sx={customCheckTableStyle}>
              <Table size="small" aria-label="table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{fontWeight: 600}} align="center">Date</TableCell>
                    <TableCell sx={{fontWeight: 600}} align="center">Check In</TableCell>
                    <TableCell sx={{fontWeight: 600}} align="center">Check Out</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {checkTimeList.map((row) => (
                    <TableRow
                      key={row.dateCheck}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">{row.dateCheck}</TableCell>
                      <TableCell align="center">{row.checkin}</TableCell>
                      <TableCell align="center">{row.checkout}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={customTileStyle}>
            <Typography
              variant='h6'
              margin={1.5}
              lineHeight='1.25rem'
            >
              Request
            </Typography>

            <Stack
              spacing={2}
              flexGrow={1}
              marginBottom="12px"
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Card sx={{ width: '100px', height: '100px' }}>
                <IconButton
                  size="medium"
                  aria-label="notifications"
                  color="warning"
                  sx={{height: '100%'}}
                >
                  <EditIcon/>
                  <Typography
                    variant='caption'
                    margin={1.5}
                    lineHeight='1.25rem'
                  >
                    Update Check In/Out
                  </Typography>
                </IconButton>
              </Card>
              
              <Card sx={{ width: '100px', height: '100px' }}>
                <IconButton
                  size="medium"
                  aria-label="notifications"
                  color="secondary"
                  sx={{height: '100%'}}
                >
                  <DoDisturbOffIcon/>
                  <Typography
                    variant='caption'
                    margin={1.5}
                    lineHeight='1.25rem'
                  >
                    Annual Leave
                  </Typography>
                </IconButton>
              </Card>
              
              <Card sx={{ width: '100px', height: '100px' }}>
                <IconButton
                  size="medium"
                  aria-label="notifications"
                  color="success"
                  sx={{height: '100%'}}
                >
                  <AppsIcon/>
                  <Typography
                    variant='caption'
                    margin={1.5}
                    lineHeight='1.25rem'
                  >
                    Others
                  </Typography>
                </IconButton>
              </Card>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={12}>
          <Box sx={customTileStyle}>
            <Typography
              variant='h6'
              margin={1.5}
              lineHeight='1.25rem'
            >
              Task List
            </Typography>

            <TableContainer component={Paper} elevation={2} sx={customTodoTableStyle}>
              <Table size="small" aria-label="table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{fontWeight: 600}} align="center">Date</TableCell>
                    <TableCell sx={{fontWeight: 600}} align="center">Site</TableCell>
                    <TableCell sx={{fontWeight: 600}} align="center">Task</TableCell>
                    <TableCell sx={{fontWeight: 600}} align="center">Description</TableCell>
                    <TableCell sx={{fontWeight: 600}} align="center">Service by</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {todoList.map((row) => (
                    <TableRow
                      key={row.dateCheck}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">{row.dateCheck}</TableCell>
                      <TableCell align="center">{row.site}</TableCell>
                      <TableCell align="center">{row.task}</TableCell>
                      <TableCell align="center">{row.description}</TableCell>
                      <TableCell align="center">{row.serviceBy}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default User;