import React from 'react'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardBlog = ({itms}) => {
    return (
        <>
            <div className='card col-12 shadow border-0 h-100' key={itms._id}>
                <div className='card-img'>
                    <figure>
                        <img src={`${itms.blogImg}`} className='img-fluid w-100' alt='' />
                    </figure>
                </div>
                <div className='card-header border-0 bg-transparent'>
                    <h4 className='mb-0'>{itms.blogTitle}</h4>
                </div>
                <div className='card-body'>
                    <Badge className='bg-primary'>{itms.blogCategory}</Badge>
                    <p className='mt-3'>
                        {itms.blogDesc}
                    </p>
                    <Link to={`/blog/${itms._id}`} className='btn btn-dark rounded-pill px-3 py-2'>Read More <i className='fa fa-angle-right'></i></Link>
                </div>
            </div>
        </>
    )
}

export default CardBlog