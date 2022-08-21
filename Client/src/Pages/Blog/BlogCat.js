import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import CardCat from '../../Components/Card/CardCat'
import InnerBanner from '../../Components/InnerBanner/InnerBanner'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'

const BlogCat = () => {

  const [storeBlog, setStoreBlog] = useState([]);

  const getBlogCat = [...new Set(storeBlog.map((itms) => { return itms.blogCategory }))]

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
        Pagetitle="Blog Category"
        Pagedesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />


      <div className='container-fluid py-5 bg-light'>
        <div className='container'>
          <SectionTitle
            SecTitle="Blog Category Itmes"
            SecDesc="Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates
                    incidunt molestias nostrum laudantium. Maiores porro cumque quaerat."
          />

          <Row className='mt-4'>
            {getBlogCat.map((blogCat) => {
              return (
                <>
                  <Col md={4} className="mb-4">
                    <CardCat 
                        prodBlog={blogCat}
                    />
                  </Col>
                </>
              )
            })}

          </Row>
        </div>
      </div>
    </>
  )
}

export default BlogCat