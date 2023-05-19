import React from 'react'

import '../styles/home.css'

// const user_id = 10

const Home = () => {
    return (
        <>
            <h2 className='text-center'>Bienvenido de Nuevo</h2>
            <div className='carrusel-color'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./img/subaru.jpg" className="d-block mx-auto img-carrusel"  alt="Subaru" />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/charger.jpg" className="d-block mx-auto img-carrusel" alt="Charger" />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/lambo.png" className="d-block mx-auto img-carrusel" alt="Lamborghini" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home