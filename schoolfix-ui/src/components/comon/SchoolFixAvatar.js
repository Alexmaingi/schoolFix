import React from 'react'
import PropTypes from 'prop-types'


const SchoolFixAvatar = ({ avatarStyle, imgSrc, avatarVisible }) => {
  return (
    <div>
       { 
        avatarVisible &&  <div className={`${avatarStyle ? avatarStyle : ''}`}>
        <img className=' rounded-full' alt="SchoolFix" src={imgSrc}/>
        </div>
       }
    </div>
  )
}

SchoolFixAvatar.propTypes = {
    logoStyle: PropTypes.string,
    imgSrc: PropTypes.string,
    avatarVisible: PropTypes.bool,
    avatarStyle: PropTypes.string
}


export default SchoolFixAvatar
