import React from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DataTable from "../Component/DataTable/DataTable";
import Layout from "../Component/Layout";

export default function Dashboard() {
  const [newUser, setNewUSer] = React.useState("");

  const handleChange = (e) => {
    setNewUSer(e.target.value);
  };

  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "company",
      label: "Company",
    },
    {
      name: "city",
      label: "City",
    },
    {
      name: "state",
      label: "State",
    },
  ];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    serverSide: true,
    selectableRows: false,
    download: false,
    print: false,
    viewColumns: false,
  };

  return (
    <>
      <Layout>
        <Box className="mx-5">
          <Grid container spacing={4}>
            <Grid item xl={3} lg={3} md={4}>
              <Card
                className="p-4 d-flex justify-content-between"
                sx={{ boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)" }}
              >
                <div className="d-flex flex-column">
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 21 }}
                    className="fw-bold mb-3 text-darkgrey me-5"
                  >
                    21459
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>Total Users</Typography>
                </div>
                <Avatar className="mt-2">
                  <PersonOutlineOutlinedIcon
                    sx={
                      {
                        // color: "#7367f0!important",
                        // backgroundColor: "#7367f01F",
                      }
                    }
                  />
                </Avatar>
              </Card>
            </Grid>
            <Grid item xl={3} lg={3} md={4}>
              <Card
                className="p-4 d-flex justify-content-between"
                sx={{ boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)" }}
              >
                <div className="d-flex flex-column">
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 21 }}
                    className="fw-bold mb-3 text-darkgrey"
                  >
                    21459
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>New User</Typography>
                </div>
                <Avatar className="mt-2">
                  <PersonOutlineOutlinedIcon
                    sx={
                      {
                        // color: "#7367f0!important",
                        // backgroundColor: "#7367f01F",
                      }
                    }
                  />
                </Avatar>
              </Card>
            </Grid>
            <Grid item xl={3} lg={3} md={4}>
              <Card
                className="p-4 d-flex justify-content-between"
                sx={{ boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)" }}
              >
                <div className="d-flex flex-column">
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 21 }}
                    className="fw-bold mb-3 text-darkgrey"
                  >
                    21459
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>Total Earning</Typography>
                </div>
                <Avatar className="mt-2">
                  <PersonOutlineOutlinedIcon
                    sx={
                      {
                        // color: "#7367f0!important",
                        // backgroundColor: "#7367f01F",
                      }
                    }
                  />
                </Avatar>
              </Card>
            </Grid>
            <Grid item xl={3} lg={3} md={4}>
              <Card
                className="p-4 d-flex justify-content-between"
                sx={{ boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)" }}
              >
                <div className="d-flex flex-column">
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 21 }}
                    className="fw-bold mb-3 text-darkgrey"
                  >
                    21459
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    Subscription Users
                  </Typography>
                </div>
                <Avatar className="mt-2">
                  <PersonOutlineOutlinedIcon
                    sx={
                      {
                        // color: "#7367f0!important",
                        // backgroundColor: "#7367f01F",
                      }
                    }
                  />
                </Avatar>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box className="mt-4 mx-5">
          <Card
            className="p-4 d-flex flex-column"
            sx={{ boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)" }}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: 21 }}
              className="fw-bold mb-3 text-darkgrey"
            >
              Filters
            </Typography>
            <Grid container spacing={4}>
              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <FormControl fullWidth>
                  <InputLabel>New User</InputLabel>
                  <Select
                    value={newUser}
                    label="New User"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Daily"}>Daily</MenuItem>
                    <MenuItem value={"Weekly"}>Weekly</MenuItem>
                    <MenuItem value={"Monthly"}>Monthly</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <FormControl fullWidth>
                  <InputLabel>New User</InputLabel>
                  <Select
                    value={newUser}
                    label="New User"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Daily"}>Daily</MenuItem>
                    <MenuItem value={"Weekly"}>Weekly</MenuItem>
                    <MenuItem value={"Monthly"}>Monthly</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <FormControl fullWidth>
                  <InputLabel>New User</InputLabel>
                  <Select
                    value={newUser}
                    label="New User"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Daily"}>Daily</MenuItem>
                    <MenuItem value={"Weekly"}>Weekly</MenuItem>
                    <MenuItem value={"Monthly"}>Monthly</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Card>
        </Box>
        <Box className="mt-4 mx-5">
          <Card sx={{ boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)" }}>
            <DataTable data={data} columns={columns} options={options} />
          </Card>
        </Box>
      </Layout>
    </>
  );
}
