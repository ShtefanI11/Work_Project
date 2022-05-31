import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './style.css'
const SignUp = () => {
    return (
        <div className='color-overlay d-flex justify-content-center align-items-center'>
            <Form className='rounded p-4 p-sm-3'>
                <Form.Label>Who?</Form.Label>
                <Form.Select className='mb-3'>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
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
                    <Form.Check type='checkbox' label='I agree to the processing of personal data' />
                </Form.Group>
                <Button variant='primary' type='submite'>
                    SingUp
                </Button>
            </Form>
        </div>
    )
}

export default SignUp