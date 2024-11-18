import React from 'react';
import careerWorkshops from "../../assets/Group Career Workshops-slider.jpg";
import counselingSessions from "../../assets/Career Counseling Sessions-slider.jpg";
import resumeReview from "../../assets/Resume Review-slider.jpg";
import careerChange from "../../assets/Career Change Counseling.jpg";
import personalityCareer from "../../assets/Personality & Career Assessment.jpg";
import skillDevelopment from "../../assets/Skill Development Programs.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BannerSlider = () => {
    return (
        <div className="w-full relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // autoplay={{
        //     delay: 3000, // Time in milliseconds (3 seconds)
        //     disableOnInteraction: false, // Keeps autoplay even after user interaction
        //   }}
        slidesPerView={1}
        loop={true}
        className="h-[800px]" // Adjust the height as needed
      >
        <SwiperSlide>
          {/* <img src={careerWorkshops} alt="Slide 1" className="w-full h-full bg-black  object-cover" /> */}
          <div style={{
                backgroundImage: `url(${personalityCareer})`, backgroundColor: "#3c448384",
                backgroundBlendMode: "multiply"
            }} className="bg-cover bg-no-repeat bg-center w-full h-full ">
             
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={counselingSessions} alt="Slide 2" className="w-full h-full object-cover" /> */}
          <div style={{
                backgroundImage: `url(${counselingSessions})`, backgroundColor: "#3c448384",
                backgroundBlendMode: "multiply"
            }} className="bg-cover bg-no-repeat bg-center w-full h-full ">
             
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={resumeReview} alt="Slide 3" className="w-full h-full object-cover" /> */}
          <div style={{
                backgroundImage: `url(${careerWorkshops})`, backgroundColor: "#3c448384",
                backgroundBlendMode: "multiply"
            }} className="bg-cover bg-no-repeat bg-center w-full h-full ">
             
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={resumeReview} alt="Slide 3" className="w-full h-full object-cover" /> */}
          <div style={{
                backgroundImage: `url(${resumeReview})`, backgroundColor: "#3c448384",
                backgroundBlendMode: "multiply"
            }} className="bg-cover bg-no-repeat bg-center w-full h-full ">
             
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={resumeReview} alt="Slide 3" className="w-full h-full object-cover" /> */}
          <div style={{
                backgroundImage: `url(${skillDevelopment})`, backgroundColor: "#3c448384",
                backgroundBlendMode: "multiply"
            }} className="bg-cover bg-no-repeat bg-center w-full h-full ">
             
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={resumeReview} alt="Slide 3" className="w-full h-full object-cover" /> */}
          <div style={{
                backgroundImage: `url(${careerChange})`, backgroundColor: "#3c448384",
                backgroundBlendMode: "multiply"
            }} className="bg-cover bg-no-repeat bg-center w-full h-full ">
             
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Left Arrow */}
      <div className="swiper-button-prev absolute  top-1/2 left-4 z-10 transform -translate-y-1/2 cursor-pointer  bg-[#e09d15] rounded-full p-8">
        <FaArrowLeft />
      </div>

      {/* Custom Right Arrow */}
      <div className="swiper-button-next absolute top-1/2 right-4 z-10 transform -translate-y-1/2 cursor-pointer  text-white bg-[#e09d15] rounded-full p-8">
        <FaArrowRight />
      </div>
    </div>
    );
};

export default BannerSlider;