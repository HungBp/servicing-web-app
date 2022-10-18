import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";

const marginBoxTile = "10px";

const BoxTile = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  margin: marginBoxTile,
  borderRadius: "8px",
  backgroundColor: "white",
  height: `calc(100% - 2 * ${marginBoxTile})`,
}));

export default BoxTile;