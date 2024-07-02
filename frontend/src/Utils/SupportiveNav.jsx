import React from 'react'
import './Navbar.css'

const SupportiveNav = () => {
    return (
        <nav class="navbar sticky-top navbar-light supportiveNavBG  py-1">
            <div class="container-fluid">
                <div className='less450px'>
                    <a class="navbar-brand text-white " href="/" style={{ fontSize: "16px" }}>Home Stay</a>
                </div>
                <div className='less450px'>
                    <a class="navbar-brand btn btnStylingSupportiveNav rounded-0" href="/" style={{ fontSize: '14px' }}><i className='me-1 bi bi-facebook'></i> Facebook</a>
                    <a class="navbar-brand btn btnStylingSupportiveNav rounded-0" href="/" style={{ fontSize: '14px' }}><i className='me-1 bi bi-instagram'></i>Instagram</a>
                    <a class="navbar-brand btn btnStylingSupportiveNav rounded-0" href="/" style={{ fontSize: '14px' }}><i className='me-1 bi bi-twitter'></i> Twitter</a>
                </div>
                <div className='show450px'>
                    <center >
                        <a class="navbar-brand text-white" href="/" style={{ fontSize: "16px" }}>Home Stay</a>
                    </center>
                    <a class="navbar-brand btn btnStylingSupportiveNav rounded-0" href="/" style={{ fontSize: '14px' }}><i className='me-1 bi bi-facebook'></i> Facebook</a>
                    <a class="navbar-brand btn btnStylingSupportiveNav rounded-0" href="/" style={{ fontSize: '14px' }}><i className='me-1 bi bi-instagram'></i>Instagram</a>
                    <a class="navbar-brand btn btnStylingSupportiveNav rounded-0" href="/" style={{ fontSize: '14px' }}><i className='me-1 bi bi-twitter'></i> Twitter</a>
                </div>

            </div>
        </nav>
    )
}

export default SupportiveNav