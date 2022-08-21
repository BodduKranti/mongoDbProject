import React from 'react'
import Slider from "react-slick";
import CardItms from '../Card/CardItms';

const Testimonial = (props) => {
    const TestimonialItms = [
        {
            userImg: './images/testimonial/test-thumb1.jpg',
            userDesigantion: 'Amazing service!',
            userName: 'John Partho',
            userDesc: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.'
        },
        {
            userImg: './images/testimonial/test-thumb2.jpg',
            userDesigantion: 'Expert doctors!',
            userName: 'Mullar Sarth',
            userDesc: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.'
        },
        {
            userImg: './images/testimonial/test-thumb3.jpg',
            userDesigantion: 'Good Support!',
            userName: 'Kolis Mullar',
            userDesc: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.'
        },
        {
            userImg: './images/testimonial/test-thumb4.jpg',
            userDesigantion: 'Nice Environment!',
            userName: 'Partho Sarothi',
            userDesc: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.'
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className='container-fluid py-5 bg-light'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-9 col-12 m-auto'>
                            <h2 className='text-center'>{props.Testimonial}</h2>
                            <p className='text-center'>{props.TestimonialDesc}</p>
                        </div>
                    </div>

                    <Slider {...settings} className="pb-3">
                        {TestimonialItms.map((testItms, i) => {
                            return (
                                <>
                                    <div className='m-3'>
                                        <CardItms
                                            testItms={testItms}
                                            key={i}
                                        />
                                    </div>




                                </>
                            )
                        })}

                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Testimonial