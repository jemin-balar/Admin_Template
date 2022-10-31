import React, { useState } from "react";
import Layout from "../../Component/Layout";
import { Box, Card, Tooltip, Button } from "@mui/material";
import DataTable from "../../Component/DataTable/DataTable";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPassionsOrHobbies from "./PassionsOrHobbies";

export default function CommunityList() {
  const [modalShow, setModalShow] = useState(false);
  const [fields, setFields] = useState({   
    passionsorhobbiesid: "",
    passionsorhobbies: "",
  });
  const [title, setTitle] = useState("");

  const handleOpen = (editData = {}) => {
    setModalShow(true);
    setTitle(editData?._id ? "Edit Passions Or Hobbies" : "Add Passions Or Hobbies");
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
      name: "passionsorhobbies_id",
      label: "Passions Or Hobbies ID",
    },
    {
      name: "passionsorhobbies",
      label: "Passions Or Hobbies",
    },
    {
      label: "Action",
      name: "action",
      options: {
        customBodyRender: (value, tableMeta) => (
          <div className="action">
            <Tooltip disableFocusListener title="Edit Passions Or Hobbies">
              <Button sx={{ color: "#283593" }}>
                <EditIcon />
              </Button>
            </Tooltip>
            <Tooltip disableFocusListener title="Delete Passions Or Hobbies">
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
    [1, "Test Corp"],
    [2, "Test Corp"],
    [3, "Test Corp"],
    [4, "Test Corp"],
  ];


  const options = {
    // serverSide: true,
    selectableRows: false,
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    customToolbar: () => (
      <Tooltip disableFocusListener title="Add Passions Or Hobbies">
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
              title={"Passions Or Hobbies"}
              data={data}
              columns={columns}
              options={options}
            />
            <AddPassionsOrHobbies
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
