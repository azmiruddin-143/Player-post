import React, { useContext,  useState } from 'react';
import { authContext } from '../Auth Provider setup/AuthProvider';
import { IoEyeOff, IoEye } from "react-icons/io5";
import googleImage from "../../assets/google-icon.png"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const Register = () => {
    const { registerUser, myProfileUpdate,googleRegister } = useContext(authContext)
    const [show, setHide] = useState(false)

    const eyeIconHandler = () => {
        setHide(!show)
    }
    const registerForm = (event) => {

        event.preventDefault()
        const trams = event.target.trams.checked
        const name = event.target.name.value
        const photourl = event.target.photourl.value
        const email = event.target.email.value
        const password = event.target.password.value

        if(!/[A-Z]/.test(password)){
            toast.error("Must have an Uppercase letter in the password ", {
                autoClose: 3000, // 3 seconds

            });
            return
        }
        if(!/[a-z]/.test(password)){
            toast.error("Must have a Lowercase letter in the password  ", {
                autoClose: 3000, // 3 seconds

            });
            return 
        }
       
        if (password.length < 6) {
            toast.error("Password must be at least 5 characters", {
                autoClose: 3000, // 3 seconds

            });
            return
        }

       
        if(!trams){
            toast.error("terms not checked ", {
                autoClose: 3000, // 3 seconds

            });
            return
        }
        // register setup ///

        registerUser(email, password)
            .then((result) => {
                const user = result.user
                console.log(user);

                // update Profile//
                myProfileUpdate({ displayName: name, photoURL: photourl })
                    .then(() => {
                        toast.success("Registration successful!", {
                            autoClose: 3000,
                        });
                    })
                    .catch((error) => {
                        toast.error(`Update failed: ${error.message}`, {
                            autoClose: 3000,
                        });
                    })
               })


            .catch((error) => {
                toast.error(`Registration failed: ${error.message}`, {
                    autoClose: 3000,
                });
            })
    }

    return (
        <div>

            <div className="my-10 ">
                <div className="hero-content flex-col mx-auto lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <form onSubmit={registerForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photourl</span>
                                </label>
                                <input type="text" name='photourl' placeholder="Enter your photourl" className="input input-bordered" required />
                            </div>
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
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}

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
                                <button className="btn bg-[#3c4483] text-white">Register</button>
                            </div>

                            <div className="divider">OR</div>
                            <div onClick={googleRegister} className='mx-auto'>
                                <img className='w-[30px]' src={googleImage} alt="" />
                            </div>
                            <h1 className='text-lg text-center'>Already a user ? <Link to="/login" className='text-[#e09d15]'>Login</Link></h1>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;