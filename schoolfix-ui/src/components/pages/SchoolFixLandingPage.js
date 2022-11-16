import React from 'react'
import SchoolFixButton from '../comon/SchoolFixButton'
import SchoolFixCards from '../comon/SchoolFixCards'
import SchoolFixFooter from '../comon/SchoolFixFooter'
import SchoolFixNavbar from '../comon/SchoolFixNavbar'

const SchoolFixLandingPage = () => {
  return (
    <div>
       <SchoolFixNavbar 
          buttonPresent={true}
       />
        <div className="container flex items-center  w-[90%]">
            <div className='flex justify between'>
                <div className='block '>  
                    <h1 className='text-[34px] justify-self-start font-serif text-left ml-[120px] mt-[100px]'>SchoolFix we fix you. </h1>
                    <h2 className='text-[18px] ml-[120px]  w-[442px] h-[189px] text-left font-serif '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</h2>
                </div>
                <div><img src="/landingpg.jpg" alt="SschoolFix" className='w-[487px] ml-[50px] h-[376px] mt-[24px]'/></div>
            </div>
        </div>
        <div>
            <div className='bg-[#808080] border-2 border-[#808080] w-full h-[283px] mt-[80px]'>
                <h2 className='text-[34px] ml-[500px] font-normal'>About Us</h2>
                <h4 className='w-[489px h-241px text-base h-[241px] w-[489px] mt-[40px] text-left ml-[595px]'> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 

                </h4>                    
            </div>
            <div className='bg-[#999999] border-2 border-[#999999] w-full h-[283px] mt-[0px]'>
                <h2 className='w-[489px h-241px text-base h-[241px] w-[489px] mt-[40px] text-left ml-[595px]'> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 

                </h2>
                <img src="/about.jpg" alt="SschoolFix" className='w-[425px] ml-[120px] h-[396px] mt-[-462px]'/>
            </div>
        </div>
        <div className='bg-[#858585] border-2 border-[#999999] w-full h-[1520px] mt-[0px]'>
          <h2 className='text-[34px] ml-[540px] font-normal'>Schools</h2>
          <div>
                <div className='h-[94px] w-[450px] text-base ml-[120px] mt-[80px] text-start'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </div>
                <SchoolFixButton 
                    buttonText={'View More'}
                    buttonStyle='border-2 bg-[#000000] text-[#ffffff] h-7 w-20 ml-[460px] hover:text-[#000000] hover:bg-[#ffffff]'
                    buttonPresent={true}
                />
          </div>
          <div className='mt-[20px] ml-[114px]'>
            <SchoolFixCards
                imgSrc={'/schoollist2.jpg'}
                schoolType={'Secondary School'}
                schoolName={"Mang'u High School"}
                imageStyle={'h-[450px] w-[500px]'}
                cardStyle={'h-[590px] w-[508px]'}
                nameStyle={'mt-[40px]'}
                buttonCardStyle={'mt-[0px] ml-[390px] hover:text-[#ffffff] hover:bg-[#000000]'}
            />
          </div>   
              
          <div className='mt-[-740px] ml-[630px]'>
            <SchoolFixCards
                imgSrc={'/schoollist13.jpg'}
                schoolType={'Secondary School'}
                schoolName={"Juja High School"}
                imageStyle={'h-[450px] w-[500px]'}
                cardStyle={'h-[590px] w-[508px]'}
                nameStyle={'mt-[40px]'}
                buttonCardStyle={'mt-[0px] ml-[390px] hover:text-[#ffffff] hover:bg-[#000000]'}
            />
          </div>       
          <div className='mt-[10px] ml-[630px]'>
            <SchoolFixCards
                imgSrc={'/schoollist3.jpg'}
                schoolType={'Primary School'}
                schoolName={"Thika Primary School"}
                imageStyle={'h-[450px] w-[500px]'}
                cardStyle={'h-[590px] w-[508px]'}
                nameStyle={'mt-[40px]'}
                buttonCardStyle={'mt-[0px] ml-[390px] hover:text-[#ffffff] hover:bg-[#000000]'}
            />
          </div>       
          <div className='mt-[-438px] ml-[114px]'>
            <SchoolFixCards
                imgSrc={'/schoollist6.jpg'}
                schoolType={'Primary School'}
                schoolName={"Masomo Primary School"}
                imageStyle={'h-[450px] w-[500px]'}
                cardStyle={'h-[590px] w-[508px]'}
                nameStyle={'mt-[40px]'}
                buttonCardStyle={'mt-[0px] ml-[390px] hover:text-[#ffffff] hover:bg-[#000000]'}
            />
          </div>       
        </div>
        <SchoolFixFooter />
    </div>
  )
}

export default SchoolFixLandingPage
