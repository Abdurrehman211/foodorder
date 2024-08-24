import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./SignUp.css";
import axios from "axios";

function SignUp() {
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleSignupSubmit = () => {
        axios.post('http://localhost:3000/signup', {
            Firstname: firstname,
            Lastname: lastname,
            Email: email,
            Password: password,
            ConfirmPassword: confirmPassword
        })
        .then((response) => {
            console.log(response);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registration Successful",
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/login");
        })
        .catch((error) => {
            alert(`Error: ${error.response ? error.response.data.message : error.message}`);
            console.error(error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Registration Failed",
                text: error.response?.data?.error || "Something went wrong",
                showConfirmButton: true
            });
        });
    };
    
    const handlePassword = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            handleSignupSubmit();
        } else {
            Swal.fire({
                title: "Oops!",
                text: "Passwords do not match!",
                icon: "error"
            });
        }
    };

    return (
        <div className="block">
            <div className="login2" id="login2">
                <form className="form1" onSubmit={handlePassword}>
                    <p className="title1">Register</p>
                    <p className="message1">Signup now and get full access to our app.</p>
                    <div className="flex1">
                        <label>
                            <input
                                className="input1"
                                type="text"
                                placeholder=""
                                required
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                            <span>Firstname</span>
                        </label>
                        <label>
                            <input
                                className="input1"
                                type="text"
                                placeholder=""
                                required
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                            <span>Lastname</span>
                        </label>
                    </div>
                    <label>
                        <input
                            className="input1"
                            type="email"
                            placeholder=""
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span>Email</span>
                    </label>
                    <label>
                        <input
                            className="input1"
                            type="password"
                            placeholder=""
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span>Password</span>
                    </label>
                    <label>
                        <input
                            className="input1"
                            type="password"
                            placeholder=""
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <span>Confirm password</span>
                    </label>
                    <button className="submit1" type="submit">Submit</button>
                    <p className="signin1">Already have an account? <a href="#" onClick={() => navigate('/login')}>Signin</a></p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
