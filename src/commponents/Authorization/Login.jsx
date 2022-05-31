import React from 'react'
import './style.css'
import { Form, Button } from 'react-bootstrap'
const Login = () => {
    return (
        <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form className='rounded p-4 p-sm-3'>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email Addres</Form.Label>
                    <Form.Control type='email' placeholder='Enter Email' />
                    <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Check type='checkbox' label='Remember Me' />
                </Form.Group>
                <Button variant='primary' type='submite'>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login
/*     < Container >
    <Row>
        <Col md='2'>Login</Col>
        <Col md='8'>Password</Col>
    </Row>
            </Container > */