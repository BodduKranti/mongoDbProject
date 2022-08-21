import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardProdctCat from '../../Components/Card/CardProdctCat';
import InnerBanner from '../../Components/InnerBanner/InnerBanner'

const ProductCat = () => {

    const [storeCat, setStoreCat] = useState([]);

    const filterCat = [...new Set(storeCat.map((cat) => { return cat.productCategory }))]

    const getCat = async () => {
        await axios.get('http://localhost:8003/prodBlog/getProducts')
            .then((res) => {
                setStoreCat(res.data.data.productItms)
            })
            .catch((error) => { console.log(error) })
    }

    useEffect(() => {
        getCat();
    }, [])


    return (
        <>
            <InnerBanner
                Pagetitle="Product Category"
                Pagedesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />

            <div className='container-fluid py-5 bg-light'>
                <div className='container'>
                    <div className='row'>
                        {filterCat.map((cate) => {
                            return (
                                <>
                                    <div className='col-lg-4 col-md-6 col-12'>
                                        <CardProdctCat
                                            prodBlog={cate}
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

export default ProductCat