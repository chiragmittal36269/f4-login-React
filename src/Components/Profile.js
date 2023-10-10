import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState("");

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (user) {
            fetch(`https://dummyjson.com/users/${user.id}`)
                .then((res) => res.json())
                .then((data) => {
                    localStorage.setItem(
                        "userDetails",
                        localStorage.getItem(JSON.stringify(data))
                    );
                    setUserDetails(data);
                });
        }
    });

    function handleLogout() {
        localStorage.removeItem("userDetails");
        localStorage.removeItem("user");
        console.log("logout");
        navigate("/");
    }

    return (
        <div>
            <div className="main-container">
                <div className="container">
                    <div className="profile">
                        <h2 className="head10">Profile Page</h2>

                        <div className="element">
                            <h4 className="para10">Name:</h4>
                            <h4 className="para20">
                                {userDetails.firstName +
                                    " " +
                                    userDetails.lastName}
                            </h4>
                        </div>

                        <div className="element">
                            <h4 className="para10">Username:</h4>
                            <h4 className="para20">{userDetails.username}</h4>
                        </div>

                        <div className="element">
                            <h4 className="para10">Email:</h4>
                            <h4 className="para20">{userDetails.email}</h4>
                        </div>

                        <div className="element">
                            <h4 className="para10">Gender:</h4>
                            <h4 className="para20">{userDetails.gender}</h4>
                        </div>

                        <div className="element">
                            <h4 className="para10">IP Address:</h4>
                            <h4 className="para20">{userDetails.ip}</h4>
                        </div>

                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
