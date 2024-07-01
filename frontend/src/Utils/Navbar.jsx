import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-dark d-flex sticky-top justify-content-between align-items-center">
            <div className='d-flex align-items-center'>
                <a className="navbar-brand" href="/"><figure className="mb-0 d-flex align-items-center justify-content-center">
                    {/* <img src={Logo} style={{ maxHeight: '45px', maxWidth: '45px', filter: 'invert(1)' }} alt="RoboSlog" className="img-fluid" /> */}
                    <div className='mx-2 text-white' style={{ fontFamily: 'Manrope', letterSpacing: '2px' }}>HOME STAY</div></figure>
                </a>
            </div>
            <div className="d-flex align-items-center justify-content-between me-2" style={{ minWidth: '250px', position: 'relative', zIndex: "1000", width: "5vw" }} id="navbarSupportedContent">
                <div>
                    <a className="nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '18px' }}>
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </a>
                </div>
                <div>
                    <a className="nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '18px' }}>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </a>
                </div>
                <div>
                    <a className="nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '18px' }}>
                        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                    </a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar