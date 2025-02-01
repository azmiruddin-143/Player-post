import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='flex justify-center gap-10 text-xl'>
                <NavLink>Home</NavLink>
                <NavLink to="/coffes">Coffe</NavLink>
                <NavLink to="/addcoffe">Add Coffe</NavLink>
                {/* <NavLink to="/update">Update Coffe</NavLink> */}
            </div>

            <h1 className='text-4xl text-center py-3'>This is Home Page</h1>
        </div>
    );
};

export default Header;