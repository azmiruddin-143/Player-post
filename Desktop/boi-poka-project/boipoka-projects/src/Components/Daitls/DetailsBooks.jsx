import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../Localstorage/Utilitis';
import { Helmet } from "react-helmet";
const DetailsBooks = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId)
    const booddetails = useLoaderData()

    const idchek = booddetails.find(d => d.bookId === id)

    const { bookName, author, image, totalPages, publisher, yearOfPublishing, rating, category, tags, review } = idchek

    const handleReadlist = (id) => {

        addToStoredReadList(id)
    }

    const handleWishlist = (id) => {

        addToStoredReadList(id, "wishlist")
    }


    // const readHandle = () =>{
    //     alert("HI")
    // }

    return (


        <div className='flex justify-center gap-10 my-10'>
            <Helmet>
                <title> Details | Book Laibery</title>
            </Helmet>
            <div>
                <img className="w-[450px] h-[450px]" src={image} alt="" />
            </div>

            <div className='w-6/12'>
                <h1>{bookName}</h1>
                <p>By : {author}</p>
                <hr />
                <h2>{category}</h2>
                <hr />
                <p ><span>Review</span>{review}</p>
                <div className="flex gap-8 items-center my-4">
                    <span>Tag</span>
                    {
                        tags.map(tamap => <h2 className="bg-stone-100 py-1 px-4 rounded-md text-green-500" >{tamap}</h2>)
                    }
                </div>
                <hr />
                <h1>Number of page: {totalPages}</h1>
                <h1>Punlisher: {publisher}</h1>
                <h1>year of Publishing: {yearOfPublishing}</h1>
                <h1>Rating: {rating}</h1>

                <div className='flex gap-5 my-4'>
                    <button onClick={() => handleReadlist(bookId)} className='btn border rounded-md'>Read </button>
                    <button onClick={() => handleWishlist(bookId)} className='btn  bg-[#289bc4] rounded-md'>Wishlist </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsBooks;