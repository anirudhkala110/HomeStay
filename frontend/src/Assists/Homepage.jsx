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

const Homepage = () => {

    return (
        <div className='container-fluid px-0'>
            <div>
                <AutomaticImageSlider />
            </div>
            <div>
                <Details />
            </div>
            <div className='d-flex border align-items-start justify-content-center '>
                <div className='border' style={{ minWidth: '350px' }}>
                    <img src={img13} style={{ maxWidth: "450px" }} />
                    <p>
                        Nearby Loations for wandering in evening Time.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Homepage