import React from 'react'
import Slider from "react-slick";

const LogoSection = () => {
    const logos = [
        { logoImg: "./images/logo/1.png" },
        { logoImg: "./images/logo/2.png" },
        { logoImg: "./images/logo/3.png" },
        { logoImg: "./images/logo/4.png" },
        { logoImg: "./images/logo/5.png" },
        { logoImg: "./images/logo/6.png" }
    ]

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
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

            <div className='container-fluid py-5'>
                <div className='container'>
                    <Slider {...settings} className="logosSlider">
                        {logos.map((logos, i) => {
                            return (
                                <>
                                    
                                        <img src={logos.logoImg} className="img-fluid" alt="partners" />
                                    
                                </>
                            )
                        })}

                    </Slider>
                </div>
            </div>

        </>
    )
}

export default LogoSection