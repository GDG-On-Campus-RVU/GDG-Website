import React from 'react';
import TemplatePage from '../TemplatePage/TemplatePage';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import './Blog.css';

const Blog = () => {
  return (
    <TemplatePage>
      <div className="blog-container">
        <h2>Blog</h2>
        <Swiper
  modules={[EffectCoverflow, Pagination, Navigation]}
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView="auto" /* Adjusted to prevent cutoff */
  spaceBetween={50} /* Increase space so it doesn't get cut */
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 250,
    modifier: 1.5,
    slideShadows: false,
  }}
  loop={true}
  pagination={{ clickable: true }}
  navigation={true}
  className="blog-swiper"
>
          <SwiperSlide>
            <div className="slide-content">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">Slide 4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">Slide 5</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </TemplatePage>
  );
};

export default Blog;
