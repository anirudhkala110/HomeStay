import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../Images/Logo.png'
const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-black d-flex sticky-top justify-content-between align-items-center">
            <div className='d-flex align-items-center'>
                <a className="navbar-brand" href="/"><figure className="mb-0 d-flex align-items-center justify-content-center">
                    <img src={Logo} style={{ maxHeight: '45px', maxWidth: '45px', filter: 'invert(0)' }} alt="Home Stay" className="img-fluid rounded-circle" />
                    <div className='mx-2 text-white' style={{ fontFamily: 'Manrope', letterSpacing: '2px' }}>HOME STAY</div></figure>
                </a>
            </div>
            <div className="d-flex align-items-center justify-content-between me-2" style={{ minWidth: '250px', position: 'relative', zIndex: "1000", width: "5vw" }} id="navbarSupportedContent">
                <div>
                    <a className="nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '18px' }}>
                        <NavLink className="nav-link" to="/">
                            <i class="bi bi-house show750px"></i><p className='less1000px'>Home</p>
                        </NavLink>
                    </a>
                </div>
                <div>
                    <a className="nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '18px' }}>
                        <NavLink className="nav-link" to="/about"><i class="bi bi-person show750px"></i><p className='less1000px'>About</p></NavLink>
                    </a>
                </div>
                <div>
                    <a className="nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '18px' }}>
                        <NavLink className="nav-link" to="/contact"><i class="bi bi-person-lines-fill show750px"></i><p className='less1000px'>Contact Us</p></NavLink>
                    </a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar