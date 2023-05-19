import React from 'react'

import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand my-brand" to={"/"}>CarZone</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">CarZone</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink className='nav-link active' aria-current='page' to="/">Home</NavLink>
                                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Acciones
                                    </NavLink>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><NavLink className='dropdown-item' to={"/register"}>Registrar Auto</NavLink></li>
                                        <li><NavLink className='dropdown-item' to={"/inventario"}>Ver Inventario</NavLink></li>
                                        <li><NavLink className='dropdown-item' to={'/servicio'}>Ver Citas de Servicio</NavLink></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' to={'/about'}>Sobre Nosotros</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


            {/* Navbar aqui
            <ul>
                <li><NavLink to={"/register"}>Registrar Auto</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul> */}
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default Navbar