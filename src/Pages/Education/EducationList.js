import React, { useState } from "react";
import Layout from "../../Component/Layout";
import { Box, Card, Tooltip, Button } from "@mui/material";
import DataTable from "../../Component/DataTable/DataTable";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddEducation from "./Education";
import DeleteEducation from "../../Component/DeleteModal/DeleteModal";

export default function EducationList() {
  const initialData = {
    educationid: "",
    education: "",
  };
  const [modalShow, setModalShow] = useState(false);
  const [fields, setFields] = useState(initialData);
  const [confirmation, setConfirmation] = useState(false);
  const [title, setTitle] = useState("");

  const handleOpen = (editData = {}) => {
    setModalShow(true);
    setFields(editData ? editData : fields);
    setTitle(editData?.educationid ? "Edit Education" : "Add Education");
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const confirmationModal = (deleteData = {}) => {
    setConfirmation(true);
  };

  const closeConfrimation = () => {
    setConfirmation(false);
  };

  const columns = [
    {
      name: "education_id",
      label: "Education ID",
    },
    {
      name: "education",
      label: "Education",
    },
    {
      label: "Action",
      name: "action",
      options: {
        customBodyRender: (value, tableMeta) => (
          <div className="action">
            <Tooltip disableFocusListener title="Edit Education">
              <Button
                sx={{ color: "#283593" }}
                onClick={() =>
                  handleOpen({
                    educationid: tableMeta.rowData[0],
                    education: tableMeta.rowData[1],
                  })
                }
              >
                <EditIcon />
              </Button>
            </Tooltip>
            <Tooltip disableFocusListener title="Delete Education">
              <Button
                sx={{ color: "#ff5252" }}
                onClick={() =>
                  confirmationModal({
                    educationid: tableMeta.rowData[0],
                    education: tableMeta.rowData[1],
                  })
                }
              >
                <DeleteIcon />
              </Button>
            </Tooltip>
          </div>
        ),
      },
    },
  ];

  const data = [
    { education_id: 1, education: "Test Corp" },
    { education_id: 2, education: "Test Corp" },
    { education_id: 3, education: "Test Corp" },
    { education_id: 4, education: "Test Corp" },
  ];

  const options = {
    // serverSide: true,
    selectableRows: "none",
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    customToolbar: () => (
      <Tooltip disableFocusListener title="Add Education">
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
              title={"Education"}
              data={data}
              columns={columns}
              options={options}
            />
            <AddEducation
              openModal={modalShow}
              closeModal={handleClose}
              title={title}
              fields={fields}
              handleChange={handleChange}
            />
            <DeleteEducation
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
