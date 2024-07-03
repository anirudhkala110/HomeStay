import React from 'react'
import './Navbar.css'

const SupportiveNav = () => {
    return (
        <nav class="navbar sticky-top navbar-light supportiveNavBG  py-1">
            <div class="container-fluid">
                <div className='less450px'>
                    <a class="navbar-brand text-black " href="/" style={{ fontSize: "16px" }}>Home Stay at Nayar Valley, Satpuli</a>
                </div>
                <div className='less450px'>
                    <a class="navbar-brand btn btnStylingSupportiveNav text-primary rounded-0 fw-bolder" href="https://www.facebook.com/profile.php?id=61561612619363&mibextid=qi2Omg&rdid=xrPZ7cpH7K0kyvqa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F8vupuB9QhkwT3KKk%2F%3Fmibextid%3Dqi2Omg" style={{ fontSize: '14px' }}><i className='me-1 bi bi-facebook'></i> Facebook</a>
                    {/* <a class="navbar-brand btn btnStylingSupportiveNav rounded-0" href="/" style={{ fontSize: '14px' }}><i className='me-1 bi bi-instagram'></i>Instagram</a> */}
                    <a class="navbar-brand btn btnStylingSupportiveNav text-success rounded-0 fw-bolder" href="tel:+919068300581" target='__blank' style={{ fontSize: '14px' }}><i className='me-1 bi bi-whatsapp'></i> Whatsapp</a>
                </div>
                <div className='show450px'>
                    <center >
                        <a class="navbar-brand text-white" href="/" style={{ fontSize: "16px" }}>Home Stay</a>
                    </center>
                    <a class="navbar-brand btn btnStylingSupportiveNav rounded-0 fw-bolder" href="/https://www.facebook.com/profile.php?id=61561612619363&mibextid=qi2Omg&rdid=xrPZ7cpH7K0kyvqa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F8vupuB9QhkwT3KKk%2F%3Fmibextid%3Dqi2Omg" style={{ fontSize: '14px' }}><i className='me-1 bi bi-facebook'></i> </a>
                    {/* <a class="navbar-brand btn btnStylingSupportiveNav rounded-0" href="/" style={{ fontSize: '14px' }}><i className='me-1 bi bi-instagram'></i></a> */}
                    <a class="navbar-brand btn btnStylingSupportiveNav rounded-0 fw-bolder" href="tel:+919068300581" target='__blank' style={{ fontSize: '14px' }}><i className='me-1 bi bi-whatsapp'></i> </a>
                </div>

            </div>
        </nav>
    )
}

export default SupportiveNav