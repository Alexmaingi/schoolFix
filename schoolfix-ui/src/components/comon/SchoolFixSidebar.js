import React from 'react'
import { FaAd, FaBookOpen, FaPhoneSquare, FaSchool } from 'react-icons/fa'
import SchoolFixAvatar from './SchoolFixAvatar'
import SchoolFixButton from './SchoolFixButton'

const SchoolFixSidebar = () => {
  return (
    <div className='bg-[#ffffff] container w-[90%] mx-auto h-[1248px]'>
        <div className='bg-[#D4D4D4] border-2 border-[#00000] rounded-[45px] w-[307px] h-[1235px]'>
            <div className='flex justify-self-end'>
                <SchoolFixAvatar
                    imgSrc={'/download.png'}
                    avatarVisible={true}
                    avatarStyle='h-[96px] w-[94px] ml-[20px] mt-[20px] rounded-full'
                />
                    <h2 className='text-base font-normal ml-[25px] mt-[40px]'>Lorem Ipsum</h2>
            </div>
                <div className='ml-[25px] mt-[78px]'>
                    <SchoolFixButton 
                        buttonIcon={<FaAd className='w-[30px] h-[30px]' />}
                        buttonStyle='border-0 bg-transparent'
                        buttonPresent={true}
                        buttonDescText='Description'
                        buttonDescPresent={true}
                    />  
                </div>
                <div className='ml-[25px] mt-[50px]'>    
                    <SchoolFixButton 
                        buttonIcon={<FaSchool className='w-[30px] h-[30px]' />}
                        buttonStyle='border-0 bg-transparent'
                        buttonPresent={true}
                        buttonDescText='School Fees'
                        buttonDescPresent={true}
                    /> 
                </div>
                <div className='ml-[25px] mt-[50px]'>     
                    <SchoolFixButton 
                        buttonIcon={<FaBookOpen className='w-[30px] h-[30px]' />}
                        buttonStyle='border-0 bg-transparent'
                        buttonPresent={true}
                        buttonDescText='Perfomance'
                        buttonDescPresent={true}
                    /> 
                 </div>
            <div className='ml-[25px] mt-[50px]'>     
                <SchoolFixButton 
                    buttonIcon={<FaPhoneSquare className='w-[30px] h-[30px]' />}
                    buttonStyle='border-0 bg-transparent'
                    buttonPresent={true}
                    buttonDescText='Contact Us'
                    buttonDescPresent={true}
                />  
            </div>
        </div>
    </div>
  
  )
}

export default SchoolFixSidebar
