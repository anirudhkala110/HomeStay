import React, { useState } from 'react'
import AutomaticImageSlider from '../Images/ImageSlider'
import img1 from '../Images/img1.jpg'
import img8 from '../Images/img8.jpg'
import img12 from '../Images/img12.jpg'
import img13 from '../Images/img13.jpg'
import img14 from '../Images/img14.jpg'
import img15 from '../Images/img15.jpg'
import img18 from '../Images/img18.jpg'
import hsptl from '../Images/Hospital.png'
import Details from './Details'
import './Main.css'
import HomeDetails from './HomeDetails'
import TypewriterEffect from './TypeWriter'
import WhyChooseUs from './WhyChooseUs'

const Homepage = () => {
    const [mapShow, setMapShow] = useState(true)
    return (
        <div className=' px-0 min-vh-100' style={{ minWidth: "400px" }}>
            <div className='less1000px align-items-center text-white px-2' style={{ background: "#000000a3", position: 'absolute', lineHeight: '4', top: '200px', zIndex: '100', width: '100%', minHeight: "320px", fontSize: "5rem" }}>
                <TypewriterEffect texts={"Welcome to <b> Home Stay  at Nayar Valley</b> . . ."} typingSpeed={50} pauseDuration={2000} />
            </div>
            <div className='show750px align-items-center text-white px-2' style={{ background: "#000000a3", position: 'absolute', lineHeight: '2.5', top: '200px', zIndex: '100', width: '-webkit-fill-available', minHeight: "160px", fontSize: "2rem" }}>
                <TypewriterEffect texts={"Welcome to <b> Home Stay  at Nayar Valley</b> . . ."} typingSpeed={50} pauseDuration={2000} />
            </div>
            <div className=''>
                <AutomaticImageSlider />
            </div>
            <div className=''>
                <HomeDetails />
            </div>
            <div className=''>
                <Details />
            </div>
            <div className=''>
                <WhyChooseUs />
            </div>
            <div className='' style={{ minWidth: '350px' }}>
                <div style={{ background: "rgba(0 0 0 / 80%)", zIndex: '100', position: "absolute", width: "100%" }}>
                    <center className='text-white py-2 showHptl' style={{ fontSize: '3em' }}>
                        MEDICAL FACILITIES AT 0 KM , Satpuli
                    </center>
                    <center className='text-white hidehspital py-2' style={{ fontSize: '1.5em' }}>
                        MEDICAL FACILITIES AT 0 KM , Satpuli
                    </center>
                </div>
                <div className='p-5 text-white less1000px' style={{
                    position: 'absolute',
                    minHeight: '10px',
                    zIndex: '100',
                    width: '100%',
                    marginTop: '86px',
                    // left: "10%",
                    // right: "10%",
                    background: 'rgb(0 0 0 / 40%)'
                }}>
                    <div>
                        <h1>The Hans Foundation General Hospital,Satpuli</h1>
                        <p>
                            Our residence is in front of THFGH.
                            <br />
                            THFGH is a compassionate endeavor to provide access to affordable, quality medical care for the rural underprivileged in and around the state of Uttarakhand. With nearly 160 clinical staff, 125 non-clinical staff members, and 60 outsourced staff members, the hospital has completed nearly 40,000 surgeries.  It has catered to over fifty-seven thousand people in its inpatient department (IPD) and has provided health care services to nearly five and a half lakh people in the outpatient department (OPD).
                        </p>
                    </div>
                </div>
                <div className='p-5 text-white show750px' style={{
                    position: 'absolute',
                    minHeight: '350px',
                    zIndex: '100',
                    width: '100%',
                    marginTop: '50px',
                    // left: "10%",
                    // right: "10%",
                    background: 'rgb(0 0 0 / 40%)'
                }}>
                    <div>
                        <strong><h3>The Hans Foundation General Hospital,Satpuli</h3></strong>
                        <p>
                            Our residence is in front of THFGH.
                            <br />
                            THFGH is a compassionate endeavor to provide access to affordable, quality medical care for the rural underprivileged in and around the state of Uttarakhand. With nearly 160 clinical staff, 125 non-clinical staff members, and 60 outsourced staff members, the hospital has completed nearly 40,000 surgeries.  It has catered to over fifty-seven thousand people in its inpatient department (IPD) and has provided health care services to nearly five and a half lakh people in the outpatient department (OPD).
                        </p>
                    </div>
                </div>
                <img src={hsptl} className='handleHospitalImage show750px' style={{ maxWidth: "", width: '100%', maxHeight: '600px', minHeight: "500px" }} />
                <img src={hsptl} className='handleHospitalImage less1000px' style={{ maxWidth: "", width: '100%', maxHeight: '350px', minHeight: "300px" }} />
                <button className='btn btn-primary rounded-0 show750px' style={{ position: 'relative', zIndex: '200', marginTop: '-20px', marginLeft: '25px' }} onClick={e => setMapShow(!mapShow)}>{!mapShow ? 'Open Map' : 'Close Map'}</button>
                <button className='btn btn-primary rounded-0 less1000px ' style={{ position: 'relative', zIndex: '200', marginTop: '-50px', marginLeft: '25px' }} onClick={e => setMapShow(!mapShow)}>{!mapShow ? 'Open Map' : 'Close Map'}</button>
                <div>

                </div>
                {
                    mapShow && <iframe className='my-1 shadow' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1296.6642496660997!2d78.69219255390766!3d29.944206701383614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39099c4e50679007%3A0x36fd8fa768adc344!2sThe%20Hans%20Foundation%20General%20Hospital%20(THFGH)%2C%20Satpuli!5e0!3m2!1sen!2sin!4v1719912519677!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                }
            </div>
        </div>
    )
}

export default Homepage