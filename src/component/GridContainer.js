import Grid from "@mui/material/Grid";

const customGridStyle = {
  minHeight: "calc(100vh - 60px)",
  backgroundColor: "#f5f5f5",
};

function GridContainer({children}) {
  return (
    <Grid
      container
      spacing={0}
      sx={customGridStyle}
    >
      {children}
    </Grid>
  );
}

export default GridContainer;