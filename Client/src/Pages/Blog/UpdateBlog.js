import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import InnerBanner from '../../Components/InnerBanner/InnerBanner'
import FileBase64 from 'react-file-base64';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
const UpdateBlog = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [storeBlog, setStoreBlog] = useState({
        blogTitle: '',
        blogCategory: '',
        blogImg: '',
        blogDesc: ''
    });

    const {blogTitle, blogCategory,blogImg,blogDesc } = storeBlog;

    const inputHandler = (e) => {
        setStoreBlog({...storeBlog,[e.target.name]:e.target.value})
    }


    const updateBlog = async (e) => {
        e.preventDefault();
        // await axios.put(`http://localhost:8003/prodBlog/updateBlog/${id}`, storeBlog)
        // .then((res)=>{
        //     // setStoreBlog(res.data)
        // })
        // .catch((error)=>{console.log(error)})

        await fetch(`http://localhost:8003/prodBlog/updateBlog/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                blogTitle, blogCategory, blogImg, blogDesc
            })
        });

        navigate('/blog');
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


      console.log(storeBlog);

    return (
        <>
            <InnerBanner
                Pagetitle={storeBlog.blogTitle}
            />
            <div className='container-fluid py-5 bg-light'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-8 col-12 m-auto'>
                            <Form className='shadow bg-whtie p-3 pt-4 bg-white' onSubmit={updateBlog}>
                                <div className='row'>
                                    <div className='col-12'>
                                        <Form.Group className="mb-4">
                                            <Form.Control className='rounded-pill py-2 border-0 shadow-sm'
                                                type="text"
                                                placeholder="Enter Blog Title"
                                                name="blogTitle"
                                                value={blogTitle}
                                                onChange={(e) => inputHandler(e)}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='col-12'>
                                        <Form.Group className="mb-4">
                                            <Form.Control
                                                className='rounded-pill py-2 border-0 shadow-sm'
                                                type="text"
                                                placeholder="Enter Blog Category"
                                                name="blogCategory"
                                                value={blogCategory}
                                                onChange={(e) => inputHandler(e)}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='col-12'>
                                        <Form.Group className="mb-4">

                                            <FileBase64
                                                type="file"
                                                multiple={false}
                                                name="blogImg"
                                                value={blogImg}
                                                onDone={({ base64 }) => setStoreBlog({ ...storeBlog, blogImg: base64 })}
                                            />
                                        </Form.Group>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12'>
                                        <Form.Group className="mb-4">
                                            <textarea rows={4}
                                                className="form-control border-0 shadow-sm"
                                                placeholder='Enter Blog Message'
                                                name="blogDesc"
                                                value={blogDesc}
                                                onChange={(e) => inputHandler(e)}
                                            ></textarea>
                                        </Form.Group>
                                    </div>
                                </div>

                                <div className='text-center col-12 mb-3'>
                                    <Button variant="dark" type="submit" className='py-2 px-3 rounded-pill'>
                                        Save Blog
                                    </Button>
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateBlog