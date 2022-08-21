import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InnerBanner from '../../Components/InnerBanner/InnerBanner'

const Login = () => {
    return (
        <>
            <InnerBanner
                Pagetitle="Login"
                Pagedesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />

            <div className='container-fluid py-5 bg-right'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-6 col-12'>
                            <img src='../images/programming.svg' className='img-fluid' alt='' />
                        </div>
                        <div className='col-lg-5 col-md-6 col-12 d-flex justify-content-start align-items-center'>
                            <Form className='col-12'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control className='rounded-pill shadow-sm' name="userEmail" type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className='rounded-pill shadow-sm' name="userPassword" type="password" placeholder="Password" />
                                </Form.Group>
                                <div className='py-4 col-12'>
                                    <p>
                                        If you don't have account ? please click on <Link to="/register">Register</Link>
                                    </p>
                                </div>
                                <Button variant="dark" type="submit" className='px-4 py-2 rounded-pill'>
                                    Login
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login