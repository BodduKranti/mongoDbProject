import React, { useState, useEffect } from 'react'
import CardBlog from '../../Components/Card/CardBlog'
import InnerBanner from '../../Components/InnerBanner/InnerBanner'
import axios from 'axios'

const Blog = () => {

    const [storeBlog, setStoreBlog] = useState([]);

    const getBlogItms = async () => {
        await axios.get('http://localhost:8003/prodBlog/getBlogs')
            .then((res) => {
                setStoreBlog(res.data.data.blogsItms);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getBlogItms();
    }, [])

    return (
        <>
            <InnerBanner
                Pagetitle="Blog"
                Pagedesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />

            <div className='container-fluid py-5 bg-light'>
                <div className='container'>
                    <div className='row'>
                        {storeBlog.map((itms) => {
                            return (
                                <>
                                    <div className='col-lg-4 col-md-6 col-12 mb-4'>
                                        <CardBlog 
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

export default Blog