import React, { useState } from 'react';
import img1 from '../Images/img1.jpg';
import img8 from '../Images/img8.jpg';
import img12 from '../Images/img12.jpg';
import img13 from '../Images/img13.jpg';
import img14 from '../Images/img14.jpg';
import img15 from '../Images/img15.jpg';
import img18 from '../Images/img18.jpg';
import img25 from '../Images/img25.jpg';

const images = [
    { img: img8, data: " Nearby Locations for wandering" },
    { img: img12, data: "Take a break and enjoy a relaxing sleep" },
    { img: img14, data: "Clean Road and Nearby Parking Facility" },
    { img: img15, data: "Near a facilitated Hospital" },
    { img: img18, data: "Nearby river Locations for wandering" },
    { img: img25, data: "Sitting Arrangement for dinner, lunch, and breakfast" },
];

const Details = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const OpeninnewTab = (imgSrc) => {
        const confirm = window.confirm("Open Image in new Tab");
        if (confirm) {
            window.open(imgSrc, '_blank');
        }
    };

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const transitionStyles = {
        transition: '0.2s ease-in-out',
        transform: 'scale(1)',
        maxWidth: '350px',
        cursor: "pointer"
    };

    const defaultStyles = {
        transition: '0.2s ease-in-out',
        transform: 'scale(0.98)',
        maxWidth: '350px'
    };

    return (
        <div className='my-1' style={{ height: "-webkit-fill-available" ,minWidth:"400px"}}>
        {/* <div className='my-1 EnvInfo' style={{ height: "-webkit-fill-available" ,minWidth:"400px"}}> */}
            <center className='fw-bolder fs-1 mb-2 bg-black text-white' style={{ fontSize: '' }}>
                Environmental Information
            </center>
            <div className='row col-12 px-2'>
                {images.map((data, idx) => (
                    <div className='d-flex align-items-start justify-content-center col-sm-12 col-xs-12 col-md-6 col-lg-3 col-xxl-3 col-xl-3 mb-2' key={idx}>
                        <div className='border bg-dark' style={{ minWidth: '300px' }}>
                            <img
                                src={data.img}
                                onClick={() => OpeninnewTab(data.img)}
                                className=""
                                style={hoveredIndex === idx ? transitionStyles : defaultStyles}
                                onMouseEnter={() => handleMouseEnter(idx)}
                                onMouseLeave={handleMouseLeave}
                            />
                            <div className='px-2 text-white' style={{ maxWidth: '320px' }}>
                                {data.data}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Details;
