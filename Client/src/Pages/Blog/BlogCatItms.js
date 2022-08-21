import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardBlog from '../../Components/Card/CardBlog'
import InnerBanner from '../../Components/InnerBanner/InnerBanner'

const BlogCatItms = () => {

  const { cat } = useParams();

  const [storeBlog, setStoreBlog] = useState([]);

  const filterBlogItms = (storeBlog.filter((itms) => { return itms.blogCategory === cat }));

  const getBlogItms = async () => {
    await axios.get(`http://localhost:8003/prodBlog/getBlogs`)
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
        Pagetitle={cat}
      />

      <div className='container-fluid py-5 bg-light'>
        <div className='container'>
          <div className='row'>
            {filterBlogItms.map((itms) => {
              return (
                <>
                  <div className='col-lg-4 col-md-6 col-12'>
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

export default BlogCatItms