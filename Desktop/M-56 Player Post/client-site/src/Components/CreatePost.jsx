import React from 'react';
import Swal from 'sweetalert2'
const CreatePost = () => {

    const postCreate = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const country = from.country.value
        const clubname = from.clubname.value
        const position = from.position.value
        const image = from.image.value
        const price = from.price.value
        const postObj = { name, country, clubname, position, image, price }
        console.log(postObj);

        fetch("http://localhost:5000/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postObj),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId ) {
                    Swal.fire({
                        title: "Post SuccessFull",
                        text: "Apnar Post Kora Complete oice",
                        icon: "success"
                      });

                      from.reset()

                    
                }
            })

    }

    return (
        <div>
            <div className="my-20">
                <div className=" flex-col lg:flex-row-reverse">
                    <div className="bg-base-100 w-full max-w-2xl mx-auto  shrink-0 shadow-2xl">
                        <form onSubmit={postCreate} className="card-body">
                            <div className="flex gap-10 justify-center">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="Full name" className="input input-bordered" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Country</span>
                                    </label>
                                    <input type="text" name='country' placeholder="Country name" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex gap-10 justify-center">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Club</span>
                                    </label>
                                    <input type="text" name='clubname' placeholder="club name" className="input input-bordered" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Position</span>
                                    </label>
                                    <input type="text" name='position' placeholder="position" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex gap-10 justify-center">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" name='image' placeholder="Image url" className="input input-bordered" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="form-control mx-16 mt-6">
                                <button className="btn btn-primary">Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;