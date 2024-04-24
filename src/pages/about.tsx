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
       <div className='pb-10 mt-auto '>
       <h1 className=' text-white md:text-[64px] text-[40px] font-[800] md:leading-[78.02px] leading-10 text-center mx-auto'>About Us</h1>
       <p className=' mt-3 text-white md:text-[20px] text-lg font-normal md:leading-6 leading-5  text-center mx-auto'>Proudly located in - Fatoum, Egypt
       </p>
       </div>
          
       </div>
       <div className='lg:px-[65px] md:px-10 px-5 pt-[25px] flex md:flex-row flex-col justify-between mx-auto gradient-bg'>
        <div className='md:w-[46%] w-full md:pt-[49px] pt-5'>
         <p className='text-white text-lg'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
        <div className='mt-5 lg:mb-0 mb-5 flex items-center md:justify-normal justify-center gap-7'>
          <img src={Organic} alt='organic' className='md:w-[105px] w-[75px] md:h-[81px] h-[58px]'/>
          <img src={Trusted} alt='trusted' className='md:w-[154px] w-[88px] md:h-[67px] h-[55px]'/>
        </div>
        </div>
        <div className='md:w-[54%] w-full z-10 flex justify-center text-center'>
          <img  src={About1} className='lg:w-[570px] w-[370px] lg:h-[570px] md:h-[370px] z-1 lg:mt-[-60px]  mt-3' />
        </div>
       </div>
       <div className='md:py-[65px] py-8 flex md:flex-row flex-col justify-between mx-auto gradient-mission'>
        <div className='text-center px-[65px] md:w-[44%] w-full md:pt-[49px] md:pb-0 pb-5 pt-2'>
         <h3 className=' text-white md:text-[64px] text-[40px] font-[800] md:leading-[78.02px] leading-10 md:text-justify text-center'>Our<br/> Mission
        </h3>
      
        </div>
        <div className='md:w-[56%] w-full flex justify-center text-center md:px-0 px-5'>
          <div className='lg:pl-14 md:pl-8 lg:pr-5 md:pr-3 md:px-0 px-5   py-7 bg-[#B8AA84] lg:rounded-l-[30px] md:rounded-l-[15px] rounded-md'>
           <p className='text-white lg:text-[20px] text-lg lg:font-medium font-normal leading-[24.38px] text-justify'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
           </p>
          </div>
        </div>
       </div>
      {/* //section 4 */}
      <div className='md:py-[65px] py-8 flex md:flex-row flex-col justify-between mx-auto gradient-vision'>
        
        <div className='md:w-[66%] w-full flex justify-center text-center md:px-0 px-5'>
          <div className='lg:pl-14 md:pl-8 lg:pr-5 md:pr-3 md:px-0 px-5 py-7 bg-[#B8AA84] lg:rounded-r-[30px] md:rounded-r-[15px] rounded-md'>
           <p className='text-white lg:text-[20px] text-lg lg:font-medium font-normal leading-[24.38px] text-justify'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
           </p>
          </div>
        </div>
        <div className='px-[65px] md:w-[44%] w-full pt-[49px]'>
         <h3 className='md:text-end justify-center text-white md:text-[64px] text-[40px] font-[800] md:leading-[78.02px] leading-10'>Our <br/>Vision
        </h3>
        </div>
       </div>
       <div className=' relative justify-center items-center flex flex-col bg-[url("../images/fields.png")] bg-no-repeat bg-cover bg-center w-full h-[679.11px]'>
        <div className='max-w-[1069px] w-full mx-auto lg:px-0 px-5'>
        <h1 className=' text-white md:text-[64px] text-[40px] font-[800] md:leading-[78.02px] leading-10 text-center mx-auto'>Our Company</h1>
       <p className='mt-5 text-white md:text-[20px] text-lg leading-[24.78px] text-center mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
       </p>   
       <div className='flex justify-center mt-5'>
       <button className='hover:bg-[#7e2121] border border-white bg-transparent py-3 rounded-full md:px-[90px] px-[55px] text-white text-[18px] leading-[24px] text-center mx-auto'>See More</button>
       </div>
        </div>
       </div>
       {/* last section */}
       <div className='bg-[#A51E1E] py-10 max-w-[1369px] w-full mx-auto '>
        <div className='max-w-[1037px] w-full xl:px-0 px-5 mx-auto'>
          <h1 className='uppercase text-white md:text-[64px] text-[40px] font-[800] md:leading-[78.02px] leading-10 text-center mx-auto'>Certificates</h1>
          <p className='mt-5 text-white md:text-[24px] font-[700] text-lg leading-[29.26px] text-center mx-auto'>All in good taste elementum integer enim neque volutpat ac.</p>
        <p className='mt-5 text-white md:text-[20px] text-lg leading-[24.78px] text-center mx-auto'>Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis  enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.
</p>
        <div className='py-10 flex sm:flex-row flex-col justify-center items-center gap-8 '>
         <img className='lg:w-[300px] w-[180px] lg:h-[300px] h-[180px]' src={Iso} alt='iso' />
         <img className='lg:w-[300px] w-[180px] lg:h-[300px] h-[180px]' src={Fda} alt='fda' />
         <img className='lg:w-[300px] w-[180px] lg:h-[300px] h-[180px]' src={Iso} alt='iso2' />
        </div>
        </div>
       </div>
      </div>
    </section>
  </>
  )
}
export default About