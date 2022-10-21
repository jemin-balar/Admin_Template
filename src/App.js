import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Authentication/Login";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Dashboard />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
