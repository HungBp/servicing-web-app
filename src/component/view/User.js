import {
  Grid,
  Typography,
  Stack,
  Button,
  Card,
  IconButton
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import DoDisturbOffIcon from "@mui/icons-material/DoDisturbOff";
import AppsIcon from "@mui/icons-material/Apps";
import GridContainer from "../GridContainer";
import BoxTile from "../BoxTile";
import TitleTile from "../TitleTile";
import CustomTable from "../CustomTable";

function User() {
  function createCheckTimeList(date, checkin, checkout) {
    return { date, checkin, checkout };
  }

  function createTodoList(date, site, task, description, serviceBy) {
    return { date, site, task, description, serviceBy };
  }

  const checkTimeList = [
    createCheckTimeList("25-08-2022", "09:00", "14:00"),
    createCheckTimeList("22-08-2022", "07:30", "11:00"),
    createCheckTimeList("20-08-2022", "12:00", "17:00"),
  ];

  const todoList = [
    createTodoList("20-09-2022","ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList("22-09-2022", "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList("24-09-2022", "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList("25-09-2022", "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList("28-09-2022", "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList("29-09-2022", "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList("02-10-2022", "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList("04-10-2022", "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList("05-10-2022", "ABX", "XYZ", "doing something", "Nguyen Van A"),
    createTodoList("10-10-2022", "ABX", "XYZ", "doing something", "Nguyen Van A"),
  ];

  return (
    <GridContainer>
      <Grid
        item
        xs={12}
        md={6}
      >
        <BoxTile>
          <TitleTile>Check In/Out</TitleTile>

          <Stack
            flex={1}
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            alignSelf="center"
          >
            <Button
              variant="contained"
              startIcon={<LoginIcon />}
              size="small"
              fullWidth
            >
              Check In
            </Button>

            <Button
              variant="contained"
              endIcon={<LogoutIcon />}
              size="small"
              fullWidth
            >
              Check Out
            </Button>
          </Stack>

          <CustomTable data={checkTimeList} />
        </BoxTile>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
      >
        <BoxTile>
          <TitleTile>Request</TitleTile>

          <Stack
            flex={1}
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginBottom="12px"
          >
            <Card sx={{ width: "100px", height: "100px" }}>
              <IconButton
                size="medium"
                aria-label="notifications"
                color="warning"
                sx={{ height: "100%" }}
              >
                <EditIcon />

                <Typography
                  variant="caption"
                  margin={1.5}
                  lineHeight="1.25rem"
                >
                  Update Check In/Out
                </Typography>
              </IconButton>
            </Card>

            <Card sx={{ width: "100px", height: "100px" }}>
              <IconButton
                size="medium"
                aria-label="notifications"
                color="secondary"
                sx={{ height: "100%" }}
              >
                <DoDisturbOffIcon />

                <Typography
                  variant="caption"
                  margin={1.5}
                  lineHeight="1.25rem"
                >
                  Annual Leave
                </Typography>
              </IconButton>
            </Card>

            <Card sx={{ width: "100px", height: "100px" }}>
              <IconButton
                size="medium"
                aria-label="notifications"
                color="success"
                sx={{ height: "100%" }}
              >
                <AppsIcon />

                <Typography
                  variant="caption"
                  margin={1.5}
                  lineHeight="1.25rem"
                >
                  Others
                </Typography>
              </IconButton>
            </Card>
          </Stack>
        </BoxTile>
      </Grid>

      <Grid
        item
        xs={12}
        md={12}
      >
        <BoxTile>
          <TitleTile>Task List</TitleTile>

          <CustomTable data={todoList} />
        </BoxTile>
      </Grid>
    </GridContainer>
  );
}

export default User;
