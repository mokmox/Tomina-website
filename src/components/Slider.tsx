import React, { FC } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface IProps {
  children: React.ReactNode;
}

const Slider: FC<IProps> = ({ children }) => {
  return (
    <div>
      <Swiper
        className=""
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;
