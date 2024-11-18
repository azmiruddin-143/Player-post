import React from "react";
import clientImage from "../../assets/clientimage-1.jpg";
import clientImage2 from "../../assets/client-image-2.jpg";
import clientImage3 from "../../assets/client-image-3.jpg";
import clientImage4 from "../../assets/client-image-4.jpg";
import clientImage5 from "../../assets/client-image-5.jpg";
import clientImage6 from "../../assets/client-image-6.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Import Pagination
import "swiper/css";
import "swiper/css/pagination"; // Import Swiper Pagination CSS
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="relative mx-24 my-24">
      <Swiper
        modules={[Pagination, Autoplay]} // Enable Pagination and Autoplay
        pagination={{
          clickable: true, // Makes dots clickable
        }}
        autoplay={{
          delay: 3000, // Change slides every 3 seconds
          disableOnInteraction: false, // Keep autoplay active after interaction
        }}
        slidesPerView={1} // One slide visible at a time
        loop={true} // Infinite loop
        className="h-[300px]" // Adjust height as needed
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex gap-6 ">
            <div className="flex gap-5 items-center rounded-xl bg-base-300 justify-center">
              <img
                className="w-[200px] h-[200px] rounded-l-xl"
                src={clientImage}
                alt="Profile"
              />
              <div className="">
                <FaQuoteLeft className="text-[#e09d15] text-3xl" />
                <p className="mt-3 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  sapiente consequuntur ratione tenetur distinctio.
                </p>
                <h1 className="mt-2 font-bold text-lg text-gray-800">
                  Samira Khan
                </h1>
                <h2 className="text-sm text-gray-500">Client</h2>
              </div>
            </div>

            <div className="flex gap-5 items-center rounded-xl bg-base-300 justify-center">
              <img
                className=" rounded-l-xl"
                src={clientImage2}
                alt="Profile"
              />
              <div className="">
                <FaQuoteLeft className="text-[#e09d15] text-3xl" />
                <p className="mt-3 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  sapiente consequuntur ratione tenetur distinctio.
                </p>
                <h1 className="mt-2 font-bold text-lg text-gray-800">
                  Samira Khan
                </h1>
                <h2 className="text-sm text-gray-500">Client</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex gap-6 ">
            <div className="flex gap-5 items-center rounded-xl bg-base-300 justify-center">
              <img
                className="w-[200px] h-[200px] rounded-l-xl"
                src={clientImage3}
                alt="Profile"
              />
              <div className="">
                <FaQuoteLeft className="text-[#e09d15] text-3xl" />
                <p className="mt-3 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  sapiente consequuntur ratione tenetur distinctio.
                </p>
                <h1 className="mt-2 font-bold text-lg text-gray-800">
                  Samira Khan
                </h1>
                <h2 className="text-sm text-gray-500">Client</h2>
              </div>
            </div>

            <div className="flex gap-5 items-center rounded-xl bg-base-300 justify-center">
              <img
                className="w-[200px] h-[200px] rounded-l-xl"
                src={clientImage4}
                alt="Profile"
              />
              <div className="">
                <FaQuoteLeft className="text-[#e09d15] text-3xl" />
                <p className="mt-3 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  sapiente consequuntur ratione tenetur distinctio.
                </p>
                <h1 className="mt-2 font-bold text-lg text-gray-800">
                  Samira Khan
                </h1>
                <h2 className="text-sm text-gray-500">Client</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex gap-6 ">
            <div className="flex gap-5 items-center rounded-xl bg-base-300 justify-center">
              <img
                className="w-[200px] h-[200px] rounded-l-xl"
                src={clientImage5}
                alt="Profile"
              />
              <div className="">
                <FaQuoteLeft className="text-[#e09d15] text-3xl" />
                <p className="mt-3 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  sapiente consequuntur ratione tenetur distinctio.
                </p>
                <h1 className="mt-2 font-bold text-lg text-gray-800">
                  Samira Khan
                </h1>
                <h2 className="text-sm text-gray-500">Client</h2>
              </div>
            </div>

            <div className="flex gap-5 items-center rounded-xl bg-base-300 justify-center">
              <img
                className="w-[200px] h-[200px] rounded-l-xl"
                src={clientImage6}
                alt="Profile"
              />
              <div className="">
                <FaQuoteLeft className="text-[#e09d15] text-3xl" />
                <p className="mt-3 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  sapiente consequuntur ratione tenetur distinctio.
                </p>
                <h1 className="mt-2 font-bold text-lg text-gray-800">
                  Samira Khan
                </h1>
                <h2 className="text-sm text-gray-500">Client</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
