import React, { useState, useEffect } from 'react';
import CardServices from '../../Components/Card/CardServices';
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import LogoSection from '../../Components/Logos/LogoSection';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Slider from "react-slick";
import CardProducts from '../../Components/Card/CardProducts';
import Contactform from '../../Components/ContactForm/Contactform';
import CardBlog from '../../Components/Card/CardBlog';
import axios from 'axios';

const Home = () => {


  const services = [
    {
      serviceIcon: 'fa-flask fs-1',
      serviceName: 'Laboratory services',
      serviceDesc: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.'
    },
    {
      serviceIcon: 'fa-heartbeat fs-1',
      serviceName: 'Heart Disease',
      serviceDesc: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.'
    },
    {
      serviceIcon: 'fa-stethoscope fs-1',
      serviceName: 'Dental Care',
      serviceDesc: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.'
    },
    {
      serviceIcon: 'fa-wheelchair-alt fs-1',
      serviceName: 'Body Surgery',
      serviceDesc: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.'
    },
    {
      serviceIcon: 'fa-medkit fs-1',
      serviceName: 'Neurology Sargery',
      serviceDesc: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.'
    },
    {
      serviceIcon: 'fa-h-square fs-1',
      serviceName: 'Gynecology',
      serviceDesc: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.'
    }
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
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

  const [storeBlog, setStoreBlog] = useState([]);
  const [storeProd, setStoreProd] = useState([]);

  const getBlogItms = async () => {
    await axios.get('http://localhost:8003/prodBlog/getBlogs')
      .then((res) => {
        setStoreBlog(res.data.data.blogsItms);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getProd = async () => {
    await axios.get('http://localhost:8003/prodBlog/getProducts')
      .then((res) => {
        setStoreProd(res.data.data.productItms);
      })
      .catch((error) => { console.log(error) })
  }

  useEffect(() => {
    getBlogItms();
    getProd();
  }, [])


  return (
    <>
      <HomeBanner
        HomePagetitle="Build your next project faster with SB UI Kit Pro"
        HomePageDesc="Welcome to SB UI Kit Pro, a toolkit for building beautiful web interfaces, created by the development team at Start Bootstrap"
        HomeButton="About"
        HomePageImg="images/programming.svg"
      />


      <Testimonial
        Testimonial="We served over 5000+ Patients"
        TestimonialDesc="Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat."
      />


      <div className='container-fluid py-5 bg-purple'>
        <div className='container text-white'>
          <SectionTitle
            SecTitle="Award winning patient care"
            SecDesc="Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates
                incidunt molestias nostrum laudantium. Maiores porro cumque quaerat."
          />
        </div>
        <div className='container'>
          <div className='row'>
            {services.map((itms, i) => {
              return (
                <>
                  <div className='col-lg-4 col-md-6 col-12 mb-4'>

                    <CardServices
                      service={itms}
                      keys={i}
                    />
                  </div>
                </>
              )
            })}

          </div>
        </div>
      </div>


      <div className='container-fluid py-5 bg-light'>
        <div className='container'>
          <SectionTitle
            SecTitle="Blogs"
            SecDesc="Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat."
          />
          <div className='row'>
            {storeBlog.map((itms) => {
              return (
                <>
                  <div className='col-lg-4 col-md-6 col-12 mb-3'>
                    <CardBlog
                      itms={itms}
                    />
                  </div>
                </>
              )
            })}

          </div>
        </div>
      </div>


      <div className='container-fluid py-5 bg-warning'>
        <SectionTitle
          SecTitle="Products"
          SecDesc="Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat."
        />
        <div className='container mb-3'>
          <Slider {...settings} className="py-3 pb-5">
            {storeProd.map((itms) => {
              return (
                <>
                  <div className='px-3'>
                    <CardProducts
                      itms={itms}
                    />
                  </div>
                </>
              )
            })}

          </Slider>
        </div>


      </div>

      <div className='container-fluid py-5 bg-light'>
        <SectionTitle
          SecTitle="Contact us"
          SecDesc="Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?"
        />

        <div className='container'>
          <Contactform />
        </div>
      </div>

      <LogoSection />

    </>
  )
}

export default Home