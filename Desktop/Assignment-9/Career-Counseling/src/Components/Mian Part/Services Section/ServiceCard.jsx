import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { id, image, serviceName, category, pricing, counselor } = service
    return (
        <div>
            <div style={{
                backgroundImage: `url(${image})`, backgroundColor: "#3c448384",
                backgroundBlendMode: "multiply"
            }} className="bg-cover bg-no-repeat bg-center w-[400px] h-96 flex justify-start items-end rounded-lg  ">
                <div className='py-3 px-3 space-y-2'>
                    <h1 className='text-2xl text-white font-bold'>{serviceName}</h1>
                    <h1 className='text-white font-bold'>Category : {category}</h1>
                    <h1 className='text-white font-bold'>Counselor : {counselor}</h1>
                    <h1 className='text-white font-bold'>Price : {pricing}</h1>
                    <NavLink to={`/details/${id}`}><button className='bg-[#e09d15] py-1 rounded-md px-4'>Learn More</button></NavLink>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;