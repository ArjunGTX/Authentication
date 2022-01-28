import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";

const SignUp = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
    });
    const [success,setSuccess] = useState(false);

    // const changeHandler = (inputType, value) => {
    //     setUserData((prevUserData) => ({ ...prevUserData , inputType: value}));
    // };

    return (
        <div className="card-container">
            <h2>Sign Up</h2>
            <form action="localhost:3030/signup" method="post">
                <input
                    type="text"
                    className="input-txt"
                    placeholder="First Name"
                    value={userData.firstName}
                    onChange={(e) => setUserData((state) => {
                        return {
                            ...state,
                            firstName : e.target.value
                        }
                    })}
                />
                <input
                    type="text"
                    className="input-txt"
                    placeholder="Last Name"
                    value={userData.lastName}
                    onChange={(e) => setUserData((state) => {
                        return {
                            ...state,
                            lastName : e.target.value
                        }
                    })}
                />
                <input
                    type="password"
                    className="input-txt"
                    placeholder="Password"
                    value={userData.password}
                    onChange={(e) => setUserData((state) => {
                        return {
                            ...state,
                            password : e.target.value
                        }
                    })}
                />
                <input
                    type="mail"
                    className="input-txt"
                    placeholder="Email"
                    value={userData.email}
                    onChange={(e) => setUserData((state) => {
                        return {
                            ...state,
                            email : e.target.value
                        }
                    })}
                />
    
                <div className="btn-container">
                   <button onClick={() => {
                       axios.post('http://localhost:3030/signup', {
                           firstname: userData.firstName,
                           lastname: userData.lastName,
                           password: userData.password,
                           email: userData.email
                       })
                       .then((response) => {
                           console.log(response.data);
                           setSuccess(true);
                       })
                   }}>Submit</button>
                </div>
                {
                    success && <h2>Registration SuccessFull</h2>
                }
            </form>
        </div>
    );
};

export default SignUp;
