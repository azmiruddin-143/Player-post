import React, { useContext, useState } from 'react';
import { authContext } from '../Auth Provider setup/AuthProvider';
import { IoEyeOff, IoEye } from "react-icons/io5";
import googleImage from "../../assets/google-icon.png"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const {loginUser,googleRegister} = useContext(authContext)
  const location = useLocation()
  const navigate = useNavigate()
    const [show, setHide] = useState(false)

    const eyeIconHandler = () => {
        setHide(!show)
    }
    const loginForm = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const trams = event.target.trams.checked
        // register setup ///
        if(!trams){
            toast.error("terms not checked ", {
                autoClose: 3000, // 3 seconds

            });
            return
        }

        loginUser(email, password)
            .then((result) => {
                const user = result.user
                console.log(user);
                toast.success("Login successful!", {
                    autoClose: 3000,
                });

                navigate(location?.state ? location.state : "/")
                event.target.reset(); 
            })

            .catch((error) => {
                toast.error(`login failed: ${error.message}`, {
                    autoClose: 3000,
                });
            })
    }


    const googleLoginHandler = ()=>{
        googleRegister()
            .then((result) => {
                console.log(result.user);
                toast.success("Login successful!", {
                    autoClose: 3000,
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                console.log(error.message);
                toast.error(`login failed: ${error.message}`, {
                    autoClose: 3000,
                });
            })
     }


    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="my-10 ">
                <div className="hero-content flex-col mx-auto lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <form onSubmit={loginForm} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your name email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={`${show ? "text" : "password"}`} name='password' placeholder=" Enter your name password" className="input input-bordered" required />
                                <label className="label">
                                  
                                    <Link to="/forgetpassword" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>

                                <div onClick={eyeIconHandler}>
                                    {
                                        !show ? <IoEyeOff className='absolute right-6 top-[50px]' size={20} /> :
                                            <IoEye className='absolute right-6 top-[50px]' size={20} />
                                    }

                                </div>
                                <div className="form-control mt-3">
                                    <label className="cursor-pointer justify-start gap-4 label">
                                        <input type="checkbox" name='trams' className="checkbox checkbox-warning" />
                                        <span className="label-text">Remember me</span>

                                    </label>
                                </div>


                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#3c4483] text-white">Login</button>
                            </div>

                            <div className="divider">OR</div>
                            <div onClick={googleLoginHandler} className='mx-auto'>
                                <img className='w-[30px]' src={googleImage} alt="" />
                            </div>
                            <h1 className='text-lg text-center'>Need an account ? <Link to="/register" className='text-[#e09d15]'>Register</Link></h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;