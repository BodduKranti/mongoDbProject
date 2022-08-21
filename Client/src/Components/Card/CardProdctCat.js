import React from 'react'
import { Link } from 'react-router-dom'

const CardProdctCat = ({prodBlog}) => {
    return (
        <div className='card col-12 h-100 p-3 text-center'>
            <Link to={`/prodCat/${prodBlog}`} className="fs-3 fw-bold">{prodBlog}</Link>
        </div>
    )
}

export default CardProdctCat