import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardProducts from '../../Components/Card/CardProducts';
import InnerBanner from '../../Components/InnerBanner/InnerBanner'

const ProductSearch = () => {

  const [storeCat, setStoreCat] = useState([]);
  const [mainStoreCat, setMainStoreCat] = useState([]);
  const [filterCat, setFilterCat] = useState([])

  const fltrCat = [...new Set(filterCat.map((cat) => { return cat.productCategory }))]

  //filtercateogyr
  const fiterCategoryItms = (e) => {
      if(e.target.value==='All'){
        return setMainStoreCat(storeCat);
      }
      const getResult = (filterCat.filter((cat) => { return cat.productCategory === e.target.value}));
      setMainStoreCat(getResult);
  }   
  
  const getCat = async () => {
    await axios.get('http://localhost:8003/prodBlog/getProducts')
      .then((res) => {
        setStoreCat(res.data.data.productItms);
        setMainStoreCat(res.data.data.productItms);
        setFilterCat(res.data.data.productItms);
      })
      .catch((error) => { console.log(error) })
  }

  useEffect(() => {
    getCat();
  }, [])

  console.log(storeCat);
  return (
    <>
      <InnerBanner
        Pagetitle="Product Search"
      />

      <div className='container-fluid py-5 bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-4 col-12'>
              <h5>Search</h5>
              <form className=''>
                <div className='mb-3'>
                  <input type="text" className="form-control" placeholder="Search Products" />
                </div>
              </form>

              <div className='group'>
                <h5>Product Category</h5>
                <ul>
                <li><button className='border-0 ps-3 text-start col-12 bg-transparent mb-2' onClick={fiterCategoryItms} value="All">All</button></li>
                  {fltrCat.map((cate) => {
                    return (
                      <>
                        <li><button className='border-0 ps-3 text-start col-12 bg-transparent mb-2' onClick={fiterCategoryItms} value={cate}>{cate}</button></li>
                      </>
                    )
                  })}

                </ul>
              </div>
            </div>

            <div className='col-lg-9 col-md-8 col-12'>
              <div className='row'>
                {mainStoreCat.map((itms) => {
                  return (
                    <>
                      <div className='col-lg-4 col-md-6 col-12 mb-4'>
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
        </div>
      </div>
    </>
  )
}

export default ProductSearch