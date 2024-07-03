import React from 'react'
import './PageNotFound.css'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='min-vh-100 d-flex align-items-baseline justify-content-center pt-5'>
            <div>
                <div className=' d-flex align-items-center justify-content-center pt-5'>
                    <div className='rounded-circle d-flex align-items-center justify-content-center applyPNFcssDiv' style={{ overflow: "hidden !important", minWidth: '350px', maxWidth: '1000px', maxHeight: '1000px', minHeight: '350px' }}>
                    </div>
                    <strong className='applyPNFcss text-white'>Page Not Found</strong>
                </div>
                <div className='mt-5 pt-5'>
                    <Link className='text-decoration-none' to='/'>
                        <button className='btn btn-primary mt-5 w-100 py-3'>
                            <i className='bi bi-house'></i> Home
                        </button>
                        <p className='text-white p-4   my-4 ' style={{ background: 'rgb(0 0 0 / 80%)', cursor: 'pointer' }}> The link is not in the directory please go back to homepage </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound