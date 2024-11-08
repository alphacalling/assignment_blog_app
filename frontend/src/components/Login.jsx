import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setLoginUser({
            ...loginUser,
            [name]: value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios
            .post("http://localhost:8080/api/v1/login", loginUser)
            .then((response) => {
                toast.success("Login successful");
                localStorage.setItem("isLoggedIn", "true");
                setLoginUser({ email: "", password: "" });
                navigate("/");
            })
            .catch((err) => {
                console.error("Failed to login", err);
                toast.error("Login failed");
            });
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Login
                </h2>

                <label htmlFor="email" className="text-lg font-semibold text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter your Email"
                    onChange={handleChange}
                    value={loginUser.email}
                    className="w-full text-lg bg-slate-100 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <label
                    htmlFor="password"
                    className="text-lg font-semibold text-gray-700"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="Enter your Password"
                    onChange={handleChange}
                    value={loginUser.password}
                    className="w-full text-lg bg-slate-100 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="submit"
                    className="w-full py-2 mt-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
                >
                    Login
                </button>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Not a user?
                        <button
                            onClick={() => navigate('/signup')}
                            className="text-blue-500 hover:underline"
                        >
                            <span className="mx-2">Click here </span>
                        </button>
                        to sign up.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
