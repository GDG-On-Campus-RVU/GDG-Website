import React from 'react';
import TemplatePage from '../TemplatePage/TemplatePage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import blogData from '../../api/blogData.json'; //' Import JSON file
import './Blog.css';

const Blog = () => {
    return (

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
                    className="blog-swiper w-full"
                >
                    {blogData.map((article, index) => (
                        <SwiperSlide key={index} className="swiper-slide-custom">
                            <div className="slide-header">
                                <img src={article.image} alt={article.title} className="slide-image" />
                            </div>
                            <div className="slide-body">
                                <a className="slide-content w-full" href={article.link} target="_blank">
                                    {article.title}
                                </a>
                                <div className="slide-content w-full">By: {article.author}</div>
                                <a className="read-more-btn" href={article.link} target="_blank">Read More</a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
      
    );
};

export default Blog;
