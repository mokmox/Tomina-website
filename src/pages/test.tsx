import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import { SwiperSlide } from 'swiper/react';
import Slider from '../components/Slider';
import Test1 from '../components/Test1';
import { sliderOneData } from '../utils/intex';

const TestPage: React.FC<PageProps> = () => {
  return (
    <main className="heading">
      <h1>Welcome to Devioand Ltd.</h1>
      <Slider>
        {sliderOneData.map((item, index) => (
          <SwiperSlide key={index}>
            <Test1
              title={item.title}
              description={item.description}
              author={item.author}
            />
          </SwiperSlide>
        ))}
      </Slider>


      <h2>Another Slider</h2>
      <Slider>
        {sliderOneData.map((item, index) => (
          <SwiperSlide key={index}>
            <Test1
              title={item.title}
              description={item.description}
              author={item.author}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </main>
  );
};

export default TestPage;

export const Head: HeadFC = () => <title>Test Page</title>;
