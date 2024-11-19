import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { authContext } from '../Auth Provider setup/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, userLogout } = useContext(authContext)
    const navigate = useNavigate()
    
    const userLogoutHandler = () =>{
        userLogout()
        .then(() =>{
            toast.success("Logout successful!", {
                autoClose: 3000,
            });
            navigate("/")
            return
        })
        .catch((error) =>{
            console.log(error.message);
        })
    }
    return (
        <div>
            {/* <div className='flex justify-between 2xl:px-28 xl:px-20 lg:px-14  items-center py-5 bg-base-200'>
                <div>
                    <h1 className='text-4xl text-[#3c4483] font-bold'>Career <span className='text-[#e09d15] relative right-2 font-bold'>Counseling</span></h1>
                </div>
                <div>
                    <ul className='text-lg text-black mr-32 flex gap-5'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/service">Service</NavLink>
                        <NavLink to="/cource">Cource</NavLink>
                        <NavLink to="/myprofile">MyProfile</NavLink>
                    </ul>
                </div>
                <div>
                    <h1>{user?.email}</h1>
                    <button className='bg-[#e09d15] text-white font-semibold text-lg py-2 px-6 rounded-lg'>Login</button>
                </div>
            </div> */}


            {/* // daiu/////////////////// */}

            <div className='mx-24'>

                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-4xl text-[#3c4483] font-bold'>Career <span className='text-[#e09d15] relative right-2 font-bold'>Counseling</span></h1>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className='text-lg text-black  flex gap-5'>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/service">Service</NavLink>
                            <NavLink to="/cource">Cource</NavLink>
                            <NavLink to="/myprofile">MyProfile</NavLink>

                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='flex gap-4 items-center'>
                            <div className="relative group w-[70px] h-[70px]">
                                {user == null ? "" : (
                                    <img
                                        className="w-full h-full object-cover rounded-full"
                                        src={user?.photoURL}
                                        alt=""
                                    />
                                )}
                                <span
                                    className="absolute inset-0 bg-opacity-70  text-black top-5 -left-44  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    {user?.displayName}
                                </span>
                            </div>
                            {
                                user ? <button onClick={userLogoutHandler} className='bg-[#e09d15] text-white font-semibold text-lg py-2 px-6 rounded-lg'>Logout</button>:
                                    <Link to="/login"><button className='bg-[#e09d15] text-white font-semibold text-lg py-2 px-6 rounded-lg'>Login</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Header;