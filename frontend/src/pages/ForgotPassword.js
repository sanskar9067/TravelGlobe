import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const res = await axios.post(`http://localhost:3001/api/v1/auth/forgotpassword`, { email, password });
            if (res.data.success) {
                alert("Password Changed");
                navigate("/login");
            } else {
                alert("Something Went Wrong");
            }
        } catch (err) {
            console.error(err);
            alert("Something Went Wrong. Please try again later.");
        }
    };


    return (
        <div>
            <Header />
            <div className='form-styles'>
                <form onSubmit={handleSubmit}>
                    <h1>Forgot Password</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" name="password" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
            <Footer />
        </div>
    )
}
