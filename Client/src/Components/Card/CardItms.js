import React from 'react'

const CardItms = (props) => {
    return (
        <div className='card border-0 bg-white shadow p-3'>
            <div className='card-header border-0 bg-transparent'>
                <div className='row'>
                    <div className='col-md-3'>
                        <figure className='mb-0 h-auto'>
                            <img src={props.testItms.userImg} className="img-fluid rounded-circle w-75" alt="partners" />
                        </figure>
                    </div>
                    <div className='col-md-9 col-12 d-flex justify-content-start align-items-center'>
                        <div className='main-section'>
                            <h3>{props.testItms.userDesigantion}</h3>
                            <h6>{props.testItms.userName}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <p>
                    {props.testItms.userDesc}
                </p>
            </div>
        </div>
    )
}

export default CardItms