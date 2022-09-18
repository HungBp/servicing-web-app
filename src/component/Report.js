import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useState } from "react";

function Report() {
  const [dateReport, setDateReport] = useState(null);

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

  return (
    <div className="report">
      <Grid
        container
        spacing={0}
        sx={customUserStyle}
      >
        <Grid
          item
          xs={12}
          md={12}
        >
          <Box sx={customTileStyle}>
            <Typography
              variant="h6"
              margin={1.5}
              lineHeight="1.25rem"
            >
              Maintenance Form
            </Typography>

            <Stack
              spacing={1}
              flexGrow={1}
              marginBottom="12px"
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="subtitle1">
                Report No.: 1234567890
              </Typography>

              <Box
                component="form"
                sx={{
                  "&.MuiBox-root": { width: "75%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  fullWidth
                  margin="dense"
                  id="site"
                  label="Site"
                  required
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date"
                    value={dateReport}
                    onChange={(newValue) => setDateReport(newValue)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        margin="dense"
                        fullWidth
                        required
                      />
                    )}
                  />
                </LocalizationProvider>

                <TextField
                  fullWidth
                  margin="dense"
                  id="issue"
                  label="Issue"
                  required
                />

                <TextField
                  fullWidth
                  margin="dense"
                  id="description"
                  label="Description"
                />

                <TextField
                  fullWidth
                  margin="dense"
                  id="equipment"
                  label="Equipment"
                />

                <TextField
                  fullWidth
                  margin="dense"
                  id="troubleshoot"
                  label="Troubleshoot"
                />

                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  spacing={5}
                  marginTop="8px"
                >
                  <Button
                    variant="contained"
                    component="label"
                    startIcon={<PhotoCamera />}
                  >
                    Image Upload
                    <input
                      hidden
                      accept="image/*"
                      multiple
                      type="file"
                    />
                  </Button>

                  <Button
                    variant="contained"
                    component="button"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Report;
