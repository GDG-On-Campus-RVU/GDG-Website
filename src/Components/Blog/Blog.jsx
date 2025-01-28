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
            <div className="blog-container w-full overflow-hidden">
                <h2 className="text-center text-2xl font-bold mb-6">Blog</h2>
                <Swiper
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    spaceBetween={50}
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
                    className="blog-swiper w-full">
                        
                    <SwiperSlide className="max-w-full">
                        <div className="slide-content w-full">Slide 1</div>
                    </SwiperSlide>
                    <SwiperSlide className="max-w-full">
                        <div className="slide-content w-full">Slide 2</div>
                    </SwiperSlide>
                    <SwiperSlide className="max-w-full">
                        <div className="slide-content w-full">Slide 3</div>
                    </SwiperSlide>
                    <SwiperSlide className="max-w-full">
                        <div className="slide-content w-full">Slide 4</div>
                    </SwiperSlide>
                    <SwiperSlide className="max-w-full">
                        <div className="slide-content w-full">Slide 5</div>
                    </SwiperSlide>
                    <SwiperSlide className="max-w-full">
                        <div className="slide-content w-full">Slide 6</div>
                    </SwiperSlide>
                    <SwiperSlide className="max-w-full">
                        <div className="slide-content w-full">Slide 6</div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </TemplatePage >
    );
};

export default Blog;
