import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import FileBase64 from 'react-file-base64';

const AddBlogForm = (props) => {

    const [fillField, setFillField] = useState({
        blogTitle: '',
        blogCategory: '',
        blogImg: '',
        blogDesc: ''
    })

    const { blogTitle, blogCategory, blogImg, blogDesc } = fillField;

    const inputHandler = (e) => {
        setFillField({ ...fillField, [e.target.name]: e.target.value })
    }

    console.log(fillField);

    const AddBlog = async (e) => {
        e.preventDefault();

        if(blogTitle==='' || blogCategory==='' || blogImg === '' || blogDesc==='')
        {
            alert("Please do not be blank");
        }
        else{
            await axios.post('http://localhost:8003/prodBlog/addblogs', fillField)
            .then((res) => {
                setFillField({
                    blogTitle: '',
                    blogCategory: '',
                    blogImg: '',
                    blogDesc: ''
                })
            })
            .catch((error) => {
                console.log(error)
            })
            props.getBlogItms();
        }
        
    }


    return (
        <>
            <Form className='shadow bg-whtie p-3 pt-4' onSubmit={AddBlog}>
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
                                onDone={({ base64 }) => setFillField({ ...fillField, blogImg: base64 })}
                            // onChange={({ base64 }) => inputHandler(base64)}
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
                        Add Blog
                    </Button>
                </div>

            </Form>
        </>
    )
}

export default AddBlogForm