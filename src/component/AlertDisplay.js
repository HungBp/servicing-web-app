import { useContext } from "react";

import {
  Alert,
  Snackbar
} from "@mui/material";

import { AlertContext } from "../context/AlertContextProvider";

function AlertDisplay() {
  const { alert, setAlert } = useContext(AlertContext);

  return (
    <Snackbar
      open={alert !== ""}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
    >
      <Alert
        onClose={() => setAlert("")}
        severity={ alert === "Successfull" ? "success" : "error" }
        sx={{
          whiteSpace: "pre-line"
        }}
      >
        {alert}
      </Alert>
    </Snackbar>
  );
}

export default AlertDisplay;