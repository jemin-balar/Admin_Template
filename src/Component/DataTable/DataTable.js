import React from "react";
import MUIDataTable from "mui-datatables";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

const getMuiTheme = () =>
   createTheme({
     components: {
       MuiTypography: {
         styleOverrides: {
           root: {
             fontSize: 18,
             fontWeight: 500,
             fontFamily: "Montserrat, Helvetica, Arial sans-serif",
           },
         },
       },
       MUIDataTableHeadCell: {
         styleOverrides: {
           root: {
             height: "10px",
           },
           fixedHeader: {
             backgroundColor: "#F3F2F7",
           },
           data: {
             fontWeight: 700,
           },
         },
       },
       MUIDataTableBodyCell: {
         styleOverrides: {
           root: {
             color: "#6E6B7B",            
           },
         },
       },
       MuiTablePagination: {
         styleOverrides: {
           selectLabel: {
             marginTop: "auto",
             fontFamily: "Montserrat, Helvetica, Arial sans-serif",
           },
           toolbar: {
             fontFamily: "Montserrat, Helvetica, Arial sans-serif",
           },
           displayedRows: {
             marginTop: "auto",
             fontFamily: "Montserrat, Helvetica, Arial sans-serif",
           },
         },
       },
     },
   });

export default function DataTable({ title, data, columns, options }) {
  return (
    <ThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  );
}
