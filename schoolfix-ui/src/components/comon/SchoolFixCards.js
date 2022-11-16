import React from 'react'
import SchoolFixButton from './SchoolFixButton'
import PropTypes from 'prop-types'


const SchoolFixCards = ({ cardStyle, buttonCardStyle, imgSrc, nameStyle, schoolType, schoolName, imageStyle }) => {
  return (
    <div className={` container block bg-[#D9D9D9]  w-[545px] h-[693px] border-2 border-[#D9D9D9] rounded-[30px] ${ cardStyle ? cardStyle : '' } `}>
       <div>
         <img className={`h-[563px] w-[538px] ml-[2px] mt-[2px] rounded-[30px] ${ imageStyle ? imageStyle : '' }`} alt="SchoolFix" src={imgSrc}/>
       </div>
       <div className={`block text-base flex justify-start px-5 mt-[540px] text-start font-normal text-[#000000] ${ nameStyle ? nameStyle : '' }`}>
        {schoolType}<br/>
        {schoolName}
        </div>

        <div className={`ml-[450px] mt-[-24px] ${ buttonCardStyle ? buttonCardStyle : '' }`}> 
            <SchoolFixButton 
                buttonStyle={'h-[27px] w-[75px] border-2 border-[#000000]  bg-[#ffffff]'}
                buttonText='See More'
                buttonPresent={true}
            />
        </div>    
    </div>
  )
}

SchoolFixCards.propTypes = {
    buttonCardStyle: PropTypes.string,
    cardStyle: PropTypes.string,
    nameStyle: PropTypes.string,
    imgSrc: PropTypes.string,
    schoolType: PropTypes.string,
    SchoolName: PropTypes.string,
    imageStyle: PropTypes.string
}

export default SchoolFixCards
