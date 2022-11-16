import React from 'react'
import PropTypes from 'prop-types'


const SchoolFixLogo = ({ logoStyle }) => {
  return (
    <div className={`h-[39px] w-[129px] ${logoStyle ? logoStyle : ''}`}>
      <img className='h-[100%] max-w-[100%]' alt="SchoolFix" src='/schoolfixlogo.png'/>
    </div>

  )
}

SchoolFixLogo.propTypes = {
    logoStyle: PropTypes.string
}

export default SchoolFixLogo
