import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from './SinglePost';

const AllPost = () => {
    const allPostLoader = useLoaderData()
    const [userLoad,SetUserLoad] = useState(allPostLoader)
    return (
        <div>
            <h1 className='font-bold text-2xl'>Posts count : {userLoad.length}</h1>
            <div className='grid grid-cols-4 place-items-center'>
                {userLoad.map(allPost => <SinglePost key={allPost._id} userLoad={userLoad} SetUserLoad ={SetUserLoad} allPost ={allPost} ></SinglePost>)}
            </div>
        </div>
    );
};

export default AllPost;