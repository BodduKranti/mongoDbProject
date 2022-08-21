import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import InnerBanner from '../../Components/InnerBanner/InnerBanner'

const SingleProduct = () => {

  const { id } = useParams();

  const [storeProd, setStoreProd] = useState({});

  const getSingleProduct = async () => {
    await axios.get(`http://localhost:8003/prodBlog/getProductItm/${id}`)
      .then((res) => {
        setStoreProd(res.data)
      })
      .catch((error) => { console.log(error) })
  }

  useEffect(() => {
    getSingleProduct();
  }, [])

  console.log(storeProd)

  return (
    <>
      <InnerBanner
        Pagetitle={storeProd.productTitle}
      />
      <nav aria-label="breadcrumb" className='container-fluid py-2 bg-dark'>
        <div className='container'>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
            <li class="breadcrumb-item"><Link to={`/prodCat/${storeProd.productCategory}`}>{storeProd.productCategory}</Link></li>
            <li class="breadcrumb-item active" aria-current="page">{storeProd.productTitle}</li>
          </ol>
        </div>

      </nav>

      <div className='container-fluid py-5 bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-dm-6 col-12'>
              <figure>
                <img src={storeProd.productImg} className='img-fluid' alt='' />
              </figure>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <h6 className='mb-3'>{storeProd.productCategory}</h6>
              <h3 className='mb-3 text-primary'>{storeProd.productTitle}</h3>
              <h4 className='mb-3 text-danger fw-bold'>Price: ${storeProd.productPrice} (Out of Stock)</h4>
              <h5 className='mb-3'> Reviews : 5 <i className='fa fa-star text-warning'></i></h5>

              <div className='d-flex my-4'>
                <Link to="/product" className='btn btn-dark  px-3 py-2 rounded-pill me-2'>
                  Buy Now
                </Link>
                <Link to="/product" className='btn btn-warning px-3 py-2 rounded-pill me-2'>
                  <i className='fa fa-shopping-cart'></i> View Cart
                </Link>
              </div>

              <h3 className='mb-3'>Description</h3>
              <p>
                {storeProd.productDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct