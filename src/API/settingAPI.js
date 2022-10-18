import axios from "axios";

/**
 * @function settingRead
 * @param {string} url
 * @param {Function} setData
 * @param {Function} setAlert
 * @param {Function} setCurrPage
 */
function settingRead(url, setData, setAlert, setCountAllRows) {
  axios.get(url)
    .then(res => {
      if (res.statusText === "OK") {
        setData(res.data.rows);
        setCountAllRows && setCountAllRows(res.data.count);
        setAlert("");
      }
    })
    .catch(err => {
      const errMsg = (err.response.data.error) ? err.response.data.error : err.message;
      setAlert(errMsg);
    });
}

function settingFileUpload(url, setData, data, setAlert, setCountAllRows) {
  const formData = new FormData();

  formData.append("excel", data);

  axios.put(url, formData)
    .then(res => {
      if (res.statusText === "OK") {
        setData(res.data.rows);
        setCountAllRows(res.data.count);
        setAlert("Successfull");
      }
    })
    .catch(err => {
      const errMsg = (err.response.data.error) ? err.response.data.error : err.message;
      setAlert(errMsg);
    });
}

export {
  settingRead,
  settingFileUpload,
};