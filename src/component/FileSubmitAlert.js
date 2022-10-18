import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";

function FileSubmitAlert({ open, setOpen, selectedFile, setSelectedFile, fileRef, handleUpload }) {
  function handleClickYesBtn() {
    selectedFile && handleUpload();
    setSelectedFile(null);
    fileRef.current.value = "";
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Replace existing data?
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This will erase existing data and replace with the new one. Are you sure?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => setOpen(false)}
        >
          No
        </Button>

        <Button
          onClick={handleClickYesBtn}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FileSubmitAlert;