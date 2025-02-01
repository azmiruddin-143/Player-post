import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeCard from './CoffeCard';


const Coffes = () => {
    const coffeLoader = useLoaderData()
    const [userLoad,setUserLoad] = useState(coffeLoader)
    return (
        <div>
            <h1>Coffes{userLoad.length}</h1>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    userLoad.map(cof => <CoffeCard key={cof._id} cof={cof} setUserLoad ={setUserLoad} userLoad = {userLoad}></CoffeCard>)
                }
            </div>
        </div>
    );
};

export default Coffes;