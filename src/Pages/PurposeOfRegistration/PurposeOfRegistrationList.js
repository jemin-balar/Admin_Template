import React, { useState } from "react";
import Layout from "../../Component/Layout";
import { Box, Card, Tooltip, Button } from "@mui/material";
import DataTable from "../../Component/DataTable/DataTable";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPurposeOfRegistration from "./PurposeOfRegistration";
import DeletePurposeOfRegistration from "../../Component/DeleteModal/DeleteModal";

export default function PurposeOfRegistrationList() {
  const initialData = {
    purposeofregistrationid: "",
    purposeofregistration: "",
  };
  const [modalShow, setModalShow] = useState(false);
  const [fields, setFields] = useState(initialData);
  const [confirmation, setConfirmation] = useState(false);
  const [title, setTitle] = useState("");

  const handleOpen = (editData = {}) => {
    setModalShow(true);
    setFields(editData ? editData : fields);
    setTitle(
      editData?.purposeofregistrationid
        ? "Edit Purpose Of Registration"
        : "Add Purpose Of Registration"
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
      name: "purposeofregistration_id",
      label: "Purpose Of Registration ID",
    },
    {
      name: "purposeofregistration",
      label: "Purpose Of Registration",
    },
    {
      label: "Action",
      name: "action",
      options: {
        customBodyRender: (value, tableMeta) => (
          <div className="action">
            <Tooltip disableFocusListener title="Edit Purpose Of Registration">
              <Button
                sx={{ color: "#283593" }}
                onClick={() =>
                  handleOpen({
                    purposeofregistrationid: tableMeta.rowData[0],
                    purposeofregistration: tableMeta.rowData[1],
                  })
                }
              >
                <EditIcon />
              </Button>
            </Tooltip>
            <Tooltip
              disableFocusListener
              title="Delete Purpose Of Registration"
            >
              <Button
                sx={{ color: "#ff5252" }}
                onClick={() =>
                  confirmationModal({
                    purposeofregistrationid: tableMeta.rowData[0],
                    purposeofregistration: tableMeta.rowData[1],
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
    { purposeofregistration_id: 1, purposeofregistration: "Test Corp" },
    { purposeofregistration_id: 2, purposeofregistration: "Test Corp" },
    { purposeofregistration_id: 3, purposeofregistration: "Test Corp" },
    { purposeofregistration_id: 4, purposeofregistration: "Test Corp" },
  ];

  const options = {
    // serverSide: true,
    selectableRows: "none",
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    customToolbar: () => (
      <Tooltip disableFocusListener title="Add Purpose Of Registration">
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
              title={"Purpose Of Registration"}
              data={data}
              columns={columns}
              options={options}
            />
            <AddPurposeOfRegistration
              openModal={modalShow}
              closeModal={handleClose}
              title={title}
              fields={fields}
              handleChange={handleChange}
            />
            <DeletePurposeOfRegistration
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
