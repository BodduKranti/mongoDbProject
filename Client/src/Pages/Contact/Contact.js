import React from 'react'
import Contactform from '../../Components/ContactForm/Contactform'
import InnerBanner from '../../Components/InnerBanner/InnerBanner'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'

const Contact = () => {
  const ContAdd = [
    {
      contIcon: 'fa-headphones',
      contAddtitle: 'Call Us',
      contctAddDetail: '+823-4565-13456'
    },
    {
      contIcon: 'fa-envelope',
      contAddtitle: 'Email Us',
      contctAddDetail: 'contact@mail.com'
    },
    {
      contIcon: 'fa-map-marker',
      contAddtitle: 'Location',
      contctAddDetail: 'North Main Street,Brooklyn Australia'
    }
  ]
  return (
    <>
      <InnerBanner
        Pagetitle="Contact"
        Pagedesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <div className='container-fluid py-5 bg-light'>
        <div className='container'>
          <div className='row'>
            {ContAdd.map((contacts, i) => {
              return (
                <>
                  <div className='col-md-4 col-12'>
                    <div className='card rounded-0 text-center border border-light border-3'>
                      <i className={`fa ${contacts.contIcon} fs-2 mt-4`}></i>
                      <div className='card-body'>
                        <h6 className='fs-3 fw-bold'>{contacts.contAddtitle}</h6>
                        <p>{contacts.contctAddDetail}</p>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>

      <div className='container-fluid py-5 bg-purple text-white'>
            <SectionTitle
              SecTitle="Contact us"
              SecDesc="Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?"
            />
          <div className='container'>
              <div className='row'>
                  <div className='col-lg-7 col-md-6 col-12'>
                      <Contactform />
                  </div>
                  <div className='col-lg-5 col-md-6 col-12'>
                      <iframe className='border border-white p-3 shadow-sm bg-white' src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="280px"></iframe>
                  </div>
              </div>

          </div>
      </div>
    </>
  )
}

export default Contact