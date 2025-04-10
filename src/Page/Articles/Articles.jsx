import React from 'react'
import blogImage1 from "../../assets/1.jpg"
import blogImage2 from "../../assets/2.jpg"
import blogImage3 from "../../assets/3.jpg"
import ArticleItem from '../../Components/ArticleItem'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Articles = () => {
    return (
        <div className='min-h-[93vh] bg-[#ecedf2]'>
            <div className='container sectionContainer'>
                <div className='py-16 space-y-2.5 text-center'>
                    <h1 className='font-bold text-gray-500 text-3xl'>Recent News Articles</h1>
                    <h2 className='font-normal text-gray-400'>Fresh job related news content posted each day.</h2>
                </div>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 }, 
                            640: { slidesPerView: 2 },  
                            1024: { slidesPerView: 3 }, 
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><ArticleItem blogImage={blogImage1} /></SwiperSlide>
                        <SwiperSlide><ArticleItem blogImage={blogImage2} /></SwiperSlide>
                        <SwiperSlide><ArticleItem blogImage={blogImage3} /></SwiperSlide>
                        <SwiperSlide><ArticleItem blogImage={blogImage1} /></SwiperSlide>
                        <SwiperSlide><ArticleItem blogImage={blogImage2} /></SwiperSlide>
                        <SwiperSlide><ArticleItem blogImage={blogImage3} /></SwiperSlide>
                    </Swiper>
            </div>
        </div>
    )
}

export default Articles