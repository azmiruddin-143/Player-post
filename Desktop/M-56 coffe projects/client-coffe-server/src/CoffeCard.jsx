import React from 'react';
import { Link } from 'react-router-dom';

const CoffeCard = ({ cof,setUserLoad,userLoad }) => {
    const { _id, name, chef, taste, photo } = cof;


    const diletButton = (_id) =>{
        console.log("dilet confram",_id);
        fetch(`http://localhost:5000/coffes/${_id}`,{
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
             console.log(data);
             if (data.deletedCount > 0) {
                console.log("Successfully deleted one document.");

                const diletItem = userLoad.filter(u => u._id !== _id)
                setUserLoad(diletItem)
              }
        })
    }

    return (

        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="coffee" />
            </figure>
            <div className="flex w-full m-4 items-center justify-between">
                <div>
                    <p>Name: {name}</p>
                    <p>Chef: {chef}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end join join-vertical">
                    <button className="btn join-item">View</button>
                    <Link to={`/update/${_id}`} >
                        <button className="btn join-item">Edit</button>
                    </Link>
                    <button
                      onClick={() => diletButton(_id)}
                        className="btn join-item bg-red-500">X</button>
                </div>
            </div>
        </div>

    );
};

export default CoffeCard;