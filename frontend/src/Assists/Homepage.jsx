import React from 'react'
import AutomaticImageSlider from '../Images/ImageSlider'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Homepage = () => {

    return (
        <div className='container-fluid px-0'>
            <div>
                <AutomaticImageSlider />
            </div>
            {
                array.map((data, k) => (
                    <div style={{ minHeight: "150px" }} className='bg-light align-items-center justify-content-center d-flex'>
                        <center>
                            <strong>
                                This is Home Page {k + 1}
                            </strong>
                        </center>
                    </div>
                ))
            }
        </div>
    )
}

export default Homepage