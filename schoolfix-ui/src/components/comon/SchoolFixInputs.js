import React from 'react'
import { PropTypes } from "prop-types";

const SchoolFixInputs = ({

  value,
  onChange,
  label,
  type,
  placeholder,
  labelStyle,
  inputStyle,
 
}) => {

  return (

    <div>
      <label
        className={`block text-base flex justify-start px-5 pb-1 font-normal text-[#000000]  ${
          labelStyle ? labelStyle : ""
        }`}
      >
        {label}
      </label>
        <input
          type={type}
          value={value}
          className={`text-md block px-[20px] ml-4 h-[40px] rounded-lg w-[420px] h-[45px]  
          bg-[#D9D9D9]  border-[#D9D9D9]  shadow-md cursor-text hover:bg-white focus:border-gray-600 focus:outline-none checkedPresent && ${
            inputStyle ? inputStyle : ""
          }`}
          id={label}
          name={label}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
    </div>
  
  )}

  SchoolFixInputs.propTypes = {
    label: PropTypes.string,
    value:PropTypes.func,
    onChange: PropTypes.func,
    inputStyle: PropTypes.string,
    labelStyle: PropTypes.string,
    placeholder: PropTypes.string,
    inputType: PropTypes.string

  };
  export default SchoolFixInputs;