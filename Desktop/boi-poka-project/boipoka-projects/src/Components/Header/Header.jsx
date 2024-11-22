import { NavLink } from "react-router-dom";

const Header = () => {


    return (
        <div className="mx-24">
            <div className="navbar bg-base-100 ">
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
                            <NavLink><li><a>Home</a></li></NavLink>
                            <NavLink><li><a>Listed Books</a></li></NavLink>
                            <NavLink><li><a>Pages to Read</a></li></NavLink>
                        </ul>
                    </div>
                    <a className="text-3xl font-bold">Book Lover</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-base px-1">
                        <NavLink to="/"><li><a>Home</a></li></NavLink>
                        <NavLink to="listedbooks"><li><a>Listed Books</a></li></NavLink>
                        <NavLink><li><a>Pages to Read</a></li></NavLink>

                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    <a className="btn bg-[#2cbf58] text-white">Login</a>
                    <a className="btn bg-[#289bc4] text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;