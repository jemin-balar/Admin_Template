import React from "react";
import AppBar from "./AppBar/AppBar";
import Sidebar from "./SideBar/SideBar";
import { styled } from "@mui/material";

const Section = styled("div")(({ theme }) => ({
  backgroundColor: "#f9f9f9",
  padding: theme.spacing(3),
  width: "100%",
}));

const Content = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function Layout({ children }) {
  return (
    <>
      <div className="d-flex">
        {/* appbar */}
        <AppBar />
        {/* appbar */}
        {/* sidebar */}
        <Sidebar />
        {/* sidebar */}
        {/* page-content */}
        <Section className="">
          <Content className="mt-4"></Content>
          {children}
        </Section>
        {/* page-content */}
      </div>
    </>
  );
}
