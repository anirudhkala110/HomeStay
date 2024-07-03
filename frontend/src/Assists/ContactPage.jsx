import React from 'react'

const ContactPage = () => {
  return (
    <div className='min-vh-100 py-3 d-flex align-items-center justify-content-center' style={{ minWidth: "400px", background: 'rgb(0 0 0 / 0%)' }}>
      <div className='container text-white' style={{ boxShadow: "0px 0px 15px 0px gray",background:'rgb(0 0 0 / 80%)' }} >
        <div className=' p-3 rounded-0' style={{ background: 'transparent !important', minHeight: '450px' }}>
          <div className='alert-success fs-1' style={{ textAlign: 'center' }}>
            Home Stay at Nayar Valley, Satpuli. Near <strong>The Hans Foundation General Hospital (THFGH)</strong>
          </div>
          <hr />
          <div className=''>
            <table className='table table-responsive table-responsive-sm'>
              <thead className='table-head'>
                <th className='fs-1'>Data</th>
                <th className='fs-1'>Information</th>
              </thead>
              <tbody>
                <td><li style={{ background: 'transparent', color: 'white' }}>Name</li></td>
                <td>Home Stay</td>
              </tbody>
              <tbody>
                <td><li style={{ background: 'transparent', color: 'white' }}>Email</li></td>
                <td>homestayatnayarvalleyinsatpuli@gmail.com</td>
              </tbody>
              <tbody>
                <td><li style={{ background: 'transparent', color: 'white' }}>Phone Number</li></td>
                <td>+91-9068300581</td>
              </tbody>
              <tbody>
                <td><li style={{ background: 'transparent', color: 'white' }}>Address</li></td>
                <td>Nayar valley, Near The Hans Foundation General Hospital (THFGH), Satpuli</td>
              </tbody>
            </table>
          </div>
          <div className='w-100'>
            <a href='tel:+919068300581' target='__blank'><button className='btn btn-outline-primary w-100 py-4 fs-2'><b className='bi bi-telephone-fill me-1'></b> Call Now &nbsp; &nbsp; or&nbsp; &nbsp; &nbsp;  <b className='bi bi-whatsapp me-1 '></b> Whatsapp</button></a>
          </div>
        </div>
        <center className='fs-1 fw-bolder alert alert-success rounded-0' style={{ letterSpacing: '3px', wordSpacing: '15px' }}>In front of Hospital (THFGH)</center>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1296.6642496660997!2d78.69219255390766!3d29.944206701383614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39099c4e50679007%3A0x36fd8fa768adc344!2sThe%20Hans%20Foundation%20General%20Hospital%20(THFGH)%2C%20Satpuli!5e0!3m2!1sen!2sin!4v1719912519677!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default ContactPage