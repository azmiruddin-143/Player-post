import React from 'react';
import Profile from '../components/profile';
import CardBody from '../components/cardBody';

const MainLaout = () => {
    return (
        <div className='max-w-md mx-auto sm:border-r sm:border-b sm:border-l sm:border-primary-content'>
            <Profile></Profile>
            <CardBody></CardBody>
        </div>
    );
};

export default MainLaout;