import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../Images/Logo.png'
const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-black d-flex fixed-top justify-content-between align-items-center">
            <div className='d-flex align-items-center'>
                <a className="navbar-brand" href="/"><figure className="mb-0 d-flex align-items-center justify-content-center">
                    <img src={Logo} style={{ maxHeight: '45px', maxWidth: '45px', filter: 'invert(0)' }} alt="Home Stay" className="img-fluid rounded-circle" />
                    <div className='mx-2 text-white' style={{ fontFamily: 'Manrope', letterSpacing: '2px' }}>HOME STAY</div></figure>
                </a>
            </div>
            <div className='less450px'>
                <div className="d-flex align-items-center justify-content-between me-2" style={{ minWidth: '350px', position: 'relative', zIndex: "1000", width: "5vw" }} id="navbarSupportedContent">
                    <div>
                        <a className="nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '18px' }}>
                            <NavLink className="nav-link d-flex align-items-center justify-content-between" to="/">
                                <i class="bi bi-house  me-2"></i><div className='p-0'>Home</div>
                            </NavLink>
                        </a>
                    </div>
                    <div>
                        <a className="nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '18px' }}>
                            <NavLink className="nav-link d-flex align-items-center justify-content-between" to="/about"><i class="bi bi-person me-2"></i><div className='p-0'>About</div></NavLink>
                        </a>
                    </div>
                    <div>
                        <a className="nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '18px' }}>
                            <NavLink className="nav-link d-flex align-items-center justify-content-between" to="/contact"><i class="bi bi-person-lines-fill me-2 "></i><div className='p-0'>Contact Us</div></NavLink>
                        </a>
                    </div>

                </div>
            </div>
            <div className='show450px'>
                <div className="d-flex align-items-center justify-content-between me-3" style={{ minWidth: '100px', position: 'relative', zIndex: "1000", width: "5vw" }} id="navbarSupportedContent">
                    <div>
                        <a className="nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '18px' }}>
                            <NavLink className="nav-link" to="/">
                                <i class="bi bi-house"></i>
                            </NavLink>
                        </a>
                    </div>
                    <div>
                        <a className="nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '18px' }}>
                            <NavLink className="nav-link" to="/about"><i class="bi bi-person"></i></NavLink>
                        </a>
                    </div>
                    <div>
                        <a className="nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '18px' }}>
                            <NavLink className="nav-link" to="/contact"><i class="bi bi-person-lines-fill"></i></NavLink>
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar