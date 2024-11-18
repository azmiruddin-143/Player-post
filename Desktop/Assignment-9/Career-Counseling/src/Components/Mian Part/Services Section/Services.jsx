import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceData = useLoaderData()
    return (
        <div className='to-base-300 py-10'>
            <h1 className='text-5xl text-center text-black font-semibold'>Service Us</h1>
            <div className='grid grid-cols-4 place-items-center gap-y-6 mx-20 my-10'>
                {
                  serviceData.map(service => <ServiceCard key={service.id}  service ={service} ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;