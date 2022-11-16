import React from 'react'
import { Link } from 'react-router-dom';
import SchoolFixButton from './SchoolFixButton';
import SchoolFixLogo from './SchoolFixLogo';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaPhoneSquare } from 'react-icons/fa'



const SchoolFixFooter = () => {
  return (
    <div className='bg-[#404040] border-2 border-[#404040] w-full h-[383px]'>
        <div className='container w-[90%] ml-[90px]'>
            <div className='flex justify-between'>
                <div className="block justify-self-start mt-[34px]">
                    <div><SchoolFixLogo /></div>
                <div className='flex justify-items-start mt-[10px] text-start content-center text-sm  w-[480px] h-[181px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  Lorem Ipsum is the simply dummy text of the printing and typesetting industry printing and typesetting industr.
                </div>
                </div>
                <div  className="flex justify-end text-start mt-[34px]">
                    <div className='block justify-self-end'> 
                        <h2 className='text-base font-normal mb-[14px]'>All</h2>
                        <Link to='/' className='text-sm font-normal'>Home</Link><br />
                        <Link to='/' className='text-sm font-normal'>About Us</Link><br />
                        <Link to='/'className='text-sm font-normal'>Schools</Link><br />
                        <Link to='/'className='text-sm font-normal'>Contact Us</Link>
                    </div>
                    <div className='block justify-self-end ml-4'> 
                        <h2 className='text-base font-normal mb-[14px] '>Parent/Gurdian</h2>
                        <Link to='/' className='text-sm font-normal '>Home</Link><br />
                        <Link to='/' className='text-sm font-normal '>Schools</Link><br />
                        <Link to='/'className='text-sm font-normal '>Dashboard</Link>
                    </div>
                    <div className='block justify-self-end ml-4'> 
                        <h2 className='text-base font-normal mb-[14px] '>School</h2>
                        <Link to='/' className='text-sm font-normal '>Home</Link><br />
                        <Link to='/' className='text-sm font-normal '>Dashboard</Link>
                    </div>
            </div>

            </div>
            <hr />
            <div>
                <div className='flex justify-self-start text-sm mt-[50px]'>
                    <h2>Lorem Ipsum is simply dummy text of the </h2>
                </div>
                <div className='flex justify-end mt-[-26px]'>
                    <SchoolFixButton
                    buttonIcon={<FaFacebookSquare className='w-[35px] h-[32px]' />}
                    buttonStyle='border-0 bg-transparent'
                    buttonPresent={true}
                    />
                   <SchoolFixButton
                    buttonIcon={<FaInstagramSquare className='w-[35px] h-[32px]' />}
                    buttonStyle='border-0 bg-transparent'
                    buttonPresent={true}
                    />
                   <SchoolFixButton
                    buttonIcon={<FaTwitterSquare className='w-[35px] h-[32px]' />}
                    buttonStyle='border-0 bg-transparent'
                    buttonPresent={true}
                    />
                    <SchoolFixButton
                    buttonIcon={<FaPhoneSquare className='w-[35px] h-[32px]' />}
                    buttonStyle='border-0 bg-transparent'
                    buttonPresent={true}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SchoolFixFooter
