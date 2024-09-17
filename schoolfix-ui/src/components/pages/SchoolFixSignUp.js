import React from "react";
import useForm from "../validation/useForm";
import SchoolFixLogo from "../comon/SchoolFixLogo";
import validate from '../validation/validateInfo'
import { Link } from "react-router-dom";

const SchoolFixSignUp = ({ submitForm }) => {
  const buttonStyle = 'text-[#000000]  bg-[#FFFFFF] border-2 ml-4 hover:text-[#ffffff] hover:bg-[#000000] w-36 h-10 border-[#000000] rounded-lg bg-transparent font-medium text-[10px] font-style: Hina Mincho'
  const { handleSubmit } = useForm(
    submitForm,
    validate
  );
  return (
    <form  onSubmit={handleSubmit}>

    <div className=" flex justify-unevenly mt-[9%] w-full h-[600px]">
      <div>
        <img
          src="/login.jpg"
          alt="SschoolFix"
          className="w-[60%] ml-[49%] drop-shadow-2xl  rounded-l-lg h-[65%] mt-[0%]"
        />
      </div>
      <div className="w-[30%] h-[65%] ml-[4.25%] mt-[0] bg-[#989898] drop-shadow-2xl rounded-r-lg border-[#989898]" >
        <div className="mt-[125px] mb-[10px] ml-[100px]">
          <Link to='/parentSignUp'>
            <button className={buttonStyle}>
            Parent Sign Up 
            </button>
          </Link>
        </div>
        <span className="pt-10 text-[15px] ml-[170px] font-bold">OR</span>
        <div className="ml-[100px] mt-[10px]">
          <Link to='/schoolSignUp'>
            <button className={buttonStyle}>
            SchooL Sign Up
            </button>
          </Link>  
        </div>
      </div>
    </div>
    </form>
  );
};

export default SchoolFixSignUp;

