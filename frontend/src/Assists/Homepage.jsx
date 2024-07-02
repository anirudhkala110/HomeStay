import React from 'react'
import AutomaticImageSlider from '../Images/ImageSlider'
import img1 from '../Images/img1.jpg'
import img8 from '../Images/img8.jpg'
import img12 from '../Images/img12.jpg'
import img13 from '../Images/img13.jpg'
import img14 from '../Images/img14.jpg'
import img15 from '../Images/img15.jpg'
import img18 from '../Images/img18.jpg'
import img25 from '../Images/img25.jpg'
import Details from './Details'
import './Main.css'
import HomeDetails from './HomeDetails'
import TypewriterEffect from './TypeWriter'

const Homepage = () => {

    return (
        <div className='container-fluid px-0' style={{ minWidth: "350px" }}>
            <div className='less1000px align-items-center text-white px-2' style={{ background:"#000000a3",position: 'absolute',lineHeight:'4', top: '200px', zIndex: '100', width: '100%', minHeight: "320px", fontSize: "5rem",overflowX:'auto !important' }}>
                <TypewriterEffect texts={"Welcome to <b> Home Stay</b> . . ."} typingSpeed={50} pauseDuration={2000} />
            </div>
            <div className='show750px align-items-center text-white px-2' style={{ background:"#000000a3",position: 'absolute',lineHeight:'2.5', top: '200px', zIndex: '100', width: '-webkit-fill-available', minHeight: "160px", fontSize: "2rem",overflowX:'auto !important' }}>
                <TypewriterEffect texts={"Welcome to <b> Home Stay</b> . . ."} typingSpeed={50} pauseDuration={2000} />
            </div>
            <div className=''>
                <AutomaticImageSlider />
            </div>
            <div className='bg-white'>
                <HomeDetails />
            </div>
            <div>
                <Details />
            </div>
            <div className='d-flex border align-items-start justify-content-center '>
                <div className='border' style={{ minWidth: '350px' }}>
                    <img src={img13} style={{ maxWidth: "100%" }} />
                    <p>
                        Nearby Loations for wandering in evening Time.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Homepage