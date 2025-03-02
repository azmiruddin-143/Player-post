import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdOutlineChevronRight } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import ThemeToggle from '../themetoggles/ThemeToggle';
import facebook from '../../src/assets/facebook.png'
import instragram from '../../src/assets/instragram.png'
import twitter from '../../src/assets/twitter.png'
import tiktok from '../../src/assets/tiktok.png'
import teligram from '../../src/assets/teligram.png'
import youtuve from '../../src/assets/youtuve.png'
import FooterPart from './FooterPart';
import { HiChevronRight } from "react-icons/hi2";
import FullName from '../shared/FullName';
import SortBio from '../shared/SortBio';
const CardBody = () => {
    return (
        <div className='bg-neutral py-7 '>
            <h1 className='text-[36px] font-semibold pt-[82px] text-info-content text-center'> <FullName></FullName> </h1>  
            <SortBio></SortBio>
            {/* contact us  */}
            <div className='flex justify-center items-center gap-3 my-7'>
                <Link to={'tel:97433517340'} ><IoIosPhonePortrait className='text-6xl text-info-content p-3 rounded-full  bg-primary-content' /></Link>
                <Link to={'mailto:nojir5456@gmail.com'}><AiOutlineMail className='text-6xl text-info-content p-3 rounded-full  bg-primary-content' /></Link>
                <Link to={'sms:97433517340'}><LuMessageSquareMore className='text-6xl text-info-content p-3 rounded-full  bg-primary-content' /></Link>
                <Link to={'https://wa.me/97450917019'}><FaWhatsapp className='text-6xl text-info-content p-3 rounded-full bg-primary-content' /></Link>
            </div>
            <ThemeToggle></ThemeToggle>
            {/* Sosial Media Link Up */}
            <div className='p-[20px]'>
                <a href="https://www.facebook.com/profile.php?id=100091894283144&mibextid=ibOpuV"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className='flex justify-between mb-5 items-center bg-primary-content py-[20px] pl-[20px] pr-[11px] rounded-md'>
                        <div className='flex items-center gap-4 '>
                            <img className='w-[52px] h-[52px]' src={facebook} alt="" />
                            <div>
                                <h1 className='sm:text-[20px] font-medium text-xl  text-info'>Facebook</h1>
                                <p className='text-info leading-none text-sm'>Folow us on facebook</p>
                            </div>
                        </div>
                        <HiChevronRight className='text-[30px] text-info-content' />
                    </div>
                </a>

                <a href="https://www.facebook.com/profile.php?id=100091894283144&mibextid=ibOpuV"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className='flex justify-between mb-5 items-center bg-primary-content py-[20px] pl-[20px] pr-[11px]  rounded-md'>
                        <div className='flex items-center gap-4'>
                            <img className='w-[52px] h-[52px]' src={instragram} alt="" />
                            <div>
                                <h1 className=' font-medium text-xl text-info'>Instragram</h1>
                                <p className='text-info leading-none text-sm'>Folow us on instragram</p>
                            </div>
                        </div>
                        <HiChevronRight className='text-[30px] text-info-content' />
                    </div>
                </a>

                <a href="https://www.facebook.com/profile.php?id=100091894283144&mibextid=ibOpuV"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className='flex justify-between items-center mb-5 bg-primary-content py-[20px] pl-[20px] pr-[11px]  rounded-md'>
                        <div className='flex items-center gap-4'>
                            <img className='w-[52px] h-[52px]' src={twitter} alt="" />
                            <div>
                                <h1 className='sm:text-xl font-medium text-xl text-info'>Twitter</h1>
                                <p className='text-info leading-none text-sm'>Folow us on twitter</p>
                            </div>
                        </div>
                        <HiChevronRight className='text-[30px] text-info-content' />
                    </div>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100091894283144&mibextid=ibOpuV"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className='flex justify-between mb-5 items-center bg-primary-content py-[20px] pl-[20px] pr-[11px]  rounded-md'>
                        <div className='flex items-center gap-4'>
                            <img className='w-[52px] h-[52px]' src={tiktok} alt="" />
                            <div>
                                <h1 className='sm:text-xl font-medium text-xl text-info'>Tiktok</h1>
                                <p className='text-info leading-none text-sm'>Folow us on tiktok</p>
                            </div>
                        </div>
                        <HiChevronRight className='text-[30px] text-info-content' />
                    </div>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100091894283144&mibextid=ibOpuV"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className='flex justify-between mb-5 items-center bg-primary-content py-[20px] pl-[20px] pr-[11px]  rounded-md'>
                        <div className='flex items-center gap-4'>
                            <img className='w-[52px] h-[52px]' src={teligram} alt="" />
                            <div>
                                <h1 className='sm:text-xl font-medium text-xl text-info'>Teligram</h1>
                                <p className='text-info leading-none text-sm'>Folow us on teligram</p>
                            </div>
                        </div>
                        <HiChevronRight className='text-[30px] text-info-content' />
                    </div>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100091894283144&mibextid=ibOpuV"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className='flex justify-between mb-0 items-center bg-primary-content py-[20px] pl-[20px] pr-[11px] rounded-md'>
                        <div className='flex items-center gap-4'>
                            <img className='w-[52px] h-[52px]' src={youtuve} alt="" />
                            <div>
                                <h1 className='sm:text-xl font-medium text-xl text-info'>Youtube</h1>
                                <p className='text-info leading-none text-sm'>Folow us on youtube</p>
                            </div>
                        </div>
                        <HiChevronRight className='text-[30px] text-info-content' />
                    </div>
                </a>
            </div>
            <FooterPart></FooterPart>
        </div>
    );
};

export default CardBody;