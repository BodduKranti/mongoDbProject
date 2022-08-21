import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanner = (props) => {
    return (
        <>
            <div className='container-fluid py-5 bg-primary text-white'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-12 d-flex justify-content-center align-items-center'>
                            <div className='main-section'>
                                <h1>{props.HomePagetitle}</h1>
                                <p>{props.HomePageDesc}</p>
                                <Link to="/about" className='btn btn-dark py-2 px-4 rounded-pill'>{props.HomeButton}</Link>
                            </div>
                        </div>
                        <div className='col-md-6 col-12'>
                            <figure className='mb-0'>
                                <img className='img-fluid' src={props.HomePageImg} alt="Home-Banner" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner