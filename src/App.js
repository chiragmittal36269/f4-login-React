import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login.js";
import Profile from "./Components/Profile";

const App = () => {
    let user = localStorage.getItem("user");
    return (
        <div>
            {/* <Login />
            <Profile /> */}
            <Routes>
                {/* <Route path="/" element={<Login />} />
                <Route path="/profile" element={<Profile />} /> */}
                return {user} ? <Route path="/" element={<Login />} /> :
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
};

export default App;
