import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <div className="mx-5">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-body-secondary">© 2023 TravelGlobe, Inc</p>
                    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <i class="fa-solid fa-earth-americas" style={{ fontSize: "30px" }}></i>
                    </a>
                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                        <li className="nav-item"><Link to="/blogs" className="nav-link px-2 text-body-secondary">Blogs</Link></li>
                        <li className="nav-item"><Link to="/places" className="nav-link px-2 text-body-secondary">Places</Link></li>
                        <li className="nav-item"><Link to="/signup" className="nav-link px-2 text-body-secondary">Sign Up</Link></li>
                        <li className="nav-item"><Link to="/login" className="nav-link px-2 text-body-secondary">Login</Link></li>
                    </ul>
                </footer>
            </div>
        </div>

    )
}
