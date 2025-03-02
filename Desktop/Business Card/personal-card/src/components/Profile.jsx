import React from 'react';
import profileImage from '../../src/assets/nojir-profile.jpg'
import banner from '../../src/assets/nojir-banner.jpg'
const Profile = () => {
    return (
     
        <div  className='relative'>
            <img className='h-52 w-full object-cover ' src={banner} alt="" />
            <img className='w-32 absolute left-1/2 -translate-x-1/2 -bottom-20 rounded-full' src={profileImage} alt="" />
        </div>

    );
};

export default Profile;