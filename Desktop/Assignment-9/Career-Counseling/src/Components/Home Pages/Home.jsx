import React from 'react';
import BannerSlider from '../Banner Component/BannerSlider';
import Services from '../Mian Part/Services Section/Services';
import FeaturedServices from '../Featured Services/FeaturedServices';
import Testimonial from '../Testimonial Components/Testimonial';


const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <Services></Services>
            <FeaturedServices></FeaturedServices>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;