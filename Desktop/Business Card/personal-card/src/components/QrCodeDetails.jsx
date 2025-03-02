import React from 'react';
import profileImage from '../../src/assets/nojir-profile.jpg'
import qrcodeimage from '../../src/assets/qrcode-image.jpg'
import FullName from '../shared/FullName';
import SortBio from '../shared/SortBio';
const QrCodeDetails = () => {
    return (
        <div className='max-w-md mx-auto'>
            <img className='w-32 mx-auto rounded-full' src={profileImage} alt="" />
            <h1 className='text-[36px] font-semibold pt-[24px] text-info-content text-center'><FullName></FullName></h1>
             <SortBio></SortBio>
            <img className='w-52 mx-auto mt-8 rounded-2xl' src={qrcodeimage} alt="" />
        </div>
    );
};

export default QrCodeDetails;