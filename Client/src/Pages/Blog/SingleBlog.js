import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Badge, Button, Modal } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import InnerBanner from '../../Components/InnerBanner/InnerBanner'

const SingleBlog = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [storeBlog, setStoreBlog] = useState({});

  const deleteFunction = () => {
    setShow(true);
  }

  const DeleteBlog = async (id) => {
    await axios.delete(`http://localhost:8003/prodBlog/deleteBlog/${id}`)
      .then((res) => {
        // setStoreBlog(res.data)
      })
      .catch((error) => { console.log(error) })
    navigate('/blog')
    setShow(false);
  }

  const getBlogItms = async () => {
    await axios.get(`http://localhost:8003/prodBlog/getBlogItm/${id}`)
      .then((res) => {
        setStoreBlog(res.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getBlogItms();
  }, [])

  console.log(storeBlog.blogTitle);

  return (
    <>
      <InnerBanner
        Pagetitle={storeBlog.blogTitle}
      />

      <nav aria-label="breadcrumb" className='container-fluid py-2 bg-dark'>
        <div className='container'>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
            <li class="breadcrumb-item"><Link to={`/blogCat/${storeBlog.blogCategory}`}>{storeBlog.blogCategory}</Link></li>
            <li class="breadcrumb-item active" aria-current="page">{storeBlog.blogTitle}</li>
          </ol>
        </div>

      </nav>

      <div className='container-fluid py-5 bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 col-md-8 col-12'>
              <figure>
                <img src={`${storeBlog.blogImg}`} className='img-fluid' />
              </figure>
              <h3>{storeBlog.blogTitle}</h3>
              <Badge variant="primary" className='mb-3'>{storeBlog.blogCategory}</Badge>
              <p>
                {storeBlog.blogDesc}
              </p>
            </div>
            <div className='col-lg-3 col-md-4 col-12'>
              <Link to={`/blogUpdate/${storeBlog._id}`} className="btn btn-warning px-4 py-2 mb-3 col-12 rounded-pill">Update Blog</Link>
              <Button className="btn btn-danger px-4 py-2 rounded-pill col-12" onClick={() => deleteFunction()} >Delete Blog</Button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)} animation={true} centered>
        <Modal.Header closeButton>
          <Modal.Title className='text-center border-0 shadow-0'></Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <h4>Do you want to delete this blog</h4>
          If Yes please follow the below button
          <div className='col-12 text-center py-3'>
            <Button variant="dark" className='w-25 me-2' onClick={() => setShow(false)}>
              No
            </Button>
            <Button variant="danger" className='w-25' onClick={() => DeleteBlog(id)}>
              Delete
            </Button>
          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default SingleBlog