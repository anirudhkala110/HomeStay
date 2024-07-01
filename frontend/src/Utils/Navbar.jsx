import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav class="navbar sticky-top navbar-dark bg-dark">
            <div class="container-fluid">
                <div>
                    <a class="navbar-brand" href="/">Home Stay</a>
                </div>
                <div>
                    <a class="navbar-brand btn btnStyling rounded-0" href="/">Home</a>
                    <a class="navbar-brand btn btnStyling rounded-0" href="/">About</a>
                    <a class="navbar-brand btn btnStyling rounded-0" href="/">Contact</a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar