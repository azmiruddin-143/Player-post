import React from 'react';
import featuredServices from "../../assets/Featured Services.jpg"
import collegeApplication from "../../assets/College Application Guidance.jpg"

const FeaturedServices = () => {
    return (
        <div className="relative mx-24 my-16 ">
        {/* Background Image */}
        <div
            style={{
                backgroundImage: `url(${collegeApplication})`,
                backgroundColor: "gray",
                backgroundBlendMode: "multiply",
            }}
            className="absolute inset-0 rounded-2xl w-full h-full opacity-20 bg-cover bg-no-repeat bg-center z-0"
        ></div>

        {/* Content */}
        <div className="relative z-10 flex justify-center items-center py-10">
            <div className="bg-[#3c4483] py-10 px-6 rounded-3xl">
                <div>
                    <h1 className="text-white text-xl">Featured Services</h1>
                    <p className="text-5xl text-white w-8/12 font-bold py-4">Unlock Your True Potential with Xennada</p>
                </div>
                <ul className="steps steps-vertical my-6">
                    <div className='step step-warning'>
                        <div className='text-start mt-6 space-y-2'>
                            <h1 className='text-white text-3xl font-bold'>Personalized Coaching</h1>
                            <p className='text-gray-200 text-base w-8/12 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum non tortor quis consectetur. Duis at posuere felis. </p>
                        </div>
                    </div>
                    <div className='step step-warning'>
                        <div className='text-start mt-6 space-y-2'>
                            <h1 className='text-white text-3xl font-bold'>Personalized Coaching</h1>
                            <p className='text-gray-200 text-base w-8/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum non tortor quis consectetur. Duis at posuere felis. </p>
                        </div>
                    </div>
                    <div className='step step-warning'>
                        <div className='text-start mt-6 space-y-2'>
                            <h1 className='text-white text-3xl font-bold'>Personalized Coaching</h1>
                            <p className='text-gray-200 text-base w-8/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum non tortor quis consectetur. Duis at posuere felis. </p>
                        </div>
                    </div>
                    <div className='step step-warning'>
                        <div className='text-start mt-6 space-y-2'>
                            <h1 className='text-white text-3xl font-bold'>Personalized Coaching</h1>
                            <p className='text-gray-200 text-base w-8/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum non tortor quis consectetur. Duis at posuere felis. </p>
                        </div>
                    </div>
                    

                </ul>
            </div>

            <div className='relative right-20'>
                <img className='rounded-3xl' src={featuredServices} alt="" />
            </div>
        </div>
    </div>
    );
};

export default FeaturedServices;