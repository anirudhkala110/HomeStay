import React from 'react'
import BG from './BG.jpeg'
import BG1 from './BG.png'
import envinfobg from './envinfobg.jpg'
import BG2 from './BG2.avif'
import front from './Front.jpg'
import Hospital from './Hospital.png'
import HVFH1 from './hospitalViewfromHouse.jpg'
import HVFH2 from './hospitalViewfromHouse2.jpg'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import img17 from './img17.jpg'
import img18 from './img18.jpg'
import img19 from './img19.jpg'
import img20 from './img20.jpg'
import img21 from './img21.jpg'
import img22 from './img22.jpg'
import img23 from './img23.jpg'
import img25 from './img25.jpg'
import img26 from './img26.jpg'
import img27 from './img27.jpg'
import river from './river.jpg'
import rvr from './rvr.png'
import transportationFacility from './transportationFacility.jpg'
import withOwner from './withOwner.jpg'

const images = [
    BG, BG1, envinfobg, BG2, front, HVFH1, HVFH2, Hospital, img1, img10, img11, img2, img3, img4, img5, img6, img7, img8, img9, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img25, img26, img27, river, rvr, transportationFacility, withOwner
]

const Images = () => {
    const handleOpenNewTab = (url) => {
        if (window.confirm("Open Image in new tab ?")) {
            window.open(url, "__blank")
        }
    }
    return (
        <div className='' style={{ height: '100vh',WebkitScroll:'0px' }}>
            <center className='fs-1 w-100 text-white pb-3' style={{ background: 'rgb(0 0 0 /75%)' }}>Images</center>
            <center><p>House and Suroundings</p></center>
            <div className='container-fluid text-white' style={{ background: 'rgb(0 0 0 / 45%)' }}>
                <div className='row' >
                    {
                        images.map((data, idx) => (
                            <div className=' col-sm-12 col-md-6 col-lg-4 p-2 col-xxl-3 col-xs-12 col-xl-3 ' key={idx}>
                                <div className='border' style={{ width: '-webkit-fill-available' }}>
                                    <img className='galleryHover' src={data} style={{ width: "-webkit-fill-available", height: "350px", minWidth: '340px' }} onClick={e => handleOpenNewTab(data)} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Images