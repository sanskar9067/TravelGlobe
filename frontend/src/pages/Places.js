import React, { useEffect, useState } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import axios from 'axios';


export default function Places() {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getplaces')
            .then(response => setCountry(response.data))
            .catch(err => console.log(err));
    }, []);

    async function postCart(name, desc, hp, fp) {
        try {
            const res = await axios.post('http://localhost:3001/api/v1/auth/addcart', { name, desc, hp, fp });
            if (res.data.success) {
                alert("Added to Travel List");
            } else {
                alert("Something went wrong");
            }
        } catch (error) {
            console.error("Error adding to cart:", error);
            alert("Something went wrong");
        }
    }

    return (
        <div>
            <Header />
            <div className='container my-5'>
                <div>
                    <h1 style={{ textAlign: 'center' }}>Featured Places</h1>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Hotel Prices</th>
                                <th>Flight Prices</th>
                                <th>Add to Travel List</th>
                            </tr>
                        </thead>
                        <tbody>
                            {country.map(country => (
                                <tr key={country.id}>
                                    <td>{country.name}</td>
                                    <td>{country.description}</td>
                                    <td>{country.hotel_prices}</td>
                                    <td>{country.flight_prices}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => postCart(country.name, country.description, country.hotel_prices, country.flight_prices)}>+</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}
