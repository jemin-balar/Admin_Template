import React, { useState } from "react";
import Layout from "../../Component/Layout";
import { Box, Card, Tooltip, Button } from "@mui/material";
import DataTable from "../../Component/DataTable/DataTable";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddAccount from "../Account/Account";
import DeleteAccount from "../../Component/DeleteModal/DeleteModal";

export default function AccountList() {
  const initialData = {
    accountid: "",
    account: "",
  };
  const [modalShow, setModalShow] = useState(false);
  const [fields, setFields] = useState(initialData);
  const [image, setImage] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [title, setTitle] = useState("");

  const handleOpen = (editData = {}) => {
    setModalShow(true);
    setFields(editData ? editData : fields);
    setTitle(editData?.accountid ? "Edit Account" : "Add Account");
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const handleFileUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
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
      name: "account_id",
      label: "Account ID",
    },
    {
      name: "account",
      label: "Account",
    },
    // {
    //   name: "image",
    //   label: "Iamge",
    // },
    {
      label: "Action",
      name: "action",
      options: {
        customBodyRender: (value, tableMeta) => (
          <div className="action">
            <Tooltip disableFocusListener title="Edit Account">
              <Button
                sx={{ color: "#283593" }}
                onClick={() =>
                  handleOpen({
                    accountid: tableMeta.rowData[0],
                    account: tableMeta.rowData[1],
                    image: tableMeta.rowData[2],
                  })
                }
              >
                <EditIcon />
              </Button>
            </Tooltip>
            <Tooltip disableFocusListener title="Delete Account">
              <Button
                sx={{ color: "#ff5252" }}
                onClick={() =>
                  confirmationModal({
                    accountid: tableMeta.rowData[0],
                    account: tableMeta.rowData[1],
                    image: tableMeta.rowData[2],
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
    { account_id: 1, account: "Test Corp" },
    { account_id: 2, account: "Test Corp" },
    { account_id: 3, account: "Test Corp" },
    { account_id: 4, account: "Test Corp" },
  ];

  const options = {
    // serverSide: true,
    selectableRows: "none",
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    customToolbar: () => (
      <Tooltip disableFocusListener title="Add Account">
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
              title={"Account"}
              data={data}
              columns={columns}
              options={options}
            />
            <AddAccount
              openModal={modalShow}
              closeModal={handleClose}
              title={title}
              fields={fields}
              image={image}
              handleChange={handleChange}
              handleFileUpload={handleFileUpload}
            />
            <DeleteAccount
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
