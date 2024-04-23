import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../images/Rectangle4.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function Slider({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{
          // height: "65vh",
        }}
      >
        {
          data.map((item, index) => {
            return (
              <>
                < SwiperSlide>
                  <div className='flex justify-center items-center '>
                    <div className='' key={index}>
                      {/* <img src={img} className='max-h-[250px] md:max-h-max object-contain object-center' alt='' /> */}
                      <img src={img} className='max-h-[250px] md:max-h-[320px] object-contain object-center' alt='' />
                      {/* <div className='absolute top-[3rem] bg-no-repeat p-[3rem] lg:p-[6rem] w-[20rem] lg:w-[32rem] h-[12rem] bg-[length:20rem_12rem] lg:h-[20rem] lg:bg-[length:30rem_20rem] ' style={{
                        backgroundImage: `url(${item.background})`,
                        borderRadius: "12rem 0rem 0rem 0rem",
                      }}>
                        <h1 className='text-3xl lg:text-5xl text-white text-center mt-[0rem] font-bold' style={{
                          marginLeft: `${item.left}rem`
                        }}>{item.text}</h1>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              </>
            )
          })

        }
      </Swiper >
    </>
  )
}

export default Slider


