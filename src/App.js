import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Authentication/Login";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";
import Account from "./Pages/Account/AccountList";
import Religion from "./Pages/Religion/ReligionList";
import Community from "./Pages/Community/CommunityList";
import Education from "./Pages/Education/EducationList";
import WorkExperience from "./Pages/WorkExperience/WorkExperienceList";
import Occupation from "./Pages/Occupation/OccupationList";
import MotherTongue from "./Pages/MotherTongue/MotherTongueList";
import PurposeOfRegistration from "./Pages/PurposeOfRegistration/PurposeOfRegistrationList";
import PassionsOrHobbies from "./Pages/PassionsOrHobbies/PassionsOrHobbiesList";
import AndroidTable from "./Pages/IAPTable/AndroidTableList";
import IOSTable from "./Pages/IAPTable/IosTableList";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Dashboard />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/religion" element={<Religion />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/workexperience" element={<WorkExperience />} />
        <Route exact path="/occupation" element={<Occupation />} />
        <Route exact path="/mothertongue" element={<MotherTongue />} />
        <Route exact path="/purposeofregistration" element={<PurposeOfRegistration />} />
        <Route exact path="/passionsorhobbies" element={<PassionsOrHobbies />} />
        <Route exact path="/android" element={<AndroidTable />} />
        <Route exact path="/ios" element={<IOSTable />} />
      </Routes>
    </>
  );
}

export default App;
