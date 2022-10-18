import {
  writeFileXLSX,
  utils
} from "xlsx";

function excelWrite(data, currSetting) {
  const ws = utils.json_to_sheet(data);
  const wb = utils.book_new();
  const sheetName = currSetting.toLowerCase().replace(" ", "");

  utils.book_append_sheet(wb, ws, sheetName);
  writeFileXLSX(wb, "settings.xlsx");
}

export { excelWrite };