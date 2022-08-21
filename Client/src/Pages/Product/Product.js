import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProducts from '../../Components/Card/CardProducts'
import InnerBanner from '../../Components/InnerBanner/InnerBanner'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'

const Product = () => {

  const [storeProduct, setStoreProduct] = useState([]);

  const getProduct = async () => {
    await axios.get('http://localhost:8003/prodBlog/getProducts')
      .then((res) => {
        setStoreProduct(res.data.data.productItms)
      })
      .catch((error) => { console.log(error) })
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <>
      <InnerBanner
        Pagetitle="Product"
        Pagedesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <div className='container-fluid py-5 bg-light'>
        <SectionTitle
          SecTitle="Products"
          SecDesc="Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat."
        />
        <div className='container'>
          <div className='row'>
            {storeProduct.map((itms) => {
              return (
                <>
                  <div className='col-lg-3 col-md-4 col-12 mb-4'>
                    <CardProducts 
                      itms={itms}
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

export default Product