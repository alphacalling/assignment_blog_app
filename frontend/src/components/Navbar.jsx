import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    // const blogId = localStorage.getItem("selectedBlogId");

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    return (
        <nav className="bg-gradient-to-r from-cyan-500 to-teal-500 py-4">
            <ul className="flex justify-around items-center text-xl font-sans font-semibold">
                <Link to="/" aria-label="Home">
                    <li className="text-white hover:text-gray-200">Home</li>
                </Link>

                {isLoggedIn ? (
                    <Fragment>
                        <button
                            onClick={handleLogout}
                            className="bg-white text-cyan-700 hover:bg-cyan-600 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Logout
                        </button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Link to="/login" aria-label="Log In">
                            <button className="bg-white text-cyan-700 hover:bg-cyan-600 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Log In
                            </button>
                        </Link>
                    </Fragment>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
