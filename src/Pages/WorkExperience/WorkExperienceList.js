import React, { useState } from "react";
import Layout from "../../Component/Layout";
import { Box, Card, Tooltip, Button } from "@mui/material";
import DataTable from "../../Component/DataTable/DataTable";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddWorkExperience from "../WorkExperience/WorkExperience";
import DeleteWorkExperience from "../../Component/DeleteModal/DeleteModal";

export default function WorkExperienceList() {
  const initialData = {
    workexperienceid: "",
    workexperience: "",
  };
  const [modalShow, setModalShow] = useState(false);
  const [fields, setFields] = useState(initialData);
  const [confirmation, setConfirmation] = useState(false);
  const [title, setTitle] = useState("");

  const handleOpen = (editData = {}) => {
    setModalShow(true);
    setFields(editData ? editData : fields);
    setTitle(
      editData?.workexperienceid
        ? "Edit Work Experience"
        : "Add Work Experience"
    );
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
      name: "workexperience_id",
      label: "Work Experience ID",
    },
    {
      name: "workexperience",
      label: "Work Experience",
    },
    {
      label: "Action",
      name: "action",
      options: {
        customBodyRender: (value, tableMeta) => (
          <div className="action">
            <Tooltip disableFocusListener title="Edit Work Experience">
              <Button
                sx={{ color: "#283593" }}
                onClick={() =>
                  handleOpen({
                    workexperienceid: tableMeta.rowData[0],
                    workexperience: tableMeta.rowData[1],
                  })
                }
              >
                <EditIcon />
              </Button>
            </Tooltip>
            <Tooltip disableFocusListener title="Delete Work Experience">
              <Button
                sx={{ color: "#ff5252" }}
                onClick={() =>
                  confirmationModal({
                    workexperienceid: tableMeta.rowData[0],
                    workexperience: tableMeta.rowData[1],
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
    { workexperience_id: 1, workexperience: "Test Corp" },
    { workexperience_id: 2, workexperience: "Test Corp" },
    { workexperience_id: 3, workexperience: "Test Corp" },
    { workexperience_id: 4, workexperience: "Test Corp" },
  ];

  const options = {
    // serverSide: true,
    selectableRows: "none",
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    customToolbar: () => (
      <Tooltip disableFocusListener title="Add Work Experience">
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
              title={"Work Experience"}
              data={data}
              columns={columns}
              options={options}
            />
            <AddWorkExperience
              openModal={modalShow}
              closeModal={handleClose}
              title={title}
              fields={fields}
              handleChange={handleChange}
            />
            <DeleteWorkExperience
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
