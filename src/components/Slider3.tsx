import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../images/Group2.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function Slider3({ data }) {
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
                                    <div className='flex justify-center items-center'>
                                        <div className='flex' key={index}>
                                            {/* <img src={img1} className='px-[3rem]' alt='' /> */}
                                            <img src={img1} className='max-h-[180px] md:max-h-[300px] object-contain object-center' />
                                            {/* <div className='absolute top-[3rem] bg-no-repeat py-[2rem] md:p-[3.5rem] w-[17rem] md:w-[32rem] h-[12rem] bg-[length:17rem_12rem] md:h-[15rem] md:bg-[length:30rem_15rem] ' style={{
                                                backgroundImage: `url(${item.background})`,
                                                borderRadius: "12rem 0rem 0rem 0rem",
                                            }}>
                                                <h1 className='text-3xl md:text-5xl text-white text-center mt-[0rem] font-bold' style={{
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

export default Slider3


