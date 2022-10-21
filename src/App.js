import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";

function App() {
  return (
    <>
      <Layout>    
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
