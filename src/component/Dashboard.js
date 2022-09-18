import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  aspectRatio: 3,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const dataBarChart = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const dataPieChart = {
  labels: ["Red", "Blue", "Yellow", "Green"],
  datasets: [
    {
      label: "# of Votes",
      data: [7, 10, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function Dashboard() {
  function createUpcomingTaskList(site, task, onsiteDate, daysLeft, serviceBy) {
    return { site, task, onsiteDate, daysLeft, serviceBy };
  }

  function createMaintenanceRecordList(no, dateReport, issue, status) {
    return { no, dateReport, issue, status };
  }

  const upcomingTaskList = [
    createUpcomingTaskList(
      "A",
      "Period maintenance",
      "01-10-2022",
      10,
      "Nguyen Van A"
    ),
    createUpcomingTaskList(
      "B",
      "Period maintenance",
      "02-10-2022",
      11,
      "Nguyen Van B"
    ),
    createUpcomingTaskList(
      "C",
      "Period maintenance",
      "02-10-2022",
      11,
      "Nguyen Van A"
    ),
    createUpcomingTaskList(
      "D",
      "Period maintenance",
      "03-10-2022",
      12,
      "Nguyen Van D"
    ),
    createUpcomingTaskList(
      "E",
      "Period maintenance",
      "07-10-2022",
      16,
      "Nguyen Van C"
    ),
    createUpcomingTaskList(
      "F",
      "Period maintenance",
      "08-10-2022",
      17,
      "Nguyen Van B"
    ),
  ];

  const maintenanceRecordList = [
    createMaintenanceRecordList(
      12345,
      "02-10-2022",
      "Equipment failed",
      "Fixed"
    ),
    createMaintenanceRecordList(
      12435,
      "01-10-2022",
      "Equipment damaged",
      "Replaced"
    ),
    createMaintenanceRecordList(
      12432,
      "02-10-2022",
      "Equipment damaged",
      "Replaced"
    ),
    createMaintenanceRecordList(
      12234,
      "03-10-2022",
      "Equipment failed",
      "Fixed"
    ),
    createMaintenanceRecordList(
      12532,
      "07-10-2022",
      "Equipment damaged",
      "Not Done"
    ),
    createMaintenanceRecordList(
      12536,
      "08-10-2022",
      "Equipment damaged",
      "Not Done"
    ),
  ];

  const customUserStyle = {
    minHeight: "calc(100vh - 60px)",
    backgroundColor: "#f5f5f5",
  };

  const customTileStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "20px",
    borderRadius: "8px",
    backgroundColor: "white",
    height: "calc(100% - 2 * 20px)",
  };

  const customTableStyle = {
    width: "90%",
    marginBottom: "12px",
    alignSelf: "center",
    overflowY: "auto",
    maxHeight: "200px",
  };

  return (
    <div className="dashboard">
      <Grid
        container
        spacing={0}
        sx={customUserStyle}
      >
        <Grid
          item
          xs={12}
          md={6}
        >
          <Box sx={customTileStyle}>
            <Typography
              variant="h6"
              margin={1.5}
              lineHeight="1.25rem"
            >
              Summary Chart
            </Typography>

            <Stack
              spacing={2}
              flexGrow={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              margin="10px"
            >
              <Bar
                options={options}
                data={dataBarChart}
              />
            </Stack>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
        >
          <Box sx={customTileStyle}>
            <Typography
              variant="h6"
              margin={1.5}
              lineHeight="1.25rem"
            >
              Upcoming Task
            </Typography>

            <Stack
              spacing={2}
              flexGrow={1}
              marginBottom="12px"
              direction="row"
              justifyContent="center"
            >
              <TableContainer
                component={Paper}
                elevation={2}
                sx={customTableStyle}
              >
                <Table
                  size="small"
                  aria-label="table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ fontWeight: 600 }}
                        align="center"
                      >
                        Site
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 600 }}
                        align="center"
                      >
                        Task
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 600 }}
                        align="center"
                      >
                        Date
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 600 }}
                        align="center"
                      >
                        Days left
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 600 }}
                        align="center"
                      >
                        Service by
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {upcomingTaskList.map((row) => (
                      <TableRow
                        key={row.site}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          align="center"
                          component="th"
                          scope="row"
                        >
                          {row.site}
                        </TableCell>
                        <TableCell align="center">{row.task}</TableCell>
                        <TableCell align="center">{row.onsiteDate}</TableCell>
                        <TableCell align="center">{row.daysLeft}</TableCell>
                        <TableCell align="center">{row.serviceBy}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
        >
          <Box sx={customTileStyle}>
            <Typography
              variant="h6"
              margin={1.5}
              lineHeight="1.25rem"
            >
              Maintenance Record
            </Typography>

            <Stack
              spacing={2}
              flexGrow={1}
              marginBottom="12px"
              direction="row"
              justifyContent="center"
            >
              <TableContainer
                component={Paper}
                elevation={2}
                sx={customTableStyle}
              >
                <Table
                  size="small"
                  aria-label="table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ fontWeight: 600 }}
                        align="center"
                      >
                        No.
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 600 }}
                        align="center"
                      >
                        Date
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 600 }}
                        align="center"
                      >
                        Issue
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 600 }}
                        align="center"
                      >
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {maintenanceRecordList.map((row) => (
                      <TableRow
                        key={row.no}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          align="center"
                          component="th"
                          scope="row"
                        >
                          {row.no}
                        </TableCell>
                        <TableCell align="center">{row.dateReport}</TableCell>
                        <TableCell align="center">{row.issue}</TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
        >
          <Box sx={customTileStyle}>
            <Typography
              variant="h6"
              margin={1.5}
              lineHeight="1.25rem"
            >
              Performance
            </Typography>

            <Stack
              spacing={2}
              flexGrow={1}
              marginBottom="12px"
              direction="row"
              justifyContent="center"
              alignItems="center"
              margin="10px"
            >
              <Pie
                options={options}
                data={dataPieChart}
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
