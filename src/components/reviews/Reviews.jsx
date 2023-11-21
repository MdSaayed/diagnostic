import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className='py-16 max-w-6xl mx-auto'>
            <div>
                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[ Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map((rev) => <>
                            <SwiperSlide className='px-16'>
                                <div className='flex justify-center text-center'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={rev.rating}
                                    />
                                </div>
                                <h2 className='text-xl text-yellow-700 my-4 font-bold text-center'>{rev.name}</h2>
                                <p className='text-center'>{rev.details}</p>
                            </SwiperSlide>
                        </>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Reviews;