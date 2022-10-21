import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  Avatar,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import DataTable from "../Component/DataTable/DataTable";
import { styled } from "@mui/material";
import Layout from "../Component/Layout";

export default function User() {  

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
     ["Joe James", "Test Corp", "Yonkers", "NY"],
     ["John Walsh", "Test Corp", "Hartford", "CT"],
     ["Bob Herm", "Test Corp", "Tampa", "FL"],
     ["James Houston", "Test Corp", "Dallas", "TX"]
  ];

  const options = {
    // serverSide: true,
    selectableRows: false,
    download: false,
    print: false,
    viewColumns: false,
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
  }));

  return (
    <>
      <Layout>
        <Box className="mx-5">
          <Grid container spacing={4}>
            <Grid item xl={5} lg={5} md={12}>
              <Card
                className="p-4"
                sx={{ boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)" }}
              >
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <Avatar
                    alt="User-Profile"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 110, height: 110, borderRadius: "0.357rem" }}
                    variant="square"
                    className="mt-5"
                  />
                  <Typography
                    variant="h3"
                    className="mt-3 text-darkgrey fw-semibold"
                    sx={{ fontSize: 16 }}
                  >
                    Beverlie Krabbe
                  </Typography>
                </div>
                <div className="d-flex mt-3 border-bottom">
                  <Typography
                    variant="h3"
                    className="mt-3 mb-3 text-darkgrey fw-semibold"
                    sx={{ fontSize: 16 }}
                  >
                    Details
                  </Typography>
                </div>
                <Grid container spacing={1}>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">
                        Date of Joined:
                      </Typography>
                      <Typography className="ms-2 d-flex flex-column">
                        01/01/2022
                      </Typography>
                    </div>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">Email Id:</Typography>
                      <Typography className="ms-2">
                        bkrabbe1d@home.pl
                      </Typography>
                    </div>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">Mobile:</Typography>
                      <Typography className="ms-2">(+91) 1234567890</Typography>
                    </div>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">Name:</Typography>
                      <Typography className="ms-2 d-flex flex-column">
                        Johndoe
                      </Typography>
                    </div>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">Gender:</Typography>
                      <Typography className="ms-2">Male</Typography>
                    </div>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">Location:</Typography>
                      <Typography className="ms-2">India</Typography>
                    </div>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">
                        Marital status:
                      </Typography>
                      <Typography className="ms-2">Married</Typography>
                    </div>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">
                        Purpose of registration :
                      </Typography>
                      <Typography className="ms-2">bkrabbe1d</Typography>
                    </div>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">Religion:</Typography>
                      <Typography className="ms-2">bkrabbe1d</Typography>
                    </div>
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">
                        Horoscope:
                      </Typography>
                      <Typography className="ms-2">bkrabbe1d</Typography>
                    </div>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">
                        Occupation:
                      </Typography>
                      <Typography className="ms-2">bkrabbe1d</Typography>
                    </div>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">Income:</Typography>
                      <Typography className="ms-2">bkrabbe1d</Typography>
                    </div>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">Status:</Typography>
                      <Typography className="ms-2">bkrabbe1d</Typography>
                    </div>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">
                        Profile Visibility:
                      </Typography>
                      <Typography className="ms-2">bkrabbe1d</Typography>
                    </div>
                    <div className="d-flex mt-3">
                      <Typography className="fw-semibold">
                        Profile View count:
                      </Typography>
                      <Typography className="ms-2">bkrabbe1d</Typography>
                    </div>
                  </Grid>
                </Grid>
                <div className="d-flex justify-content-center align-items-center mt-5">
                  <Button variant="contained">Block</Button>
                  {/* <Button variant="contained" className="ms-4">
                  Cancel
                </Button> */}
                </div>
              </Card>
              <Card
                className="p-4 mt-4"
                variant="outlined"
                sx={{
                  boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)",
                  border: "1px solid #3F51B5",
                }}
              >
                <div>
                  <div className="d-flex justify-content-end align-items-end">
                    <Typography
                      className="h5 fw-semibold mb-4 ms-1"
                      sx={{ color: "#3F51B5" }}
                    >
                      $
                    </Typography>
                    <Typography
                      className="fw-bold"
                      variant="h1"
                      sx={{ color: "#3F51B5" }}
                    >
                      99
                    </Typography>
                    <Typography className="mb-2 ms-1">/month</Typography>
                  </div>
                  <div className="d-flex">
                    <ul>
                      <li className="mt-2">10 Users</li>
                      <li className="mt-2">Up to 10 GB storage</li>
                      <li className="mt-2">Basic Support</li>
                    </ul>
                  </div>
                  <div className="d-flex justify-content-between">
                    <Typography className="fw-semibold ms-3">Days</Typography>
                    <Typography className="fw-semibold ms-3">
                      4 of 30 Days
                    </Typography>
                  </div>
                  <div>
                    <BorderLinearProgress
                      variant="determinate"
                      value={80}
                      className="my-3 ms-3"
                    />
                    <Typography className="ms-3">4 days remaining</Typography>
                  </div>
                  <div className="mt-4 ms-3">
                    <Button
                      variant="contained"
                      className="p-3"
                      sx={{ width: "100%" }}
                    >
                      Upgrade Plan
                    </Button>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xl={7} lg={7} md={12}>
              <Card sx={{ boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)" }}>
                <DataTable
                  title="Purchased Details"
                  data={data}
                  columns={columns}
                  options={options}
                />
              </Card>
              <Card
                sx={{ boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)" }}
                className="mt-4"
              >
                <DataTable
                  title="Users request list"
                  data={data}
                  columns={columns}
                  options={options}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  );
}
