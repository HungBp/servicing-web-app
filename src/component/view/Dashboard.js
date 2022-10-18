import {
  Grid,
  Stack
} from "@mui/material";
import GridContainer from "../GridContainer";
import BoxTile from "../BoxTile";
import TitleTile from "../TitleTile";
import BarChart from "../../chart/BarChart";
import PieChart from "../../chart/PieChart";
import CustomTable from "../CustomTable";

function Dashboard() {
  function createUpcomingTaskList(site, task, onsiteDate, daysLeft, serviceBy) {
    return { site, task, onsiteDate, daysLeft, serviceBy };
  }

  function createMaintenanceRecordList(id, dateReport, issue, status) {
    return { id, dateReport, issue, status };
  }

  const upcomingTaskList = [
    createUpcomingTaskList("A", "Period maintenance", "01-10-2022", 10, "Nguyen Van A"),
    createUpcomingTaskList("B", "Period maintenance", "02-10-2022", 11, "Nguyen Van B"),
    createUpcomingTaskList("C", "Period maintenance", "02-10-2022", 11, "Nguyen Van A"),
    createUpcomingTaskList("D", "Period maintenance", "03-10-2022", 12, "Nguyen Van D"),
    createUpcomingTaskList("E", "Period maintenance", "07-10-2022", 16, "Nguyen Van C"),
    createUpcomingTaskList("F", "Period maintenance", "08-10-2022", 17, "Nguyen Van B"),
  ];

  const maintenanceRecordList = [
    createMaintenanceRecordList(12345, "02-10-2022", "Equipment failed", "Fixed"),
    createMaintenanceRecordList(12435, "01-10-2022", "Equipment damaged", "Replaced"),
    createMaintenanceRecordList(12432, "02-10-2022", "Equipment damaged", "Replaced"),
    createMaintenanceRecordList(12234, "03-10-2022", "Equipment failed", "Fixed"),
    createMaintenanceRecordList(12532, "07-10-2022", "Equipment damaged", "Not Done"),
    createMaintenanceRecordList(12536, "08-10-2022", "Equipment damaged", "Not Done"),
  ];

  return (
    <GridContainer>
      <Grid
        item
        xs={12}
        md={12}
      >
        <BoxTile>
          <TitleTile>Summary Chart</TitleTile>

          <Stack
            spacing={2}
            flex={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            margin="10px"
          >
            <BarChart/>
          </Stack>
        </BoxTile>
      </Grid>

      <Grid
        item
        xs={12}
        md={12}
      >
        <BoxTile>
          <TitleTile>Performance</TitleTile>

          <Stack
            spacing={2}
            flex={1}
            marginBottom="12px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            margin="10px"
          >
            <PieChart/>
          </Stack>
        </BoxTile>
      </Grid>

      <Grid
        item
        xs={12}
        md={12}
      >
        <BoxTile>
          <TitleTile>Upcoming Task</TitleTile>

          <CustomTable data={upcomingTaskList} />
        </BoxTile>
      </Grid>

      <Grid
        item
        xs={12}
        md={12}
      >
        <BoxTile>
          <TitleTile>Maintenance Record</TitleTile>

          <CustomTable data={maintenanceRecordList} />
        </BoxTile>
      </Grid>
    </GridContainer>
  );
}

export default Dashboard;
