import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3001/api/v1/auth/login`, { email, password });
            if (res.data.success) {
                alert("Logged In Successfully");
                navigate("/");
            }
            else {
                alert("Something went wrong");
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Header />
            <div className='form-styles'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" name="password" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button><br></br><br></br>
                    <Link to="/forgotpassword">Forgot Password</Link>
                </form>
            </div>
            <Footer />
        </div>
    )
}
