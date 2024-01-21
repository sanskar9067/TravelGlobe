import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function List() {

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/addcart')
            .then(carts => setCarts(carts.data))
            .catch(err => console.log(err));
    })

    async function deletePlace(name) {
        const res = await axios.post('http://localhost:3001/api/v1/auth/deleteitem', { name });
        if (res.data.success) {
            alert("Place removd from travel list");
        }
        else {
            alert("Something went wrong");
        }
    }

    return (
        <div>
            <Header />
            <div>
                <table className='table'>
                    <thead>
                        <tr>

                            <th>Your List</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map(carts => {
                                return (
                                    <tr key={carts.id}>
                                        <td>{carts.name}</td>
                                        <td><button className='btn btn-danger' onClick={() => deletePlace(carts.name)}>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Link className='btn btn-primary' to="">Pay Now</Link>
            </div>
            <Footer />
        </div>
    )
}
