import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container-fluid py-5 bg-gray-dark'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <Link to="/">
                                    <figure>
                                        <img src='../../../../images/logo.png' className='img-fluid' alt='logo' />
                                    </figure>
                                </Link>
                                <p>
                                    Energistically initiate user-centric ROI via compelling technologies. Inter envisioneer cross-media.
                                </p>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12'>
                                <h6 className='text-white'>Usefull Links</h6>
                                <ul className='navLinks ms-0 ps-0 twoCol'>
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/about">About</NavLink></li>
                                    <li><NavLink to="/blog">Blog</NavLink></li>
                                    <li><NavLink to="/product">Products</NavLink></li>
                                    <li><NavLink to="/services">Services</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                </ul>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12'>
                                <h6 className='text-white'>Office Address</h6>
                                <ul className='navLinks ms-0 ps-0'>
                                    <li><a href="/"><i className="fa fa-map-marker"></i> 1233 Melbourne,Australia.</a></li>
                                    <li><a href="email:info@example.com" className='icon'><i className="fa fa-envelope"></i> info@example.com</a></li>
                                    <li><a href="tel:19512541454"><i className="fa fa-phone"></i> +1 (951) 2541-454</a></li>
                                </ul>
                            </div>
                            <div className='col-lg-2 col-md-6 col-12'>
                                <h6 className='text-white'>Social Network</h6>
                                <ul className='d-flex social'>
                                    <li><a href='https://www.goggle.com' className='icon'><i className='fa fa-facebook'></i></a></li>
                                    <li><a href='https://www.goggle.com' className='icon'><i className='fa fa-twitter'></i></a></li>
                                    <li><a href='https://www.goggle.com' className='icon'><i className='fa fa-linkedin'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='footer_bot bg-black py-3'>
                    <div className='container'>
                        <p className='mb-0'>© 2022 Poolio. All Rights Reserved by Vecuro.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer