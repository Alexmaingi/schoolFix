import React from 'react'
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";


const SchoolFixButton = ({ onClick, buttonPresent, buttonDescPresent, buttonDescText, buttonIcon, buttonText, buttonStyle, to }) => {
  if(to) {
    return (
      <Link to={to} className={`w-16 h-6 border-[#000000] rounded-lg bg-transparent font-normal text-xs font-style: Hina Mincho  ${ buttonStyle ? buttonStyle : "" }`} >
        {buttonIcon}
       {buttonText}
       {buttonDescText}
     </Link>
    )
  }
  return (
    <div className='flex'>
     { 
        buttonPresent &&  <button className={`w-16 h-6  border-[#000000] rounded-lg bg-transparent font-normal text-xs font-style: Hina Mincho  ${ buttonStyle ? buttonStyle : ""}`} onClick={onClick} >
          {buttonText}
          {buttonIcon}
        </button>
      }
      {
        buttonDescPresent &&  <div className='text-base font-normal'>{buttonDescText}</div>
      }
    </div>
  )
}

SchoolFixButton.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
  buttonDescText: PropTypes.string,
  buttonPresent: PropTypes.bool,
  buttonDescPresent: PropTypes.bool,
  to: PropTypes.string,
  buttonIcon: PropTypes.element,
  type: PropTypes.string
}


export default SchoolFixButton
