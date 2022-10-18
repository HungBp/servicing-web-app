import { useState } from "react";
import {
  Grid,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import GridContainer from "../GridContainer";
import BoxTile from "../BoxTile";
import TitleTile from "../TitleTile";
import StackForm from "../StackForm";

function Contract() {
  const [site, setSite] = useState("");
  const [period, setPeriod] = useState("");
  const [duration, setDuration] = useState("");
  const [startTime, setStartTime] = useState(null);

  return (
    <GridContainer>
      <Grid
        item
        xs={12}
        md={12}
      >
        <BoxTile>
          <TitleTile>List</TitleTile>

          <StackForm>
            <FormControl
              fullWidth
              size="small"
              required
            >
              <InputLabel id="site-select-labael">Site</InputLabel>
              <Select
                labelId="site-select-labael"
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

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Start"
                value={startTime}
                onChange={(newValue) => setStartTime(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    size="small"
                    required
                  />
                )}
              />
            </LocalizationProvider>

            <FormControl
              fullWidth
              size="small"
              required
            >
              <InputLabel id="period-select-labael">Period</InputLabel>
              <Select
                labelId="period-select-labael"
                id="period-select"
                value={period}
                label="Period"
                onChange={(e) => setPeriod(e.target.value)}
              >
                <MenuItem value={"1 month"}>1 month</MenuItem>
                <MenuItem value={"3 months"}>3 months</MenuItem>
                <MenuItem value={"6 months"}>6 months</MenuItem>
                <MenuItem value={"9 months"}>9 months</MenuItem>
                <MenuItem value={"12 months"}>12 months</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              fullWidth
              size="small"
              required
            >
              <InputLabel id="duration-select-labael">
                Duration
              </InputLabel>
              <Select
                labelId="duration-select-labael"
                id="duration-select"
                value={duration}
                label="Duration"
                onChange={(e) => setDuration(e.target.value)}
              >
                <MenuItem value={"1 year"}>1 year</MenuItem>
                <MenuItem value={"2 years"}>2 years</MenuItem>
                <MenuItem value={"3 years"}>3 years</MenuItem>
                <MenuItem value={"4 years"}>4 years</MenuItem>
                <MenuItem value={"5 years"}>5 years</MenuItem>
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
    </GridContainer>
  );
}

export default Contract;