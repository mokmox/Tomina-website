import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../images/Rectangle3.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { url } from 'inspector';


function Slider2({ data }) {
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
                className="mySwiper arrowstyle"
                style={{
                    // height: "100vh", 
                }}
            >
                {
                    data.map((item, index) => {
                        return (
                            <>
                                < SwiperSlide className='' key={index}>
                                    <div className='flex justify-center'>
                                        <div className='flex flex-col justify-center items-center w-[300px] bg-[#A51E1E] rounded-[3rem] '>
                                            <div>
                                                <img src={item.image} className='max-w-auto h-[200px]' />
                                            </div>
                                            <div className='flex flex-col justify-center items-center px-4'>
                                                <h1 className="text-xl md:text-2xl text-white text-center  font-bold py-2">{item.title}</h1>
                                                <p className="text-[.9rem] text-white text-center  py-2">
                                                    {item.dicription}
                                                </p>
                                                <div className='flex justify-center items-center pb-4'>
                                                    <button className='text-white border  text-white mx-auto !mt-0 rounded-full py-2 px-12 rounded-full'>
                                                        Learn More
                                                    </button>
                                                </div>

                                            </div>
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

export default Slider2


