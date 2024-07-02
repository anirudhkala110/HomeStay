import React from 'react'
import logo from '../Images/Logo.png'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='container-fluid d-flex justify-content-between align-items-center text-white p-3' style={{ minHeight: "100px" ,    background:"rgb(2 23 53 / 82%)"}}>
      <div className='d-flex align-items-center justify-content-between'>
        <img src={logo} />
        <h1 className='less1000px'> Home Stay at Nayar Valley</h1>
      </div>
      <div className="d-flex align-items-center justify-content-between me-3" style={{ minWidth: '200px' }} id="navbar">
        <a className="me-2 nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '' }}>
          <NavLink className="nav-link d-flex align-items-center" to="/">
            <i class="bi bi-house me-2"></i>HOME
          </NavLink>
        </a>
        <a className="me-2 nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '' }}>
          <NavLink className="nav-link d-flex align-items-center" to="/about"><i class="bi bi-person me-2"></i>ABOUT</NavLink>
        </a>
        <a className="me-2 nav-item text-decoration-none text-white fw-bold" style={{ fontSize: '' }}>
          <NavLink className="nav-link d-flex align-items-center" to="/contact"><i class="bi bi-person-lines-fill me-2"></i>CONTACT</NavLink>
        </a>
      </div>
    </div>
  )
}

export default Footer