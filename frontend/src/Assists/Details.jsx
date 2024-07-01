import React from 'react'
import img1 from '../Images/img1.jpg'
import img8 from '../Images/img8.jpg'
import img12 from '../Images/img12.jpg'
import img13 from '../Images/img13.jpg'
import img14 from '../Images/img14.jpg'
import img15 from '../Images/img15.jpg'
import img18 from '../Images/img18.jpg'
import img25 from '../Images/img25.jpg'

const images = [
    { img: img8, data: " Nearby Loations for wandering" },
    { img: img12, data: "Take break and enjoy relax sleep" },
    { img: img14, data: "Clean Road and Nearby Parking Facility" },
    { img: img15, data: " Near a facilitate Hospital" },
    { img: img18, data: " Nearby river Loations for wandering" },
    { img: img25, data: "  Sitting Arangement for dinner, lunch and breakfast" },
]

const Details = () => {
    const OpeninnewTab = (imgSrc) => {
        const confirm = window.confirm("Open Image in new Tab")
        if (confirm) {
            window.open(imgSrc, '_blank');
        }
    }
    return (
        <div className='row min-vh-100 my-2'>
            <center className='fs-2 fw-bolder my-3'>
                Environmental Information
            </center>
            {
                images.map((data, idx) => (
                    <div className='d-flex align-items-start justify-content-center col-sm-12 col-xs-12 col-md-6 col-lg-4 col-xxl-4 col-xl-4' key={idx}>
                        <div className='border' style={{ minWidth: '350px' }}>
                            <img src={data.img} onClick={e => OpeninnewTab(data.img)} className="img-thumbnail " style={{ maxWidth: "400px" }} />
                            <p className='px-2'>
                                {data.data}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Details