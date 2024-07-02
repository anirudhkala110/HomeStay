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
        <div className='bg-white min-vh-100 container-fluid'>
            <div className='row py-2'>
                <center className='bg-dark text-white fw-bolder' style={{ fontSize: '3pc' }}>
                    Room Information
                </center>
                <div className='col-12 my-2'>
                    <img className='handleImage' src={img11} style={{ width: '30%', marginBottom: '-10%', position: 'relative', marginRight: '0%', marginLeft: '70%', zIndex: '2' }} onClick={e => handleOpenNewTab(img11)} />
                    <center>
                        <img className='handleImage' src={img12} style={{ width: '80%', marginLeft: '', marginRight: '', position: 'relative' }} onClick={e => handleOpenNewTab(img12)} />
                    </center>
                    <img className='handleImage' src={img1} style={{ width: '30%', marginTop: '-10%', position: 'relative', zIndex: '2' }} onClick={e => handleOpenNewTab(img1)} />
                </div>
                <div className='col-sm-12 col-lg-6'>
                    This is for the information part of the Room and house
                </div>
            </div>
        </div>
    )
}

export default HomeDetails