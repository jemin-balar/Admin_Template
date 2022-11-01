import React, { useState } from "react";
import Layout from "../../Component/Layout";
import { Box, Card, Tooltip, Button } from "@mui/material";
import DataTable from "../../Component/DataTable/DataTable";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIosTable from "../IAPTable/IosTable";
import DeleteIosTable from "../../Component/DeleteModal/DeleteModal";

export default function IosTableList() {
  const initialData = { 
    producttype:""   ,
    productname: "",
    productid: "",
    price: 0, 
    status:""
  };
  const [modalShow, setModalShow] = useState(false); 
  const [fields, setFields] = useState(initialData);
  const [confirmation, setConfirmation] = useState(false);
  const [title, setTitle] = useState("");

  const handleOpen = (editData = {}) => {
    console.log("23", editData);
    setModalShow(true);
    setFields(editData ? editData : fields);
    setTitle(editData?.productid ? "Edit Ios" : "Add Ios");
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });   
    console.log("field1", fields);
  };

  const confirmationModal = (deleteData = {}) => {
    setConfirmation(true);
  };

  const closeConfrimation = () => {
    setConfirmation(false);
  };

  const columns = [
    {
      name: "product_type",
      label: "Type",
    },
    {
      name: "product_name",
      label: "Product Name",
    },
    {
      name: "product_id",
      label: "Product ID",
    },
    {
      name: "price",
      label: "Price",
    },
    {
      name: "status",
      label: "Status",
    },
    {
      label: "Action",
      name: "action",
      options: {
        customBodyRender: (value, tableMeta) => (
          <div className="action">
            <Tooltip disableFocusListener title="Edit Ios">
              <Button
                sx={{ color: "#283593" }}
                onClick={() =>
                  handleOpen({
                    producttype: tableMeta.rowData[0],
                    productname: tableMeta.rowData[1],
                    productid: tableMeta.rowData[2],
                    price: tableMeta.rowData[3],
                    status: tableMeta.rowData[4],
                  })
                }
              >
                <EditIcon />
              </Button>
            </Tooltip>
            <Tooltip disableFocusListener title="Delete Ios">
              <Button
                sx={{ color: "#ff5252" }}
                onClick={() =>
                  confirmationModal({
                    producttype: tableMeta.rowData[0],
                    productname: tableMeta.rowData[1],
                    productid: tableMeta.rowData[2],
                    price: tableMeta.rowData[3],
                    status: tableMeta.rowData[4],
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
    {
      product_type: "Consumable",
      product_name: "computer",
      product_id: 1,
      price: 12,
      status: 'Active'
    },
    {
      product_type: "Non-consumable",
      product_name: "laptop",
      product_id: 2,
      price: 12,
      status: 'In-Active'
    },
    {
      product_type: "Auto-renewable-subscriptions",
      product_name: "key-board",
      product_id: 3,
      price: 12,
      status: 'Active'
    },
    {
      product_type: "Non-renewing-subscriptions",
      product_name: "mouse",
      product_id: 4,
      price: 12,
      status: 'Active'
    },
  ];

  const options = {
    // serverSide: true,
    selectableRows: "none",
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    customToolbar: () => (
      <Tooltip disableFocusListener title="Add Ios">
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
              title={"Ios"}
              data={data}
              columns={columns}
              options={options}
            />
            <AddIosTable
              openModal={modalShow}
              closeModal={handleClose}
              title={title}
              fields={fields}
              handleChange={handleChange}
            />
            <DeleteIosTable
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
