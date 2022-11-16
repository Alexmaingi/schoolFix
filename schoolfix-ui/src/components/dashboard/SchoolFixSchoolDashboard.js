import React from "react";
import SchoolFixNavbar from "../comon/SchoolFixNavbar";
import SchoolFixSidebar from "../comon/SchoolFixSidebar";
import SchoolFixSchoolDash from "../comon/SchoolFixSchoolDash";

const SchoolFixSchoolDashboard = () => {
  return (
    <div>
      <div>
        <SchoolFixNavbar avatarNavPresent={true} />
      </div>
      <div className="flex justify-evenly">
        <span className="ml-[10px] mt-[10px]">
          {" "}
          <SchoolFixSidebar />
        </span>
        <span className="ml-[-40px] mt-[10px]">
          <SchoolFixSchoolDash />
        </span>
      </div>
    </div>
  );
};

export default SchoolFixSchoolDashboard;
