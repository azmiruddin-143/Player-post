import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
const Newsletter = () => {
    return (
        <div className='bg-[#3c4483] py-10 px-10 flex items-center w-fit rounded-2xl gap-5 mx-auto justify-center'>
            <div>
                <h1 className='text-white font-bold text-4xl'>Subscribe to Our Newsletter</h1>
                <p className='text-base text-gray-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='flex gap-5 items-center'>
                <input type="text" placeholder="Type here" className="input input-bordered w-[100%]" />
                <div className='bg-[#e09d15] p-3 rounded-full'>
                    <FaArrowRight size={20} />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;