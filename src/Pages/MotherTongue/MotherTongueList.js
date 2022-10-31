import React, { useState } from "react";
import Layout from "../../Component/Layout";
import { Box, Card, Tooltip, Button } from "@mui/material";
import DataTable from "../../Component/DataTable/DataTable";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddMotherTongue from "./MotherTongue";

export default function MotherTongueList() {
  const initialData = {
    mothertongueid: "",
    mothertongue: "",
  };
  const [modalShow, setModalShow] = useState(false);
  const [fields, setFields] = useState(initialData);
  const [title, setTitle] = useState("");

  const handleOpen = (editData = {}) => {
    console.log("edit data", editData);
    setModalShow(true);
    setFields(editData? editData : fields);
    console.log("...field", fields);
    setTitle(editData?.[0] ? "Edit Mother Tongue" : "Add Mother Tongue");
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const columns = [
    {
      label: "Mother Tongue ID",
      name: "_id",
    },
    {
      label: "Mother Tongue",
      name: "mothertongue",
    },
    {
      label: "Action",
      name: "action",
      options: {
        customBodyRender: (value, tableMeta) => (
          <div className="action">
            <Tooltip disableFocusListener title="Edit Mother Tongue">
              <Button
                sx={{ color: "#283593" }}
                onClick={() => handleOpen(`${tableMeta.rowData}`)}
              >
                <EditIcon />
              </Button>
            </Tooltip>
            <Tooltip disableFocusListener title="Delete Mother Tongue">
              <Button sx={{ color: "#ff5252" }}>
                <DeleteIcon />
              </Button>
            </Tooltip>
          </div>
        ),
      },
    },
  ];

  const data = [
    { _id: 1, mothertongue: "Test Corp" },
    { _id: 2, mothertongue: "Test Corp" },
    { _id: 3, mothertongue: "Test Corp" },
    { _id: 4, mothertongue: "Test Corp" },
  ];

  const options = {
    // serverSide: true,
    selectableRows: false,
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    customToolbar: () => (
      <Tooltip disableFocusListener title="Add Mother Tongue">
        <Button onClick={handleOpen}>
          <AddIcon />
        </Button>
      </Tooltip>
    ),
  };

  return (
    <>
      <Layout>
        <Box className="mt-4 mx-5">
          <Card sx={{ boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)" }}>
            <DataTable
              title={"Mother Tongue"}
              data={data}
              columns={columns}
              options={options}
            />
            <AddMotherTongue
              openModal={modalShow}
              closeModal={handleClose}
              title={title}
              fields={fields}
              handleChange={handleChange}
            />
          </Card>
        </Box>
      </Layout>
    </>
  );
}
