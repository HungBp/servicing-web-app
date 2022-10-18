import { Box } from "@mui/material";

import Menu from "./component/layout/Menu";
import View from "./component/layout/View";
import AlertContextProvider from "./context/AlertContextProvider";

const sideBarSize = "180px";

function App() {
  return (
    <AlertContextProvider>
      <Box
        display="flex"
        position="fixed"
        width={{ xs: "100%", sm: sideBarSize }}
        minHeight={{ xs: "0", sm: "100%" }}
        zIndex={10}
      >
        <Menu />
      </Box>

      <Box
        position="absolute"
        width={{ xs: "100%", sm: `calc(100% - ${sideBarSize})` }}
        left={{ xs: "0", sm: sideBarSize }}
        top={{ xs: "60px", sm: "0" }}
      >
        <View />
      </Box>
    </AlertContextProvider>
  );
}

export default App;
