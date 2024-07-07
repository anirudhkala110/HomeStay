import React from 'react'

const ContactPage = () => {
  return (
    <div className='min-vh-100 py-3 d-flex align-items-center justify-content-center' style={{ minWidth: "400px", background: 'rgb(0 0 0 / 0%)' }}>
      <div className='container text-black bg-light' style={{ boxShadow: "0px 0px 15px 0px gray", background: 'rgb(0 0 0 / 80%)' }} >
        <center className='' style={{ fontSize: '42px' }}>Contact and Connect Us</center>
        <iframe className='shadow' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1296.6642496660997!2d78.69219255390766!3d29.944206701383614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39099c4e50679007%3A0x36fd8fa768adc344!2sThe%20Hans%20Foundation%20General%20Hospital%20(THFGH)%2C%20Satpuli!5e0!3m2!1sen!2sin!4v1719912519677!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <hr />
        <div className=' p-3 rounded-0' style={{ background: 'transparent !important', minHeight: '450px' }}>
          <div className='alert-success fs-3' style={{ textAlign: 'center' }}>
            Home Stay at Nayar Valley, Satpuli. Near <strong>The Hans Foundation General Hospital (THFGH)</strong>
          </div>
          <hr />
          <div className='row px-4'>
            <div className="card mx-1 hoverContact col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-3 p-2" style={{ maxWidth: "300px" }}>
              <b className='fs-4 card-header' style={{ background: 'transparent', color: '' }}>Name</b><br />
             Puran Chandra Kala<br />
            </div>
            <div className="card mx-1 hoverContact col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3 p-2" style={{ maxWidth: "300px" }}>
              <b className='fs-4 card-header' style={{ background: 'transparent', color: '' }}>Email</b><br />
              homestayatnayarvalleyinsatpuli@gmail.com<br />
            </div>
            <div className="card mx-1 hoverContact col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3 p-2" style={{ maxWidth: "300px" }}>
              <b className='fs-4 card-header' style={{ background: 'transparent', color: '' }}>Phone Number</b><br />
              +91-9068300581
              <br />
              <br />
              WhatsApp and Calls are available
            </div>
            <div className="card mx-1 hoverContact col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3 p-2" style={{ maxWidth: "300px" }}>
              <b className='fs-4 card-header' style={{ background: 'transparent', color: '' }}>Address</b><br />
              Chamolisen, Sela, Langoor Valla 4 - Pauri Ghardwal, Nayar valley, Near The Hans Foundation General Hospital (THFGH), Satpuli<br />
            </div>
          </div>
        </div>
        {/* <center className='fs-1 fw-bolder alert alert-success rounded-0' style={{ letterSpacing: '3px', wordSpacing: '15px' }}>In front of Hospital (THFGH)</center> */}

      </div>
    </div>
  )
}

export default ContactPage