import React from 'react'
import TypewriterEffect from './TypeWriter'
import img12 from '../Images/img12.jpg'
import img1 from '../Images/img1.jpg'
import img11 from '../Images/img11.jpg'
const WhyChooseUs = () => {
    const handleOpenNewTab = (urlGet) => {
        const confirm = window.confirm("Open Image in new tab")
        if (confirm) {
            window.open(urlGet, "__blank")
        }
    }
    const text = "<div className='fs-2'><ul style={{listStyle:'none'}}><li><b>Stunning Location: </b>Our  Home Stay at Nayar Valley is uniquely situated to offer panoramic views and easy access to both mountains and rivers.</li><li><b>Personalized Service: </b>Our friendly and attentive staff are dedicated to making your stay as comfortable and memorable as possible.</li><li><b>Eco-Friendly Practices: </b>We are committed to sustainable tourism, using eco-friendly practices to minimize our impact on the environment.</li><li><b>Relaxation and Adventure: </b>Whether you're looking to relax in nature or seek adventure, our  Home Stay at Nayar Valley provides the perfect setting for both.</li></ul></div>"
    return (
        <div className='bg-white text-white container-fluid whyChooseUsBG' style={{minHeight:'80vh',minWidth:"400px"}}>
            <div className='row'>
                <center className='bg-black text-white fw-bolder' style={{ fontSize: '72px' }}>
                    Why Choose Us ?
                </center>
                <div className='col-12 my-2'>
                    <img className='handleImage4' src={img11} style={{ width: '30%', marginBottom: '-10%', position: 'relative', marginRight: '0%', marginLeft: '70%', zIndex: '1' }} onClick={e => handleOpenNewTab(img11)} />
                    <img className='handleImage4' src={img12} style={{ width: '30%', marginLeft: '50%', marginTop: "", marginRight: '', position: 'relative', zIndex: '2' }} onClick={e => handleOpenNewTab(img12)} />
                    <img className='handleImage4' src={img1} style={{ width: '30%', marginLeft: '25%', marginTop: "-10%", marginRight: '', position: 'relative', zIndex: '3' }} onClick={e => handleOpenNewTab(img1)} />
                    <img className='handleImage4' src={img12} style={{ width: '30%', marginTop: '-10%', position: 'relative', marginLeft: "8%", marginRight: '70%', zIndex: '4' }}  onClick={e => handleOpenNewTab(img12)} />
                </div>
                <div className='col-sm-12 col-lg-6 container my-3'>
                    {/* <h1 className='text-upper fw-bolder' style={{ fontSize: '78px' }}></h1> */}
                    <TypewriterEffect texts={text} pauseDuration={2000} loop={false} typingSpeed={10} />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs