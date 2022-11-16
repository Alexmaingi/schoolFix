import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import SchoolFixLandingPage from "./components/pages/SchoolFixLandingPage";
import SchoolFixSignUp from "./components/pages/SchoolFixSignUp";
import SchoolFixFormLogIn from "./components/pages/SchoolFixFormLogIn";
import SchoolFixParentForm from "./components/pages/SchoolFixParentForm";
import SchoolFixSchoolForm from "./components/pages/SchoolFixSchoolForm";
import SchoolFixHome from "./components/pages/SchoolFixHome";
import SchoolFixSchoolList from "./components/pages/SchoolFixSchoolList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<SchoolFixLandingPage />} />
  //     <Route path="/logIn" element={<SchoolFixFormLogIn />} />
  //     <Route path="/signUp" element={<SchoolFixSignUp />} />
  //     <Route path="/parentSignUp" element={<SchoolFixParentForm />} />
  //     <Route path="/schoolSignUp" element={<SchoolFixSchoolForm />} />
  //     {/* <Route path="/homePage" element={<SchoolFixHome />} />
  //     <Route path="/schoolList" element={<SchoolFixSchoolList />} /> */}

  //   </Routes>
  // </BrowserRouter>
);
