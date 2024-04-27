import React from 'react'
import About1 from "../images/about1.png";
import Organic from "../images/organic.png";
import Trusted from "../images/trusted.png";
import Iso from "../images/iso.png";
import Fda from "../images/fda.png";

function About() {
   return (
  <>
    <section>
      <div className=''>
       <div className='gradientbg-aboutsec1 relative flex flex-col bg-[url("../images/about.png")] bg-no-repeat bg-cover bg-center w-full h-lvh'>
       <div className='md:pb-10 pb-16 mt-auto '>
       <h1 className=' text-white md:text-[64px] text-[24px] font-[800] md:leading-[78.02px] leading-[29.26px] text-center mx-auto'>About Us</h1>
       <p className=' mt-3 text-white md:text-[20px] text-xs font-normal md:leading-6 leading-[14.63px]  text-center mx-auto'>Proudly located in - Fatoum, Egypt
       </p>
       </div>
          
       </div>
       <div className='lg:px-[65px] md:px-10 px-5 pt-[25px] flex md:flex-row flex-col-reverse justify-between mx-auto gradient-bg'>
        <div className='md:w-[46%] w-full md:pt-[49px] pt-0 '>
         <p className='text-white sm:text-lg text-sx md:leading-6 text-center px-3 leading-[14.63px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
        <div className='mt-5 lg:mb-0 mb-5 flex items-center md:justify-normal justify-center gap-7'>
          <img src={Organic} alt='organic' className='md:w-[105px] w-[42px] md:h-[81px] h-[27px]'/>
          <img src={Trusted} alt='trusted' className='md:w-[154px] w-[62px] md:h-[67px] h-[23px]'/>
        </div>
        </div>
        <div className='md:w-[54%] w-full z-10 flex justify-center text-center'>
          <img  src={About1} className='lg:w-[570px] w-[264px] lg:h-[570px] h-[245px] z-1 mt-[-60px]' />
        </div>
       </div>
       <div className='md:py-[65px] py-8 flex md:flex-row flex-col justify-between mx-auto gradient-mission'>
        <div className='text-center px-[65px] md:w-[44%] w-full md:pt-[49px] md:pb-0 pb-5 pt-2'>
         <h3 className=' md:w-[293px] w-full text-white md:text-[64px] text-[24px] font-[800] md:leading-[78.02px] leading-[29.24px] md:text-justify text-center'>Our Mission
        </h3>
      
        </div>
        <div className='md:w-[56%] w-full flex justify-center text-center md:px-0 px-5'>
          <div className='lg:pl-14 md:pl-8 lg:pr-5 md:pr-3 md:px-0 px-5   py-7 bg-[#B8AA84] lg:rounded-l-[30px] md:rounded-r-[20px] rounded-[20px]'>
           <p className='text-white lg:text-[20px] text-xs lg:font-medium font-normal md:leading-[24.63px] leading-[14.63px] text-justify'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
           </p>
          </div>
        </div>
       </div>
      {/* //section 4 */}
      <div className='md:py-[65px] py-8 flex md:flex-row flex-col-reverse justify-between mx-auto gradient-vision'>
        
        <div className='md:w-[66%] w-full flex justify-center text-center md:px-0 px-5'>
          <div className='lg:pl-14 md:pl-8 lg:pr-5 md:pr-3 md:px-0 px-5 py-7 bg-[#B8AA84] lg:rounded-r-[30px] md:rounded-r-[20px] rounded-[20px]'>
           <p className='text-white lg:text-[20px] text-xs lg:font-medium font-normal md:leading-[24.38px] leading-[14.63px] text-justify'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
           </p>
          </div>
        </div>
        <div className='px-[65px] md:w-[44%] w-full md:pt-[49px] pt-0 md:pb-0 pb-10'>
         <h3 className='md:text-end  text-center md:justify-center text-white md:text-[64px] text-[24px] font-[800] md:leading-[78.02px] leading-[29.26px] md:w-[239px] w-full'>Our Vision
        </h3>
        </div>
       </div>
       <div className='gradientbg-fields relative justify-center items-center flex flex-col bg-[url("../images/fields.png")] bg-no-repeat bg-cover bg-center w-full md:h-[679.11px] h-[378px]'>
        <div className='max-w-[1069px] w-full mx-auto lg:px-0 px-5'>
        <h1 className=' text-white md:text-[64px] text-[24px] font-[800] md:leading-[78.02px] leading-[29.26px] text-center mx-auto'>Our Company</h1>
       <p className='mt-5 md:px-0 px-3 text-white md:text-[20px] text-xs md:leading-[24.78px] leading-[14.23px] text-center mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
       </p>   
       <div className='flex justify-center mt-5'>
       <button className='hover:bg-[#7e2121] border border-white bg-transparent md:py-3 py-2 md:rounded-full rounded-[24px] md:px-[90px] px-[34px] text-white md:text-[18px] text-xs md:leading-[24px] leading-[14.23px] text-center mx-auto'>See More</button>
       </div>
        </div>
       </div>
       {/* last section */}
       <div className='bg-[#A51E1E] py-10 max-w-[1369px] w-full mx-auto '>
        <div className='max-w-[1037px] w-full xl:px-0 px-5 mx-auto'>
          <h1 className='md:uppercase capitalize text-white md:text-[64px] text-[24px] font-[800] md:leading-[78.02px] leading-[29.26px] text-center mx-auto'>Certificates</h1>
          <p className='md:mt-5 mt-2 text-white md:text-[24px] font-[700] text-[8px] md:leading-[29.26px] leading-[9.75px] text-center mx-auto'>All in good taste elementum integer enim neque volutpat ac.</p>
        <p className='md:mt-5 mt-2 text-white md:text-[20px] text-[6px] md:leading-[24.78px] leading-[7.31px] text-center mx-auto'>Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis  enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.
</p>
        <div className='md:py-10 py-3 flex justify-center items-center md:gap-8 gap-4'>
         <img className='lg:w-[300px] md:w-[180px] w-[68px] lg:h-[300px] md:h-[180px] h-[68px]' src={Iso} alt='iso' />
         <img className='lg:w-[300px] md:w-[180px] w-[68px] lg:h-[300px] md:h-[180px] h-[68px]' src={Fda} alt='fda' />
         <img className='lg:w-[300px] md:w-[180px] w-[68px] lg:h-[300px] md:h-[180px] h-[68px]' src={Iso} alt='iso2' /> 
        </div>
        </div>
       </div>
      </div>
    </section>
  </>
  )
}
export default About