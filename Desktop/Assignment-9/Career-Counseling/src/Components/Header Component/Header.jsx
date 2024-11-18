import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between 2xl:px-28 xl:px-20 lg:px-14   items-center py-5 bg-base-200'>
            <div>
                <h1 className='text-4xl text-[#3c4483] font-bold'>Career <span className='text-[#e09d15] relative right-2 font-bold'>Counseling</span></h1>
            </div>
            <div>
                <ul className='text-lg text-black mr-32 flex gap-5'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/service">Service</NavLink>
                    <NavLink to="/cource">Cource</NavLink>
                    <NavLink to="/myprofile">MyProfile</NavLink>
                </ul>
            </div>
            <div>
                <button className='bg-[#e09d15] text-white font-semibold text-lg py-2 px-6 rounded-lg'>Login</button>
            </div>
        </div>
    );
};

export default Header;