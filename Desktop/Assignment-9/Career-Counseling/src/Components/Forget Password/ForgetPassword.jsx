import React, { useContext } from 'react';
import { authContext } from '../Auth Provider setup/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const ForgetPassword = () => {
    const { passwordForget } = useContext(authContext)


    const forgetPassword = (event) => {
        event.preventDefault()
        const email = event.target.email.value

       
        passwordForget(email)
            .then(() => {
                console.log("email.chek");
                event.target.reset()
                window.open("https://mail.google.com/", "_blank");
            })
            .catch(() => {
                console.log("errre");
            })
    }
    return (
        <div>
            <Helmet>
                <title>forget password</title>
            </Helmet>
            <div className="my-10 ">
                <div className="hero-content flex-col mx-auto lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <form onSubmit={forgetPassword} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#3c4483] text-white"> Reset password </button>
                            </div>
                            <h1 className='text-lg text-center'>New password setup ? <Link to="/login" className='text-[#e09d15]'>Login</Link></h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;