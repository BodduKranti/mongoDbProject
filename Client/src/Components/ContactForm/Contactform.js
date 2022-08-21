import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Contactform = () => {
    return (
        <Form>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control className='rounded-pill py-2 border-0 shadow-sm' type="text" placeholder="Enter Your First Name" />
                    </Form.Group>
                </div>
                <div className='col-md-6 col-12'>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control className='rounded-pill py-2 border-0 shadow-sm' type="text" placeholder="Enter Your Last Name" />
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control className='rounded-pill py-2 border-0 shadow-sm' type="email" placeholder="Enter Your Email" />                       
                    </Form.Group>
                </div>
                <div className='col-md-6 col-12'>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control className='rounded-pill py-2 border-0 shadow-sm' type="tel" placeholder="Enter Your Phone Number" />
                    </Form.Group>
                </div>
            </div>

            <div className='row'>
                <div className='col-12'>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <textarea rows={4} className="form-control border-0 shadow-sm" placeholder='Enter Your Message'></textarea>
                    </Form.Group>
                </div>
            </div>
            
            <div className='text-center col-12 mt-3'>
                <Button variant="dark" type="submit" className='py-2 px-3 rounded-pill'>
                    Send Message
                </Button>
            </div>

        </Form>
    )
}

export default Contactform