import React, { useState } from "react";
import Layout from "../../Component/Layout";
import { Box, Card, Tooltip, Button } from "@mui/material";
import DataTable from "../../Component/DataTable/DataTable";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCommunity from "./Community";
import DeleteCommunity from "../../Component/DeleteModal/DeleteModal";

export default function CommunityList() {
  const initialData = {
    communityid: "",
    community: "",
  };
  const [modalShow, setModalShow] = useState(false);
  const [fields, setFields] = useState(initialData);
  const [confirmation, setConfirmation] = useState(false);
  const [title, setTitle] = useState("");

  const handleOpen = (editData = {}) => {
    setModalShow(true);
    setFields(editData ? editData : fields);
    setTitle(editData?.communityid ? "Edit Community" : "Add Community");
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
      name: "community_id",
      label: "Community ID",
    },
    {
      name: "community",
      label: "Community",
    },
    {
      label: "Action",
      name: "action",
      options: {
        customBodyRender: (value, tableMeta) => (
          <div className="action">
            <Tooltip disableFocusListener title="Edit Community">
              <Button
                sx={{ color: "#283593" }}
                onClick={() =>
                  handleOpen({
                    communityid: tableMeta.rowData[0],
                    community: tableMeta.rowData[1],
                  })
                }
              >
                <EditIcon />
              </Button>
            </Tooltip>
            <Tooltip disableFocusListener title="Delete Community">
              <Button
                sx={{ color: "#ff5252" }}
                onClick={() =>
                  confirmationModal({
                    communityid: tableMeta.rowData[0],
                    community: tableMeta.rowData[1],
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
    { community_id: 1, community: "Test Corp" },
    { community_id: 2, community: "Test Corp" },
    { community_id: 3, community: "Test Corp" },
    { community_id: 4, community: "Test Corp" },
  ];

  const options = {
    // serverSide: true,
    selectableRows: "none",
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    customToolbar: () => (
      <Tooltip disableFocusListener title="Add Community">
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
              title={"Community"}
              data={data}
              columns={columns}
              options={options}
            />
            <AddCommunity
              openModal={modalShow}
              closeModal={handleClose}
              title={title}
              fields={fields}
              handleChange={handleChange}
            />
             <DeleteCommunity
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
