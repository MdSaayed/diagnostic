import React from 'react';
import Banner from '../components/banner/Banner';
import Category from '../components/category/Category';
import PopularMenu from '../components/popularMenu/PopularMenu';
import Featured from '../components/Featured/Featured';
import Reviews from '../components/reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />
            <Featured />
            <Reviews />
        </div>
    );
};

export default Home;

