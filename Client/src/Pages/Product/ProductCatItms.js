import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardProducts from '../../Components/Card/CardProducts'
import InnerBanner from '../../Components/InnerBanner/InnerBanner'

const ProductCatItms = () => {
  const { cat } = useParams();

  const [storeProd, setStoreProd] = useState([]);

  const filterCat = (storeProd.filter((filterCatItm) => { return filterCatItm.productCategory === cat }))

  const getProd = async () => {
    await axios.get('http://localhost:8003/prodBlog/getProducts')
      .then((res) => {
        setStoreProd(res.data.data.productItms)
      })
      .catch((error) => { console.log(error) })
  }

  useEffect(() => {
    getProd();
  }, [])

  return (
    <>
      <InnerBanner
        Pagetitle={cat}
      />

      <div className='container-fluid py-5 bg-light'>
        <div className='container'>
          <div className='row'>
            {filterCat.map((itms) => {
              return (
                <>
                  <div className='col-lg-3 col-md-4 col-12 mb-4'>
                    <CardProducts itms={itms} />
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

export default ProductCatItms