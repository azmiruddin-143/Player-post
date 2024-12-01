import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { accountAuth } from './AuthProvider';

const CreateAccount = () => {
    const { createUser } = useContext(accountAuth)

    const createAccountForm = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value
        console.log(name, email, password);

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                const metaTime = result?.user?.metadata?.creationTime
                const createObj = { name, email,metaTime }
                
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(createObj),
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            })
            .catch((error) => {
                console.log(error.message);
            })


    }
    return (
        <div>
            <div className="my-14">
                <div className=" flex-col lg:flex-row-reverse">
                    <div className=" bg-base-100 w-full mx-auto max-w-xl shrink-0 shadow-2xl">
                        <form onSubmit={createAccountForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Create</button>
                            </div>
                            <span>all ready login ? <Link to={"/login"} className='text-[#20b7d6]'>Login</Link></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;