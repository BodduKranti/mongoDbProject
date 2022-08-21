import React from 'react'
import CardServices from '../../Components/Card/CardServices'
import InnerBanner from '../../Components/InnerBanner/InnerBanner'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'

const Services = () => {
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
    }, {
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
  return (
    <>
      <InnerBanner
        Pagetitle="Services"
        Pagedesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <div className='container-fluid py-5 bg-light'>
        <div className='container text-dark'>
          <SectionTitle
            SecTitle="We provide below Services"
            SecDesc="Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates
                incidunt molestias nostrum laudantium. Maiores porro cumque quaerat."
          />

          <div className='row text-dark'>
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
    </>
  )
}

export default Services