import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle from '../sectionTitle/SectionTitle';


const Category = () => {
    return (
        <div className='max-w-6xl mx-auto py-12'>
            <SectionTitle subHeading={'---From 11:00am to 10:00pm---'} heading={'ORDER ONLINE'} />
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full' src="https://i.ibb.co/YDjmn90/slide3.jpg" alt="" />
                    <h2 className='text-2xl text-white font-medium -mt-20 text-center uppercase'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src="https://i.ibb.co/zr8MTbG/slide4.jpg" alt="" />
                    <h2 className='text-2xl text-white font-medium -mt-20 text-center uppercase'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src="https://i.ibb.co/chpLJYH/slide5.jpg" alt="" />
                    <h2 className='text-2xl text-white font-medium -mt-20 text-center uppercase'>pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src="https://i.ibb.co/chpLJYH/slide5.jpg" alt="" />
                    <h2 className='text-2xl text-white font-medium -mt-20 text-center uppercase'>desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src="https://i.ibb.co/fFY9Pcd/slide2.jpg" alt="" />
                    <h2 className='text-2xl text-white font-medium -mt-14 text-center uppercase'>Salads</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
