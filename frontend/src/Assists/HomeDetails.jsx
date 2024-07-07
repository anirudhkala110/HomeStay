import React from 'react'
import img12 from '../Images/img12.jpg'
import img1 from '../Images/img1.jpg'
import img11 from '../Images/img11.jpg'

const HomeDetails = () => {
    const handleOpenNewTab = (urlGet) => {
        const confirm = window.confirm("Open Image in new tab")
        if (confirm) {
            window.open(urlGet, "__blank")
        }
    }
    return (
        <div className='min-vh-100 container-fluid' style={{ minWidth: "400px" }}>
            <div className='row'>
                <center className='bg-dark text-white fw-bolder fs-1' style={{ fontSize: '' }}>
                    Room Information
                </center>
                <div className='col-12 my-2'>
                    <img className='handleImage2' src={img11} style={{ width: '30%', marginBottom: '-10%', position: 'relative', marginRight: '0%', marginLeft: '70%', zIndex: '2' }} onClick={e => handleOpenNewTab(img11)} />
                    <center>
                        <img className='handleImage' src={img12} style={{ width: '80%', marginLeft: '', marginRight: '', position: 'relative' }} onClick={e => handleOpenNewTab(img12)} />
                    </center>
                    <img className='handleImage3' src={img1} style={{ width: '30%', marginTop: '-10%', position: 'relative', marginLeft: "8%", marginRight: '70%', zIndex: '2' }} onClick={e => handleOpenNewTab(img1)} />
                </div>
                <div className='col-sm-12 col-lg-6 container my-3 py-2 px-3 text-white' style={{ background: "rgb(0 0 0 / 45%)", textAlign: 'justify' }}>
                    <h1><b>Welcome </b>to <strong> Home Stay at Nayar Valley </strong></h1>
                    <div className=''>
                        <h3>Overview</h3>
                        <p>
                            Nestled between majestic mountains and serene rivers, our  Home Stay at Nayar Valley offers a perfect blend of natural beauty and modern comfort. Ideal for nature lovers, adventure seekers, and those looking to escape the hustle and bustle of city life, this retreat promises an unforgettable experience.
                        </p>
                    </div>
                    <div className='px-3'>
                        <h3>Accommodations</h3>
                        <p>
                            Our  Home Stay at Nayar Valley features a variety of accommodation options to suit your needs. Each room is designed with comfort and relaxation in mind, offering stunning views of the surrounding landscapes.
                            <ul>
                                <li><b>Deluxe Rooms: </b>Spacious and well-appointed with cozy beds, en-suite bathrooms, and private balconies overlooking the mountains or rivers.</li>
                                <li><b>Cottages: </b>Private cottages nestled amidst lush greenery, perfect for a secluded getaway.</li>
                                <li><b>Family Suites: </b>Larger suites with multiple bedrooms and living areas, ideal for families or groups.</li>
                            </ul>
                        </p>
                    </div>
                    <div className='px-3'>
                        <h3>Amenities</h3>
                        <p>
                            We offer a range of amenities to ensure a comfortable and enjoyable stay:
                            <ul>
                                <li><b>Food Facilities & Dining: </b>Enjoy delicious local and international cuisine at our on-site restaurant, with outdoor seating available for dining with a view.</li>
                                <li><b>Outdoor Activities: </b>Explore hiking trails, fishing spots, and picnic areas nearby.</li>
                                <li><b>Bonfire Nights: </b>Gather around a cozy bonfire in the evenings, perfect for stargazing and storytelling.</li>
                                <li><b>Wellness Facilities: </b> Rejuvenate with yoga sessions, meditation areas, and massage services.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDetails