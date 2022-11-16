import React from 'react'
import { PropTypes } from "prop-types";


const SchoolFixCheckbox = ({ index, onChange, label }) => {
  return (
    <label  className='flex'>
      <input 
        type='checkbox'
        key={index}
        id={label}
        onChange={onChange}
        className=' bg-[#D9D9D9] '
        />
        <span className=' ml-2 text-base'>{ label }</span>
    </label>
  )
}

SchoolFixCheckbox.propTypes={
    label: PropTypes.string,
    index: PropTypes.number,
    onChange: PropTypes.func
}

export default SchoolFixCheckbox
