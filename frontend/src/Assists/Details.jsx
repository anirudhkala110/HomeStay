import React, { useState } from 'react';
import img1 from '../Images/img1.jpg';
import img8 from '../Images/img8.jpg';
import img12 from '../Images/img12.jpg';
import img13 from '../Images/img13.jpg';
import img14 from '../Images/img14.jpg';
import img15 from '../Images/img15.jpg';
import img18 from '../Images/img18.jpg';
import img25 from '../Images/img25.jpg';
import TypewriterEffect from './TypeWriter';

const images = [
    { img: img8, data: " Nearby Locations for wandering. Discover the charm of Nayar Valley's bridges just a stone's throw away from our HomeStay. Surrounded by picturesque landscapes, these bridges offer more than just connectivity—they provide a glimpse into the region's rich history and architectural beauty. Take leisurely walks to admire the views or capture stunning photos of the valley from these iconic landmarks." },
    { img: img12, data: "Tucked away in the tranquil mountains of Nayar Valley, our HomeStay is an ideal retreat for travelers looking for peace and rejuvenation. Our inviting rooms offer a cozy sanctuary where you can unwind from your journeys and enjoy a restful sleep. Additionally, for your convenience and peace of mind, a well-equipped hospital is located just a short walk away, ensuring your stay is safe and worry-free. Discover the perfect combination of nature, comfort, and security at our Nayar Valley HomeStay." },
    { img: img14, data: "Nestled in the serene mountains of Nayar Valley, our HomeStay offers the perfect retreat for tourists seeking tranquility and rejuvenation. With clean roads and a nearby parking facility, accessing both our comfortable rooms and the fully-equipped hospital just steps away is incredibly convenient. Enjoy the peace of mind that comes with easy access to essential services while you relax and unwind in our cozy accommodations." },
    { img: img15, data: "Located in the tranquil mountains of Nayar Valley, our HomeStay provides a serene escape for travelers. Just steps away from a fully facilitated hospital, you can enjoy peace of mind knowing medical care is readily available. The clean roads and nearby parking make access to both your cozy accommodations and essential services effortless, ensuring a comfortable and secure stay amidst nature's beauty." },
    { img: img18, data: "Nearby river Locations for wandering. Explore the serene beauty of Nayar Valley's nearby river during your stay at our HomeStay. Nestled amidst the tranquil mountains, our accommodations provide a perfect base for immersing yourself in nature. Whether you enjoy peaceful walks along the riverbanks or adventurous activities like river rafting, the scenic views and calming waters offer a refreshing escape." },
    { img: img25, data: "Experience delightful dining at our HomeStay, where we offer cozy sitting arrangements for breakfast, lunch, and dinner. Enjoy the serene ambiance and delicious meals prepared with locally sourced ingredients, perfect for relaxing meals with family and friends amidst the scenic beauty of Nayar Valley. Whether you're starting your day with a hearty breakfast, enjoying a leisurely lunch, or winding down with a satisfying dinner, our dining setup ensures a memorable culinary experience during your stay." },
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
        maxWidth: '100%',
        cursor: "pointer"
    };

    const defaultStyles = {
        transition: '0.2s ease-in-out',
        transform: 'scale(0.98)',
        maxWidth: '100%'
    };

    return (
        <div className='my-1' style={{ height: "-webkit-fill-available", minWidth: "400px" }}>
            {/* <div className='my-1 EnvInfo' style={{ height: "-webkit-fill-available" ,minWidth:"400px"}}> */}
            <center className='fw-bolder fs-1 mb-2 bg-black text-white' style={{ fontSize: '' }}>
                Environmental Information
            </center>
            <div className='row col-12 px-2'>
                {images.map((data, idx) => (
                    <div className='d-flex border bg-dark align-items-start justify-content-center col-sm-12 col-xs-12 col-md-6 col-lg-4 col-xxl-3 col-xl-4 mb-2' key={idx}>
                        <div className='p-2' style={{ minWidth: '300px' }}>
                            <img

                                src={data.img}
                                onClick={() => OpeninnewTab(data.img)}
                                className=""
                                style={hoveredIndex === idx ? transitionStyles : defaultStyles}
                                onMouseEnter={() => handleMouseEnter(idx)}
                                onMouseLeave={handleMouseLeave}
                            />
                            <hr style={{ color: 'white' }} />
                            <div className=' ps-2 text-white' style={{ maxWidth: '-webkit-fill-available', textAlign: 'justify' }}>
                                <TypewriterEffect texts={data.data} typingSpeed={10} loop={false} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Details;
