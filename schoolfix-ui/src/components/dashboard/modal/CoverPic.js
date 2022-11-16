import React from "react";
import useForm from "../../validation/useForm";
import validate from "../../validation/validateInfo";


const CoverPic = ({ submitForm, open, onClose }) => {
  const labelStyle =
    "justify-content-start block text-base text-[10px] flex justify-start px-[-10px] pb-0 font-normal text-[#000000]";
  const buttonStyle =
    "text-[#000000]  bg-[#FFFFFF] border-2 ml-4 hover:text-[#ffffff] hover:bg-[#000000] w-16 h-6 border-[#000000] rounded-lg bg-transparent font-normal text-[10px] font-style: Hina Mincho";
  const inputStyle =
    "bg-gray-300 text-[10px] text-[#000000] block px-[8px] ml-0 h-[20px] rounded-md w-[80%] h-[35px] bg-[#D9D9D9]  border-[#D9D9D9]  shadow-md cursor-text hover:bg-white focus:border-gray-600 focus:outline-none checkedPresent";
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  if(!open) return null
  return (
    <div className="bg-opacity-75 backdrop-blur-sm fixed inset-0 z-40 bg-[#000000] t-0 l-0 r-0 b-0 w-[100vw] h-[100vh]" onClick={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-unevenly ">
          <div>
            <img
              src="/modal.jpg"
              alt="SschoolFix"
              className="w-[50%] ml-[39%] drop-shadow-2xl rounded-l-lg h-[450px] mt-[13%]"
            />
          </div>
          <div className="w-[28%] h-[450px] ml-[-6.0%] mt-[7.1%] bg-[#989898] drop-shadow-2xl rounded-r-lg border-[#989898]" onClick={(e)=> {e.stopPropagation()}}>
            <p className="mt-[0px] font-bold cursor-pointer ml-[330px]" onClick={onClose}>X</p>

            {/* <div className="mt-[90px] ml-[60px]">
              <label className={labelStyle}>Username/Email</label>
              <input
                className={inputStyle}
                type="text"
                name="username"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}
              />
              <span className="flex ml-[16px] mb-[2px] text-[8px] text-[#FF0000]">
                {errors.username && <p>{errors.username}</p>}
              </span>
            </div> */}
            <div className="ml-[60px] mt-[8px]">
              <label className={labelStyle}>Password</label>
              <input
                className={inputStyle}
                type="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
              />
              <span className="flex ml-[16px] text-[8px] text-[#FF0000]">
                {errors.password && <p>{errors.password}</p>}
              </span>
            </div>
            <div className="ml-[230px] mt-[10px]">
              <button className={buttonStyle} type="submit">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CoverPic;
