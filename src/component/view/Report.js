import { useRef, useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Stack,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SignatureCanvas from 'react-signature-canvas';
import GridContainer from "../GridContainer";
import BoxTile from "../BoxTile";
import TitleTile from "../TitleTile";
import StackForm from "../StackForm";

function Report() {
  const [dateReport, setDateReport] = useState(null);
  const [fromReport, setFromReport] = useState(null);
  const [toReport, setToReport] = useState(null);
  const [site, setSite] = useState("");
  const refClientSignature = useRef();
  const refVietAnSignature = useRef();

  // clear signature
  function hanldeClickClearClientBtn() {
    refClientSignature.current.clear();
  }

  function hanldeClickClearVietAnBtn() {
    refVietAnSignature.current.clear();
  }

  return (
    <GridContainer>
      <Grid
        item
        xs={12}
        md={12}
      >
        <BoxTile>
          <TitleTile>Maintenance Form</TitleTile>

          <StackForm>
            <Typography
              variant="subtitle1"
              textAlign="center"
            >
              Report No.: 1234567890
            </Typography>

            <FormControl
              fullWidth
              margin="dense"
              size="small"
              required
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

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                value={dateReport}
                onChange={newValue => setDateReport(newValue)}
                renderInput={params => (
                  <TextField
                    {...params}
                    margin="dense"
                    fullWidth
                    size="small"
                    required
                  />
                )}
              />
            </LocalizationProvider>

            <Stack
              direction={{xs: "column", sm: "row"}}
              justifyContent="space-between"
              width="100%"
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="From"
                  value={fromReport}
                  minutesStep={5}
                  ampm={false}
                  onChange={newValue => setFromReport(newValue)}
                  renderInput={params => (
                    <TextField
                      {...params}
                      margin="dense"
                      sx={{width: {xs: "100%", sm: "49%"}}}
                      size="small"
                      required
                    />
                  )}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="To"
                  value={toReport}
                  minutesStep={5}
                  ampm={false}
                  onChange={newValue => setToReport(newValue)}
                  renderInput={params => (
                    <TextField
                      {...params}
                      margin="dense"
                      sx={{width: {xs: "100%", sm: "49%"}}}
                      size="small"
                      required
                    />
                  )}
                />
              </LocalizationProvider>
            </Stack>

            <TextField
              fullWidth
              margin="dense"
              id="issue"
              label="Issue"
              multiline
              rows={2}
              size="small"
              required
            />

            <TextField
              fullWidth
              margin="dense"
              id="description"
              label="Description"
              multiline
              rows={2}
              size="small"
            />

            <TextField
              fullWidth
              margin="dense"
              id="troubleshoot"
              label="Troubleshoot"
              multiline
              rows={2}
              size="small"
            />

            <FormControl
              fullWidth
              margin="dense"
              size="small"
              required
            >
              <InputLabel id="status-select-label">Status</InputLabel>
              <Select
                labelId="status-select-label"
                id="status-select"
                value={site}
                label="Status"
                onChange={(e) => setSite(e.target.value)}
              >
                <MenuItem value={"done"}>Done</MenuItem>
                <MenuItem value={"pending"}>Pending</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              component="label"
              startIcon={<PhotoCamera />}
              size="small"
            >
              Image
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
              />
            </Button>

            <Stack
              spacing={1}
              direction={{xs: "column", sm: "row"}}
              justifyContent="center"
              alignItems="center"
            >
              <Stack
                spacing={0}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="subtitle1">
                  Client Engineer Signature
                </Typography>

                <SignatureCanvas
                  ref={refClientSignature}
                  penColor='black'
                  maxWidth={2}
                  canvasProps={{width: 250, height: 150, style: {border: "1px rgba(0, 0, 0, 0.3) dashed"}}}
                />

                <Button
                  variant="text"
                  onClick={hanldeClickClearClientBtn}
                  size="small"
                >
                  Clear
                </Button>
              </Stack>

              <Stack
                spacing={0}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="subtitle1">
                  Viet An Engineer Signature
                </Typography>

                <SignatureCanvas
                  ref={refVietAnSignature}
                  penColor='black'
                  maxWidth={2}
                  canvasProps={{width: 250, height: 150, style: {border: "1px rgba(0, 0, 0, 0.3) dashed"}}}
                />

                <Button
                  variant="text"
                  onClick={hanldeClickClearVietAnBtn}
                  size="small"
                >
                  Clear
                </Button>
              </Stack>
            </Stack>

            <Button
              variant="contained"
              component="button"
              type="submit"
              size="small"
            >
              Submit
            </Button>
          </StackForm>
        </BoxTile>
      </Grid>
    </GridContainer>
  );
}

export default Report;
