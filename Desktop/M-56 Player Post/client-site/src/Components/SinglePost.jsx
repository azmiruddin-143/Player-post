import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SinglePost = ({ allPost, userLoad, SetUserLoad }) => {

    const { name, country, clubname, position, image, price, _id } = allPost

    const diletButton = (_id) => {
        console.log("Card Dilet", _id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`http://localhost:5000/players/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                        const reming = userLoad.filter(dilet => dilet._id !== _id)
                        SetUserLoad(reming)

                    })

            }
        });


    }




    return (
        <div className='my-10'>
            <div className=" card-compact bg-base-100 w-96 shadow-xl">

                <img className='w-full h-96'
                    src={image}
                />

                <div className="py-3 px-3">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex justify-between'>
                        <h2 className="">Country : {country}</h2>
                        <h2 className="">Club : {clubname}</h2>
                    </div>

                    <div className='flex justify-between'>
                        <h2 className="">Position : {position}</h2>
                        <h2 className="">Price : {price} $</h2>
                    </div>

                    <div className="card-actions justify-center my-8">
                        <button className="btn btn-primary">Buy Now</button>
                        <Link to={`/update/${_id}`} ><button className="btn btn-primary">Update</button></Link>
                        <Link><button onClick={() => diletButton(_id)} className="btn btn-error">Dilet</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;