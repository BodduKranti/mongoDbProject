import React from 'react'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardProducts = ({itms}) => {
    return (
        <>
            <div className='card col-12 shadow border-0 h-100'>
                <div className='card-img'>
                    <figure>
                        <img src={itms.productImg} className='img-fluid w-100' alt='' />
                    </figure>
                </div>
                <div className='card-header border-0 bg-transparent'>
                    <h4 className='mb-0'>{itms.productTitle}</h4>
                </div>
                <div className='card-body pt-0'>
                    <Badge className='bg-primary mb-3'>{itms.productCategory}</Badge>
                    <h6 className='fw-bold'>Price : <i className='fa fa-inr'></i> {itms.productPrice}</h6>
                    <p className='mt-3'>
                        {itms.productDesc}
                    </p>
                    <div className='d-flex'>
                        <Link to={`/product/${itms._id}`} className='btn btn-dark me-2 w-100 px-0'>Buy Now <i className='fa fa-angle-right'></i></Link>
                        <Link to="/product" className='btn btn-warning w-100 px-0'><i className='fa fa-shopping-cart'></i> Add To Cart </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProducts