import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Plan() {
  const [site, setSite] = useState('');
  const [period, setPeriod] = useState('');
  const [duration, setDuration] = useState('');
  const [startTime, setStartTime] = useState(null);

  function createSchedule(site, startTime, period, duration, assignTo) {
    return { site, startTime, period, duration, assignTo };
  }
  
  const scheduleList = [
    createSchedule('A', '25-08-2022', '3 months', '5 years', 'Nguyen Van A'),
    createSchedule('B', '25-08-2022', '3 months', '5 years', 'Nguyen Van A'),
    createSchedule('C', '25-08-2022', '6 months', '5 years', 'Nguyen Van A'),
    createSchedule('D', '22-08-2022', '12 months', '5 years', 'Nguyen Van D'),
    createSchedule('E', '20-08-2022', '12 months', '5 years', 'Nguyen Van D')
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

  const customScheduleTableStyle = {
    width: '90%',
    marginBottom: '12px',
    alignSelf: 'center'
  };

  return (
    <div className='plan'>
      <Grid container spacing={0} sx={customUserStyle}>
        <Grid item xs={12} md={5}>
          <Box sx={customTileStyle}>
            <Typography
              variant='h6'
              margin={1.5}
              lineHeight='1.25rem'
            >
              Task Assign
            </Typography>

            <Stack
              spacing={5}
              flexGrow={1}
              marginBottom="12px"
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                component="form"
                sx={{
                  '&.MuiBox-root': { width: '75%' },
                }}
                noValidate
                autoComplete="off"
              >
                <Stack
                  spacing={2}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <FormControl fullWidth required>
                    <InputLabel id="site-select-labael">Site</InputLabel>
                    <Select
                      labelId="site-select-labael"
                      id="site-select"
                      value={site}
                      label="Site"
                      onChange={e => setSite(e.target.value)}
                    >
                      <MenuItem value={"A"}>A</MenuItem>
                      <MenuItem value={"B"}>B</MenuItem>
                      <MenuItem value={"C"}>C</MenuItem>
                      <MenuItem value={"D"}>D</MenuItem>
                      <MenuItem value={"E"}>E</MenuItem>
                      <MenuItem value={"F"}>F</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth required>
                    <InputLabel id="duration-select-labael">Assign to</InputLabel>
                    <Select
                      labelId="duration-select-labael"
                      id="duration-select"
                      value={duration}
                      label="Duration"
                      onChange={e => setDuration(e.target.value)}
                    >
                      <MenuItem value={"Nguyen Van A"}>Nguyen Van A</MenuItem>
                      <MenuItem value={"Nguyen Van B"}>Nguyen Van B</MenuItem>
                      <MenuItem value={"Nguyen Van C"}>Nguyen Van C</MenuItem>
                      <MenuItem value={"Nguyen Van D"}>Nguyen Van D</MenuItem>
                      <MenuItem value={"Nguyen Van E"}>Nguyen Van E</MenuItem>
                    </Select>
                  </FormControl>

                  <Button variant="contained" component="button" type="submit">
                    Save
                  </Button>
                </Stack>
              </Box>

              <TableContainer component={Paper} elevation={2} sx={customScheduleTableStyle}>
                <Table size="small" aria-label="table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{fontWeight: 600}} align="center">Site</TableCell>
                      <TableCell sx={{fontWeight: 600}} align="center">Serviced by</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {scheduleList.map((row) => (
                      <TableRow
                        key={row.site}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell  align="center" component="th" scope="row">{row.site}</TableCell>
                        <TableCell align="center">{row.assignTo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box sx={customTileStyle}>
            <Typography
              variant='h6'
              margin={1.5}
              lineHeight='1.25rem'
            >
              Maintenance Schedule
            </Typography>

            <Stack
              spacing={5}
              flexGrow={1}
              marginBottom="12px"
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                component="form"
                sx={{
                  '&.MuiBox-root': { width: '75%' },
                }}
                noValidate
                autoComplete="off"
              >
                <Stack
                  spacing={2}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <FormControl fullWidth required>
                    <InputLabel id="site-select-labael">Site</InputLabel>
                    <Select
                      labelId="site-select-labael"
                      id="site-select"
                      value={site}
                      label="Site"
                      onChange={e => setSite(e.target.value)}
                    >
                      <MenuItem value={"A"}>A</MenuItem>
                      <MenuItem value={"B"}>B</MenuItem>
                      <MenuItem value={"C"}>C</MenuItem>
                      <MenuItem value={"D"}>D</MenuItem>
                      <MenuItem value={"E"}>E</MenuItem>
                      <MenuItem value={"F"}>F</MenuItem>
                    </Select>
                  </FormControl>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Start"
                      value={startTime}
                      onChange={newValue => setStartTime(newValue)}
                      renderInput={(params) => <TextField {...params} fullWidth required/>}
                    />
                  </LocalizationProvider>

                  <FormControl fullWidth required>
                    <InputLabel id="period-select-labael">Period</InputLabel>
                    <Select
                      labelId="period-select-labael"
                      id="period-select"
                      value={period}
                      label="Period"
                      onChange={e => setPeriod(e.target.value)}
                    >
                      <MenuItem value={"1 month"}>1 month</MenuItem>
                      <MenuItem value={"3 months"}>3 months</MenuItem>
                      <MenuItem value={"6 months"}>6 months</MenuItem>
                      <MenuItem value={"9 months"}>9 months</MenuItem>
                      <MenuItem value={"12 months"}>12 months</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth required>
                    <InputLabel id="duration-select-labael">Duration</InputLabel>
                    <Select
                      labelId="duration-select-labael"
                      id="duration-select"
                      value={duration}
                      label="Duration"
                      onChange={e => setDuration(e.target.value)}
                    >
                      <MenuItem value={"1 year"}>1 year</MenuItem>
                      <MenuItem value={"2 years"}>2 years</MenuItem>
                      <MenuItem value={"3 years"}>3 years</MenuItem>
                      <MenuItem value={"4 years"}>4 years</MenuItem>
                      <MenuItem value={"5 years"}>5 years</MenuItem>
                    </Select>
                  </FormControl>

                  <Button variant="contained" component="button" type="submit">
                    Save
                  </Button>
                </Stack>
              </Box>

              <TableContainer component={Paper} elevation={2} sx={customScheduleTableStyle}>
                <Table size="small" aria-label="table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{fontWeight: 600}} align="center">Site</TableCell>
                      <TableCell sx={{fontWeight: 600}} align="center">Start</TableCell>
                      <TableCell sx={{fontWeight: 600}} align="center">Period</TableCell>
                      <TableCell sx={{fontWeight: 600}} align="center">Duration</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {scheduleList.map((row) => (
                      <TableRow
                        key={row.site}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell  align="center" component="th" scope="row">{row.site}</TableCell>
                        <TableCell align="center">{row.startTime}</TableCell>
                        <TableCell align="center">{row.period}</TableCell>
                        <TableCell align="center">{row.duration}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Plan;