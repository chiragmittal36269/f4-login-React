import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleLogin() {
        // console.log(email, password);

        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();

            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(data));
                console.log("login");
                navigate("profile");
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError("something went wrong, please try after 2 minutes");
        }
    }

    return (
        <div>
            <div className="main-container">
                <div className="container">
                    <p>{error}</p>
                    <div className="login">
                        <div>
                            <p className="para1">
                                Welcome back! <span>👋</span>
                            </p>

                            <h3 className="head1">Login to your Account</h3>
                        </div>

                        <div className="email">
                            <label>Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className=""
                                placeholder="enter your email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="password">
                            <label>Your Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className=""
                                placeholder="enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button onClick={handleLogin}>Login</button>

                        <a href="./Login.js" className="link-1">
                            Forgot Your Password?
                        </a>
                    </div>
                    <p className="notFound">
                        Don't have an account?
                        <a href="./Login.js" className="link-2">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
