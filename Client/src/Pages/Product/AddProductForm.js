import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Toast, ToastContainer } from 'react-bootstrap'
import FileBase64 from 'react-file-base64';
const AddProductForm = ({ getProduct }) => {

    const [tostShow, setTostShow] = useState(false);

    const [fillProd, setFillProd] = useState({
        productTitle: '',
        productCategory: '',
        productImg: '',
        productPrice: '',
        productDesc: ''
    })

    const { productTitle, productImg, productCategory, productPrice, productDesc } = fillProd;

    const inputHandler = (e) => {
        setFillProd({ ...fillProd, [e.target.name]: e.target.value })
    }

    const AddProduct = async (e) => {
        e.preventDefault();

        if (productTitle === '' || productCategory === '' || productImg === '' || productPrice === '' || productDesc === '') {
            alert("Please do not be blank");
        }
        else {
            await axios.post('http://localhost:8003/prodBlog/addProduct', fillProd)
                .then((res) => {
                    setFillProd({
                        productTitle: '',
                        productCategory: '',
                        productImg: '',
                        productPrice: '',
                        productDesc: ''
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
            getProduct();
            setTostShow(true);
        }

    }

    return (
        <>
            <Form className='shadow bg-whtie p-3 pt-4' onSubmit={AddProduct}>
                <div className='row'>
                    <div className='col-12'>
                        <Form.Group className="mb-4">
                            <Form.Control className='rounded-pill py-2 border-0 shadow-sm'
                                type="text"
                                placeholder="Enter Product Title"
                                name="productTitle"
                                value={productTitle}
                                onChange={(e) => inputHandler(e)}
                            />
                        </Form.Group>
                    </div>
                    <div className='col-12'>
                        <Form.Group className="mb-4">
                            <Form.Control
                                className='rounded-pill py-2 border-0 shadow-sm'
                                type="text"
                                placeholder="Enter Product Category"
                                name="productCategory"
                                value={productCategory}
                                onChange={(e) => inputHandler(e)}
                            />
                        </Form.Group>
                    </div>
                    <div className='col-12'>
                        <Form.Group className="mb-4">

                            <FileBase64
                                type="file"
                                multiple={false}
                                name="productImg"
                                value={productImg}
                                onDone={({ base64 }) => setFillProd({ ...fillProd, productImg: base64 })}
                            // onChange={({ base64 }) => inputHandler(base64)}
                            />
                        </Form.Group>
                    </div>
                    <div className='col-12'>
                        <Form.Group className="mb-4">
                            <Form.Control
                                className='rounded-pill py-2 border-0 shadow-sm'
                                type="number"
                                placeholder="Enter Product Price"
                                name="productPrice"
                                value={productPrice}
                                onChange={(e) => inputHandler(e)}
                            />
                        </Form.Group>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <Form.Group className="mb-4">
                            <textarea rows={4}
                                className="form-control border-0 shadow-sm"
                                placeholder='Enter Product Details'
                                name="productDesc"
                                value={productDesc}
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
            <ToastContainer className="p-3" position="top-end">
                <Toast show={tostShow} onClose={() => setTostShow(false)} delay={3000} autohide>
                    <Toast.Header className='d-flex justify-content-between bg-success border-0  text-white'>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto fs-6">Product Added Succesfully</strong>

                    </Toast.Header>
                </Toast>
            </ToastContainer>

        </>
    )
}

export default AddProductForm