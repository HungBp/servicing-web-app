import Typography from "@mui/material/Typography";

function TitleTile({children}) {
  return (
    <Typography
      variant="h6"
      margin={1.5}
      lineHeight="1.25rem"
    >
      {children}
    </Typography>
  );
}

export default TitleTile;