import React from "react";
import SchoolFixButton from "../comon/SchoolFixButton";
import SchoolFixCards from "../comon/SchoolFixCards";
import SchoolFixNavbar from "../comon/SchoolFixNavbar";
import { Link } from "react-router-dom";

const SchoolFixHome = () => {
  return (
    <div className="w-100%">
      <SchoolFixNavbar avatarNavPresent={true} />
      <div>
        <div className="h-[94px] w-[450px] text-base ml-[120px] mt-[80px] text-start">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
        <Link to="/schoolList">
          <SchoolFixButton
            buttonStyle="border-2 bg-[#000000] text-[#ffffff] h-7 w-20 ml-[460px] hover:text-[#000000] hover:bg-[#ffffff]"
            buttonText={"View More"}
            buttonPresent={true}
          />
        </Link>
      </div>
      <div className="mt-[20px] ml-[114px]">
        <SchoolFixCards
          imgSrc={"/schoollist2.jpg"}
          schoolType={"Secondary School"}
          schoolName={"Mang'u High School"}
          imageStyle={"h-[550px] w-[600px]"}
          cardStyle={"h-[690px] w-[608px]"}
          nameStyle={"mt-[40px]"}
          buttonCardStyle={
            "mt-[30px] ml-[490px] hover:text-[#ffffff] hover:bg-[#000000]"
          }
        />
      </div>

      <div className="mt-[-840px] ml-[730px]">
        <SchoolFixCards
          imgSrc={"/schoollist13.jpg"}
          schoolType={"Secondary School"}
          schoolName={"Juja High School"}
          imageStyle={"h-[350px] w-[400px]"}
          cardStyle={"h-[490px] w-[408px]"}
          nameStyle={"mt-[40px]"}
          buttonCardStyle={
            "mt-[0px] ml-[290px] hover:text-[#ffffff] hover:bg-[#000000]"
          }
        />
      </div>
      <div className="mt-[10px] ml-[730px]">
        <SchoolFixCards
          imgSrc={"/schoollist3.jpg"}
          schoolType={"Primary School"}
          schoolName={"Thika Primary School"}
          imageStyle={"h-[250px] w-[400px]"}
          cardStyle={"h-[390px] w-[408px]"}
          nameStyle={"mt-[40px]"}
          buttonCardStyle={
            "mt-[0px] ml-[290px] hover:text-[#ffffff] hover:bg-[#000000]"
          }
        />
      </div>
    </div>
  );
};

export default SchoolFixHome;
