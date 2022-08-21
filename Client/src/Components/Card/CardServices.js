import React from 'react'

const CardServices = (props) => {
    return (
        <>
            <div className='card border-0 bg-white shadow p-3' keys={props.keys}>
                <div className='card-header border-0 bg-transparent'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <figure className='mb-0 h-auto'>
                                <i className={`fa ${props.service.serviceIcon} text-primary`}></i>
                            </figure>
                        </div>
                        <div className='col-md-9 col-12 d-flex justify-content-start align-items-center'>
                            <div className='main-section'>
                                <h5 className="fw-bold">{props.service.serviceName}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <p>
                        {props.service.serviceDesc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default CardServices