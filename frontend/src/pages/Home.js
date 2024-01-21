import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <Header />
            <div className="container-fluid my-5">
                <div className="p-5 text-center bg-body-tertiary rounded-3">
                    <i class="fa-solid fa-earth-americas mb-5" style={{ fontSize: "100px" }}></i>
                    <h1 className="text-body-emphasis">TravelGlobe</h1>
                    <p className="col-lg-8 mx-auto fs-5 text-muted">
                        "Explore the world, embrace the journey - TravelGlobe, your global guide."
                    </p>
                </div>
            </div>

            <div className='container my-4'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://media.istockphoto.com/id/1418328391/photo/the-beauty-of-taj-mahal.webp?b=1&s=170667a&w=0&k=20&c=aNzR3lu44US7UXrb1ZzbWFbrG-TGhgtRVSbG2qGFo0k=" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://img.veenaworld.com/wp-content/uploads/2023/05/10-Travel-Places-Where-Nature-Takes-Centerstage.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://hips.hearstapps.com/hmg-prod/images/great-ocean-road-174028267-1494616481.jpg?crop=0.888888888888889xw:1xh;center,top&resize=768:*" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
