import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InnerBanner from '../../Components/InnerBanner/InnerBanner'
import axios from 'axios';
const Register = () => {


    const [addUser,setAddUser]=useState({
        userName:'',
        userEmail:'',
        userPassword:''
    });

    const {userName, userEmail, userPassword} = addUser;

    const inputHandler = (e) => {
        setAddUser({...addUser,[e.target.name]:e.target.value})
    }

    const register = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/users/', addUser)
        .then(res=>{
            setAddUser({
                userName:'',
                userEmail:'',
                userPassword:''
            })
        })
        .catch((error)=>{console.log(error)})
    }


    return (
        <>
            <InnerBanner
                Pagetitle="Register"
                Pagedesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />

            <div className='container-fluid py-5 bg-light'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-6 col-12'>
                            <img src='../images/programming.svg' className='img-fluid' alt="" />
                        </div>
                        <div className='col-lg-5 col-md-6 col-12 d-flex justify-content-start align-items-center'>
                            <Form className="col-12" onSubmit={register}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Enter Your Name</Form.Label>
                                    <Form.Control className='rounded-pill shadow-sm' type="text" name="userName" value={userName} onChange={(e)=>inputHandler(e)} placeholder="Enter Your Name" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control className='rounded-pill shadow-sm' type="email" name="userEmail" value={userEmail} onChange={(e)=>inputHandler(e)} placeholder="Enter Your email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className='rounded-pill shadow-sm' type="password" name="userPassword" value={userPassword} onChange={(e)=>inputHandler(e)} placeholder="Enter Your Password" />
                                </Form.Group>
                                <Button variant="dark" className='rounded-pill px-4 py-2' type="submit">
                                    Register
                                </Button>
                            </Form>
                            
                            <div className='py-4 col-12'>
                                    <p>If you have already account? so Please click on <Link to="/login">Login</Link></p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Register