import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardBlog from '../../Components/Card/CardBlog'
import InnerBanner from '../../Components/InnerBanner/InnerBanner'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import AddBlogForm from './AddBlogForm'
import axios from 'axios';

const Bloglist = () => {

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

  console.log(storeBlog);


  return (
    <>

      <InnerBanner
        Pagetitle="Blog List"
        Pagedesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />


      <div className='container-fluid py-5'>
        <SectionTitle
          SecTitle="All Blogs"
          SecDesc="Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?"
        />

        <Container>
          <Row className='mt-4'>
            <Col lg={9} md={8}>
              <Row>
                {storeBlog.map((itms, i) => {
                  return (
                    <>
                      <Col md={6} className="mb-4">
                        <CardBlog 
                            itms={itms}
                        />
                      </Col>
                    </>
                  )
                })}

              </Row>
            </Col>
            <Col lg={3} md={4}>
              <AddBlogForm
                getBlogItms={getBlogItms}
              />
            </Col>

          </Row>
        </Container>



      </div>
    </>
  )
}

export default Bloglist