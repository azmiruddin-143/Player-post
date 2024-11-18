import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <div className='space-y-4' >
                <h1 className='text-5xl text-[#3c4483] font-bold'>Career <span className='text-[#e09d15] relative right-2 font-bold'>Counseling</span></h1>
                <p className='w-3/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum non tortor quis consectetur.</p>
                <div className='flex items-center gap-3'>
                    <FaFacebook size={30} />
                    <FaTwitterSquare size={30} />
                    <FaLinkedin size={30} />
                </div>
            </div>


            <div>
                <h1 className='text-[#3c4483] text-3xl'>Quicklinks</h1>
                <ul className='text-lg space-y-2 mt-4'>
                    <div><NavLink to="/service">Service</NavLink></div>
                    <div><NavLink to="myprofile">MyProfile</NavLink></div>
                    <div><NavLink to="about">About</NavLink></div>
                    <div><NavLink to="/">Home</NavLink></div>
                </ul>
            </div>

            <div>
                <h1 className='text-[#3c4483] text-3xl'>Support</h1>
                <ul className='text-lg space-y-2 mt-4'>
                    <div><NavLink to="/service"> FAQ's</NavLink></div>
                    <div><NavLink to="myprofile">Privacy Policy</NavLink></div>
                    <div><NavLink to="about">Terms & Condition</NavLink></div>
                    <div><NavLink to="/">Home</NavLink></div>
                </ul>
            </div>
            <div>
                <h1 className='text-[#3c4483] text-3xl'>Contact Information</h1>
                <ul className='text-lg space-y-2 mt-4'>
                    <div className='flex items-center gap-2'>
                        <FaMapMarkerAlt size={30} />
                        <h1>KLLG st, No.99th, PKU City,ID 28289</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoCall size={30} />
                        <h1>+62 111-222-3344</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdEmail size={30} />
                        <h1>your@domain.com</h1>
                    </div>

                </ul>
            </div>

        </div>

    );
};

export default Footer;