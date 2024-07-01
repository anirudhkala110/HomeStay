import { Navigation, Pagination, EffectCoverflow, Scrollbar, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useEffect, useState } from 'react';
import SwiperCore from 'swiper/core';
import mi from './img3.jpg';
import img15 from './img15.jpg';
import trln from './img9.jpg';
import img17 from './img17.jpg';
import img23 from './img23.jpg';
import img12 from './img12.jpg';


SwiperCore.use([EffectCoverflow, Navigation, Autoplay]);

const colors = [
    { img: trln, info: 'Bridge Passage of comfortable ride.' },
    { img: img12, info: 'Relax and rest comfortably' },
    { img: img15, info: 'Nearby Hospital' },
    { img: img17, info: 'Home with Terrace Facilities.' },
    { img: img23, info: 'Near River with Variety of vegitation.' },
];

const delay = 2500;

function AutomaticImageSlider() {
    const [index, setIndex] = useState(0);
    const [hover, setHover] = useState(false);
    const [autoplayParams, setAutoplayParams] = useState({ delay: 2500, disableOnInteraction: false });

    useEffect(() => {
        const handleNextSlide = () => {
            setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1));
        };

        const timeout = setTimeout(handleNextSlide, delay);

        return () => clearTimeout(timeout);
    }, [index]);
    useEffect(() => {
        // Update autoplay parameters based on hover state
        setAutoplayParams(hover ? { delay: 7000, disableOnInteraction: true } : { delay: 2500, disableOnInteraction: false });
    }, [hover]);
    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };
    const OpeninnewTab = (imgSrc) => {
        const confirm = window.confirm("Open Image in new Tab")
        if (confirm) {
            window.open(imgSrc, '_blank');
        }
    }

    return (
        <div className="slideshow px-0"
        // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
            <div className='show750px'>
                {/* <div className="swiper-button-prev slider-arrow p-2" style={{ height:"-webkit-fill-available", background: 'white' }}> */}
                {/* <div className="swiper-button-prev slider-arrow py-5"
                    // hovleft
                    style={{
                        // height:"-webkit-fill-available",
                        // background: '#ffffff52'
                    }}>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div> */}
                <Swiper
                    // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    className="slideshowSlider swiper_container rounded-0 shadow-6-strong py-1"
                    effect="cube"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    // autoplay={hover ? false : { delay: 2500 }}
                    // autoplay={hover === true ? false : { delay: 300 }}
                    autoplay={autoplayParams}
                    slidesPerView={1}
                    // flipEffect={{
                    //     slideShadows: true,
                    //     limitRotation: true
                    // }}
                    // coverflowEffect={{
                    //     rotate: 0,
                    //     stretch: 10,
                    //     depth: 10,
                    //     modifier: 10,
                    //     slideShadows: true,
                    // }}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >

                    {colors.map((data, idx) => (
                        <SwiperSlide className="slide imageShadow text-white mb-2" key={idx}
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >

                            <center className=''>
                                <img
                                    // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                                    className={`${data.img === mi ? 'white !important' : 'bg-dark'} w-100 text-white `}
                                    src={data.img}
                                    style={{ background: `${data.img === mi ? 'white !important' : ''}`, transform: 'scale(1.01)', maxHeight: '350px', height: '40vh', minWidth: '400px', maxWidth: "", width: '-webkit-fill-available', color: 'white', filter: `${data.img === mi ? 'invert(1)' : ''}` }}
                                    alt={`Slide ${idx}`}
                                    onClick={e => OpeninnewTab(data.img)}
                                />
                            </center>
                            <div className='text-white p-3 border-0 rounded-0 mb-0 text-upper' style={{ position: "relative", marginTop: '-120px',fontSize:'',letterSpacing:"2px",background:"#000000b8"  }}>{data.info}</div>
                        </SwiperSlide>
                    ))}


                    {/* <center>
                    {colors.map((data, idx) => (
                        <div className="slide text-white mx-3" key={idx}
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                            style={{ width: '5px', height: '5px',background:`${idx==index ? 'blue':'white'}` }}
                        >

                        </div>
                    ))}
                </center> */}
                </Swiper>
                {/* <div className="swiper-button-next slider-arrow py-5 "
                    //  hovright 
                    style={{
                        // height:"-webkit-fill-available", 
                        // background: '#ffffff52'
                    }}>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div> */}
            </div>
            <div className='less1000px'>
                <Swiper
                    // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    className="slideshowSlider swiper_container rounded-0 shadow-6-strong"
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    // autoplay={hover ? false : { delay: 2500 }}
                    // autoplay={hover === true ? false : { delay: 300 }}
                    autoplay={autoplayParams}
                    slidesPerView={1}
                    coverflowEffect={{
                        rotate: -10,
                        stretch: 0,
                        depth: 800,
                        modifier: 2,
                        slideShadows: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    {colors.map((data, idx) => (
                        <SwiperSlide className="slide text-white" key={idx}
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <center>
                                <img
                                    // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                                    className={`${data.img === mi ? 'white !important' : 'bg-dark'} w-100 text-white hoverimg `}
                                    src={data.img}
                                    style={{ background: `${data.img === mi ? 'white !important' : ''}`, transform: 'scale(1)', maxHeight: '88vh', height: '', minWidth: '400px', maxWidth: "", width: '-webkit-fill-available', color: 'white', filter: `${data.img === mi ? 'invert(0)' : ''}` }}
                                    alt={`Slide ${idx}`}
                                    onClick={e => OpeninnewTab(data.img)}
                                />
                            </center>
                            <div className='text-white alert rounded-0 mb-0 text-upper' style={{ position: "relative", top: '-30vh',fontSize:'3em',letterSpacing:"2px",background:"#000000b8" }}>{data.info}</div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev slider-arrow  p-2" style={{
                        //  height: "-webkit-fill-available", 
                        background: ''
                    }}>
                        <ion-icon name="arrow-back-outline" className=""></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow  p-2" style={{
                        // height: "-webkit-fill-available",
                        background: ''
                    }}>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    {/* <center>
                    {colors.map((data, idx) => (
                        <div className="slide text-white mx-3" key={idx}
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                            style={{ width: '5px', height: '5px',background:`${idx==index ? 'blue':'white'}` }}
                        >

                        </div>
                    ))}
                </center> */}
                </Swiper>
            </div>
        </div>
    );
}

export default AutomaticImageSlider;
