import {
  useContext,
  useEffect,
  useState
} from "react";

import {
  Button,
  Divider,
  Grid,
  Stack,
} from "@mui/material";

import GridContainer from "../GridContainer";
import BoxTile from "../BoxTile";
import TitleTile from "../TitleTile";
import SettingDialog from "../SettingDialog";
import { settingRead } from "../../API/settingAPI";
import { AlertContext } from '../../context/AlertContextProvider';

function Admin() {
  const [open, setOpen] = useState(false);
  const [listOfSettings, setListOfSettings] = useState([]);
  const [currSetting, setCurrSetting] = useState("");
  const { setAlert } = useContext(AlertContext);
  const serviceCodeDivider = "Type Of Service";

  useEffect(() => {
    settingRead("setting/all", setListOfSettings, setAlert, null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const settingBtnStyle = {
    variant: "text",
    color: "inherit"
  }

  function handleClickSettingBtn(setting) {
    setCurrSetting(setting);
    setOpen(true);
  }

  function handleDialogSelfClose() {
    setOpen(false);
    setCurrSetting("");
  }

  return (
    <GridContainer>
      <Grid
        item
        xs={12}
        md={12}
      >
        <BoxTile>
          <TitleTile>Settings</TitleTile>

          <Stack
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
          >
            {
              listOfSettings.slice(0, listOfSettings.indexOf(serviceCodeDivider)).map(setting => (
                <Button
                  key={setting}
                  {...settingBtnStyle}
                  onClick={() => handleClickSettingBtn(setting)}
                >
                  {setting}
                </Button>
              ))
            }
          </Stack>

          <Divider variant="middle" />

          <Stack
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
          >
            {
              listOfSettings.slice(listOfSettings.indexOf(serviceCodeDivider)).map(setting => (
                <Button
                  key={setting}
                  {...settingBtnStyle}
                  onClick={() => handleClickSettingBtn(setting)}
                >
                  {setting}
                </Button>
              ))
            }
          </Stack>

          <SettingDialog selfOpen={open} currSetting={currSetting} handleSelfClose={handleDialogSelfClose} />
        </BoxTile>
      </Grid>
    </GridContainer>
  );
}

export default Admin;