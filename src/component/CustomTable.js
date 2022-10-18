import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from "@mui/material";

const rowsPerPage = 10;

const customTableStyle = {
  width: "90%",
  marginTop: "12px",
  marginBottom: "12px",
  alignSelf: "center"
};

function tableHeaderConvert(header) {
  let strConvert = "";
  const strToArr = header.split("");

  strToArr.forEach(char => {
    if (char === char.toUpperCase()) {
      strConvert += " ";
    }
    strConvert += char;
  });

  return strConvert.charAt(0).toUpperCase() + strConvert.slice(1);
}

function CustomTable({ data, countAllRows=null, currPage=null, setCurrPage=null }) {
  return (
    <>
      {
        data.length > 0 &&
        <Paper sx={customTableStyle}>
          <TableContainer>
            <Table
              stickyHeader
              size="small"
              aria-label="table"
            >
              <TableHead>
                <TableRow>
                  {
                    Object.keys(data[0]).map(tableCol => (
                      <TableCell
                        key={tableCol}
                        sx={{ fontWeight: 600 }}
                        align="center"
                      >
                        {tableHeaderConvert(tableCol)}
                      </TableCell>
                    ))
                  }
                </TableRow>
              </TableHead>

              <TableBody>
                {
                  (data.length > 0) && data.map(row => (
                    <TableRow key={row[Object.keys(row)[0]]}>
                      {
                        Object.keys(row).map(tableCol => (
                          <TableCell
                            key={`${row[Object.keys(row)[0]]}-${tableCol}`}
                            align="center"
                          >
                            {row[tableCol]}
                          </TableCell>
                        ))
                      }
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>

          {
            countAllRows > rowsPerPage &&
            <TablePagination
              component="div"
              count={countAllRows}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[rowsPerPage]}
              page={currPage}
              onPageChange={(e, page) => setCurrPage(page)}
            />
          }
        </Paper>
      }
    </>
  );
}

export default CustomTable;