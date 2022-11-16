import React from 'react'
import SchoolFixAvatar from './SchoolFixAvatar'
import SchoolFixButton from './SchoolFixButton';
import { FaFacebookSquare, FaInstagramSquare, FaPen, FaTwitterSquare } from 'react-icons/fa'


const SchoolFixSchoolDash = () => {
  return (
    <div className='bg-[#D4D4D4] border-2 border-[#00000] rounded-t-[35px] w-[758px] h-[1235px]'>
        <div className='flex justify-self-end h-[230px]'>
            <SchoolFixAvatar 
                imgSrc={'/download.png'}
                avatarVisible={true}
                avatarStyle='h-[80px] w-[80px] ml-[20px] mt-[140px] rounded-full'
            /> 
            <div className='ml-[620px] mt-[20px]'> 
                <SchoolFixButton
                    buttonIcon={<FaPen className='w-[20px] h-[20px]' />}
                    buttonStyle='border-0 bg-transparent'
                    buttonPresent={true}
                />
            </div>
            <h2 className='text-base font-normal justify-evenly ml-[-680px] mt-[178px]'>
               <span className='ml-[-580px]'>Lorem Ipsum</span>  
                <div className='mt-[-20px] ml-[610px]'>
                    <SchoolFixButton
                        buttonIcon={<FaPen className='w-[20px] h-[20px]' />}
                        buttonStyle='border-0 bg-transparent'
                        buttonPresent={true}
                    />
                </div>
            </h2>
        </div>
        <div className='bg-[#ffffff] container border-2 border-[#000000] w-[754px] h-[166px] mt-[-60px]'>
            <h2 className='mt-[180px]'>  </h2>
        </div>
        <div className='bg-[#ffffff] container border-2 border-[#000000] w-[754px] h-[210px] mt-[0px]'>
            <h2 className='mt-[15px] ml-[30px] flex justify-self-start '> Description </h2>
        </div>
        <div className='bg-[#ffffff] container border-2 border-[#000000] w-[754px] h-[210px] mt-[0px]'> 
            <h2 className='mt-[15px] ml-[30px] flex justify-self-start'> School Fees</h2>
        </div>
        <div className='bg-[#ffffff] container border-2 border-[#000000] w-[754px] h-[210px] mt-[0px]'>
            <h2 className='mt-[15px] ml-[30px] flex justify-self-start'>Perfomance </h2>
        </div>   
        <div className='bg-[#ffffff] container border-2 border-[#000000] w-[754px] h-[210px] mt-[0px]'>
            <h2 className='mt-[15px] ml-[30px] flex justify-self-start'>Contact Us </h2>
         </div> 
        <div className='bg-[#ffffff] container border-2 border-[#000000] w-[754px] h-[58px] mt-[0px]'>
            <h2 className='mt-[5px] ml-[30px] flex '>            
                <div className='flex justify-self-start text-sm mt-[15px]'>
                    <h2>Lorem Ipsum is simply dummy text of the </h2>
                </div>
             </h2>
                <div className='flex justify-end ml-[60px] mt-[-26px]'>
                    <SchoolFixButton
                    buttonIcon={<FaFacebookSquare className='w-[30px] h-[30px]' />}
                    buttonStyle='border-0 bg-transparent'
                    buttonPresent={true}
                    />
                   <SchoolFixButton
                    buttonIcon={<FaInstagramSquare className='w-[30px] h-[30px]' />}
                    buttonStyle='border-0 bg-transparent'
                    buttonPresent={true}
                    />
                   <SchoolFixButton
                    buttonIcon={<FaTwitterSquare className='w-[30px] h-[30px]' />}
                    buttonStyle='border-0 bg-transparent'
                    buttonPresent={true}
                    />
                </div>
            </div>
               
        
    </div>
  )
}

export default SchoolFixSchoolDash
