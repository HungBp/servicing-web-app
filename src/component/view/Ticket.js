import { useState } from "react";
import {
  Grid,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";
import GridContainer from "../GridContainer";
import BoxTile from "../BoxTile";
import TitleTile from "../TitleTile";
import StackForm from "../StackForm";
import CustomTable from "../CustomTable";

function Ticket() {
  const [site, setSite] = useState("");
  const [duration, setDuration] = useState("");

  function createSchedule(site, startTime, period, duration, assignTo) {
    return { site, startTime, period, duration, assignTo };
  }

  const scheduleList = [
    createSchedule("A", "25-08-2022", "3 months", "5 years", "Nguyen Van A"),
    createSchedule("B", "25-08-2022", "3 months", "5 years", "Nguyen Van A"),
    createSchedule("C", "25-08-2022", "6 months", "5 years", "Nguyen Van A"),
    createSchedule("D", "22-08-2022", "12 months", "5 years", "Nguyen Van D"),
    createSchedule("E", "20-08-2022", "12 months", "5 years", "Nguyen Van D"),
  ];

  return (
    <GridContainer>
      <Grid
        item
        xs={12}
        md={12}
      >
        <BoxTile>
          <TitleTile>Assign</TitleTile>

          <StackForm
            direction={{ xs: "column",md: "row" }}
          >
            <FormControl
              fullWidth
              required
              size="small"
            >
              <InputLabel id="site-select-label">Site</InputLabel>
              <Select
                labelId="site-select-label"
                id="site-select"
                value={site}
                label="Site"
                onChange={(e) => setSite(e.target.value)}
              >
                <MenuItem value={"A"}>A</MenuItem>
                <MenuItem value={"B"}>B</MenuItem>
                <MenuItem value={"C"}>C</MenuItem>
                <MenuItem value={"D"}>D</MenuItem>
                <MenuItem value={"E"}>E</MenuItem>
                <MenuItem value={"F"}>F</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              fullWidth
              required
              size="small"
            >
              <InputLabel id="duration-select-labael">
                Assign to
              </InputLabel>
              <Select
                labelId="duration-select-labael"
                id="duration-select"
                value={duration}
                label="Duration"
                onChange={(e) => setDuration(e.target.value)}
              >
                <MenuItem value={"Nguyen Van A"}>Nguyen Van A</MenuItem>
                <MenuItem value={"Nguyen Van B"}>Nguyen Van B</MenuItem>
                <MenuItem value={"Nguyen Van C"}>Nguyen Van C</MenuItem>
                <MenuItem value={"Nguyen Van D"}>Nguyen Van D</MenuItem>
                <MenuItem value={"Nguyen Van E"}>Nguyen Van E</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              component="button"
              type="submit"
              size="small"
            >
              Save
            </Button>
          </StackForm>
        </BoxTile>
      </Grid>

      <Grid
        item
        xs={12}
        md={12}
      >
        <BoxTile>
          <TitleTile>List</TitleTile>

          <CustomTable data={scheduleList} />
        </BoxTile>
      </Grid>
    </GridContainer>
  );
}

export default Ticket;
