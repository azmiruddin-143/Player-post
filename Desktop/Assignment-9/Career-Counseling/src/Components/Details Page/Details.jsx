import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const [feedback, setFeedback] = useState("");
    const [comments, setComments] = useState([]);
    
    const handleFeedback = () => {
        if (feedback.trim()) {
            // Get the current time when the feedback is added
            const currentTime = new Date().toLocaleTimeString();
            
            // Add the feedback with the time
            setComments([...comments, { text: feedback, time: currentTime }]);
            setFeedback(""); // Clear textarea
        }
    };

    const detailsData = useLoaderData()
    const { id, image, serviceName, category, pricing, counselor } = detailsData;

    return (
        <div className='flex justify-center my-10 gap-12'>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <div>
                <img className='h-[300px] w-[500px]' src={image} alt="" />
                <div className='space-y-2'>
                    <h1 className='font-semibold text-3xl'>{serviceName}</h1>
                    <h1 className='text-lg'>Category : {category}</h1>
                    <h1 className='text-lg'>Counselor : {counselor}</h1>
                    <h1 className='text-lg'>Price : {pricing}</h1>

                    <textarea
                        rows="4"
                        cols="50"
                        placeholder="Enter your text here"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="border border-gray-300 focus:border-blue-500 focus:outline-none p-2 transition duration-300"
                    ></textarea> <br />

                    <button onClick={handleFeedback} className='bg-[#3c4483] rounded-md text-white py-2 px-6'>Feedback</button>
                </div>
            </div>

            <div className='w-[30%]'>
                <h1 className='text-3xl'>Comments / {comments.length} </h1>
                <div>
                    {comments.map((comment, index) => (
                        <div key={index}>
                            <p className="bg-base-200 px-2  rounded-md my-3 py-2">{comment.text}</p>
                            <h1 className="text-sm text-gray-500">Time: {comment.time}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Details;
