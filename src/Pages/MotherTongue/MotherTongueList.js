import React, { useState } from "react";
import Layout from "../../Component/Layout";
import { Box, Card, Tooltip, Button } from "@mui/material";
import DataTable from "../../Component/DataTable/DataTable";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddMotherTongue from "./MotherTongue";
import DeleteMotherTongue from "../../Component/DeleteModal/DeleteModal";

export default function MotherTongueList() {
  const initialData = {
    mothertongueid: "",
    mothertongue: "",
  };
  const [modalShow, setModalShow] = useState(false);
  const [fields, setFields] = useState(initialData);
  const [confirmation, setConfirmation] = useState(false);
  const [deletedId, setDeletedId] = useState("");
  const [title, setTitle] = useState("");
  const [motherTongueError, setMotherTongueError] = useState("");

  const handleOpen = (editData = {}) => {
    // console.log("edit data", fields);
    // console.log("edit data1", editData);
    setModalShow(true);
    setFields(editData ? editData : fields);
    setTitle(
      editData?.mothertongueid ? "Edit Mother Tongue" : "Add Mother Tongue"
    );
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
    if (!fields.mothertongue) {
      setMotherTongueError("Please enter mother tongue");
    } else {
      setMotherTongueError("");
    }
  };

  const confirmationModal = (deleteData = {}) => {
    setConfirmation(true);
    // setDeletedId(deleteData?.mothertongueid ? deleteData.mothertongueid : "");
    // console.log("delete data", deletedId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fields.mothertongue) {
      setMotherTongueError("Please enter mother tongue");
    } else {
      setMotherTongueError("");
    }
  };
  const closeConfrimation = () => {
    setConfirmation(false);
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
        customBodyRender: (value, tableMeta) => {
          return (
            <div className="action">
              <Tooltip disableFocusListener title="Edit Mother Tongue">
                <Button
                  sx={{ color: "#283593" }}
                  // onClick={() => handleOpen(`${tableMeta.rowData}`)}
                  onClick={() =>
                    handleOpen({
                      mothertongueid: tableMeta.rowData[0],
                      mothertongue: tableMeta.rowData[1],
                    })
                  }
                >
                  <EditIcon />
                </Button>
              </Tooltip>
              <Tooltip disableFocusListener title="Delete Mother Tongue">
                <Button
                  sx={{ color: "#ff5252" }}
                  // onClick={() => confirmationModal(`${tableMeta.rowData}`)}
                  onClick={() =>
                    confirmationModal({
                      mothertongueid: tableMeta.rowData[0],
                      mothertongue: tableMeta.rowData[1],
                    })
                  }
                >
                  <DeleteIcon />
                </Button>
              </Tooltip>
            </div>
          );
        },
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
    selectableRows: "none",
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
              motherTongueError={motherTongueError}
              handleSubmit={handleSubmit}
            />
            <DeleteMotherTongue
              title={"Are You Sure You Want To Delete???"}
              openModal={confirmation}
              closeModal={closeConfrimation}
            />
          </Card>
        </Box>
      </Layout>
    </>
  );
}
