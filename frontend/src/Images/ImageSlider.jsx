import './Main1.css'
import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, EffectCoverflow, Scrollbar, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore from 'swiper/core';
import mi from './rvr.png';
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
    { img: mi, info: 'Near River with Variety of vegitation.' },
];

const delay = 5500;

function AutomaticImageSlider() {
    const [index, setIndex] = useState(0);
    const [hover, setHover] = useState(false);
    const [autoplayParams, setAutoplayParams] = useState({ delay: 5500, disableOnInteraction: false });

    useEffect(() => {
        const handleNextSlide = () => {
            setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1));
        };

        const timeout = setTimeout(handleNextSlide, delay);

        return () => clearTimeout(timeout);
    }, [index]);

    useEffect(() => {
        setAutoplayParams(hover ? { delay: 7000, disableOnInteraction: true } : { delay: 5500, disableOnInteraction: false });
    }, [hover]);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const OpeninnewTab = (imgSrc) => {
        const confirm = window.confirm("Open Image in new Tab");
        if (confirm) {
            window.open(imgSrc, '_blank');
        }
    };

    return (
        <div className="slideshow px-0">
            <div className='show750px'>
                <Swiper
                    className="slideshowSlider swiper_container rounded-0 shadow-6-strong py-1"
                    effect="cube"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    autoplay={autoplayParams}
                    slidesPerView={1}
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
                                    className={`w-100 text-white image-scale`}
                                    src={data.img}
                                    style={{ transform: 'scale(0.51) !important',opacity:'0.2 !important', maxHeight: '350px', height: '40vh', minWidth: '400px', width: '-webkit-fill-available', filter: `${data.img === mi ? 'invert(0)' : ''}` }}
                                    alt={`Slide ${idx}: ${data.info}`}
                                    onClick={e => OpeninnewTab(data.img)}
                                />
                            </center>
                            <div className='text-white p-3 fs-3 border-0 rounded-0 mb-0 text-upper' style={{ position: "relative", marginTop: '-120px', background: "rgba(0 0 0 / 46%)" }}>{data.info}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='less1000px'>
                <Swiper
                    className="slideshowSlider swiper_container rounded-0 shadow-6-strong"
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    autoplay={autoplayParams}
                    slidesPerView={1}
                    coverflowEffect={{
                        rotate: 90,
                        stretch: 0,
                        depth: 1,
                        // depth: 800,
                        modifier: 1,
                        slideShadows: true,
                        opacity:0.2
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
                                    className={`w-100 text-white image-scale`}
                                    src={data.img}
                                    style={{ transform: 'scale(0.51) !important',opacity:'0.2 !important', maxHeight: '88vh', minWidth: '400px', width: '-webkit-fill-available', filter: `${data.img === mi ? 'invert(0)' : ''}` }}
                                    alt={`Slide ${idx}`}
                                    onClick={e => OpeninnewTab(data.img)}
                                />
                            </center>
                            <div className='text-white alert rounded-0 mb-0 text-upper fs-3' style={{ position: "relative", top: '-30vh', background: "rgba(0 0 0 / 46%)" }}>{data.info}</div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev slider-arrow p-2" style={{ background: '' }}>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow p-2" style={{ background: '' }}>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default AutomaticImageSlider;
