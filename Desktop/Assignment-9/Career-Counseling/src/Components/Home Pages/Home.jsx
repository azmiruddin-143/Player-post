import React from 'react';
import BannerSlider from '../Banner Component/BannerSlider';
import Services from '../Mian Part/Services Section/Services';
import FeaturedServices from '../Featured Services/FeaturedServices';
import Testimonial from '../Testimonial Components/Testimonial';
import Newsletter from '../Newsletter Component/Newsletter';
import { Helmet } from 'react-helmet-async';



const Home = () => {
    return (
        <div>
           <Helmet>
              <title>Home</title>
           </Helmet>
            <BannerSlider></BannerSlider>
            <Services></Services>
            <FeaturedServices></FeaturedServices>
            <Testimonial></Testimonial>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;