import React from 'react'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Homepage = () => {

    return (
        <div>
            {
                array.map((data, k) => (
                    <div style={{ minHeight: "150px" }} className='bg-light align-items-center justify-content-center d-flex'>
                        <center>
                            <strong>
                                This is Home Page {k+1}
                            </strong>
                        </center>
                    </div>
                ))
            }
        </div>
    )
}

export default Homepage