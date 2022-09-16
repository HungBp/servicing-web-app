import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Report() {
  const customUserStyle = {
    minHeight: 'calc(100vh - 60px)',
    backgroundColor: '#f5f5f5'
  };

  const customTileStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
    borderRadius: "8px",
    backgroundColor: "white",
    height: "calc(100% - 2 * 20px)"
  }

  return (
    <div className='report'>
      <Grid container spacing={0} sx={customUserStyle}>
        <Grid item xs={12} md={12}>
          <Box sx={customTileStyle}>
            <Typography
              variant='h5'
              margin={1.5}
            >
              Maintenance Form
            </Typography>
            <Typography
              variant='subtitle1'
            >
              Report No.: 1234567890
            </Typography>
            <Box
              component="form"
              sx={{
                '&.MuiBox-root': { width: '75%' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                fullWidth
                margin="dense"
                id="site"
                label="Site"
              />
              <TextField
                fullWidth
                margin="dense"
                id="issue"
                label="Issue"
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Report;