import {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';

import {
  AppBar,
  Dialog,
  Grid,
  IconButton,
  Slide,
  Tooltip,
  Typography
} from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import SimCardDownloadRoundedIcon from '@mui/icons-material/SimCardDownloadRounded';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import {
  settingRead,
  settingFileUpload
} from "../API/settingAPI";
import FileSubmitAlert from "./FileSubmitAlert";
import { excelWrite } from '../utils/excelHandle';
import { AlertContext } from '../context/AlertContextProvider';
import CustomTable from './CustomTable';
import GridContainer from './GridContainer';
import BoxTile from './BoxTile';

function SettingDialog({ selfOpen, currSetting, handleSelfClose }) {
  const [setting, setSetting] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [currPage, setCurrPage] = useState(0);
  const [countAllRows, setCountAllRows] = useState(0);
  const fileRef = useRef("");
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    selfOpen && settingRead(`/setting/${currSetting.replace(/\s/g, "").toLowerCase()}/${currPage + 1}`, setSetting, setAlert, setCountAllRows);
    return () => {
      setSetting([]);
      setSelectedFile(null);
      setAlert("");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currSetting, currPage]);

  function handleCloseDialog() {
    handleSelfClose();
    setCurrPage(0);
  }

  return (
    <Dialog
      fullScreen
      open={selfOpen}
      onClose={handleCloseDialog}
      TransitionComponent={Slide}
    >
      <AppBar
        position="relative"
        color="inherit"
        elevation={1}
      >
        <Grid
          container
          alignItems="center"
        >
          <Grid
            item
            xs={4}
          >
            <IconButton
              onClick={handleSelfClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Grid>

          <Grid
            item
            xs={4}
          >
            <Typography
              flex={1}
              textAlign="center"
              variant="h6"
            >
              {currSetting}
            </Typography>
          </Grid>

          <Grid
            item
            xs={4}
            textAlign="right"
          >
            <Tooltip title="Edit">
              <IconButton
                aria-label="edit"
                size="small"
              >
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Upload">
              <IconButton
                aria-label="upload"
                size="small"
                color={selectedFile ? "primary" : "default"}
                component="label"
              >
                <UploadFileRoundedIcon />

                <input
                  hidden
                  accept=".xlsx, .xls, .csv"
                  type="file"
                  ref={fileRef}
                  onChange={() => setSelectedFile(fileRef.current.files[0])}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Download">
              <IconButton
                aria-label="download"
                size="small"
                color="success"
                onClick={() => excelWrite(setting, currSetting)}
              >
                <SimCardDownloadRoundedIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Save">
              <span>
                <IconButton
                  aria-label="save"
                  size="small"
                  disabled={!selectedFile}
                  color={selectedFile ? "primary" : "default"}
                  onClick={() => setOpen(true)}
                >
                  <SaveIcon />
                </IconButton>
              </span>
            </Tooltip>

            <FileSubmitAlert
              open={open}
              setOpen={setOpen}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
              fileRef={fileRef}
              handleUpload={() => settingFileUpload(`/setting/${currSetting.replace(/\s/g, "").toLowerCase()}/${currPage + 1}`, setSetting, selectedFile, setAlert, setCountAllRows)}
            />
          </Grid>
        </Grid>
      </AppBar>

      <GridContainer>
        <Grid
          item
          xs={12}
        >
          <BoxTile>
            <CustomTable
              data={setting}
              countAllRows={countAllRows}
              currPage={currPage}
              setCurrPage={setCurrPage}
            />
          </BoxTile>
        </Grid>
      </GridContainer>
    </Dialog>
  );
}

export default SettingDialog;