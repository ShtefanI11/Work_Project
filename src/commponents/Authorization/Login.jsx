import React, { useState } from 'react'
import './style.css'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email error! low symbols')
    const [passwordError, setPasswordError] = useState('Password cannot be empty')

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Not correct email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Password must be longer than 3 and less than 10')
            if (!e.target.value) {
                setPasswordError('Password cannot be empty')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const params = useParams()
    const id = params.id;
    const navigate = useNavigate();
    return (
        <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form id='form_login' className='rounded p-4 p-sm-3'>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                    <Form.Control onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type='email' placeholder='Enter Email' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    {(passwordError && passwordDirty) && <div style={{ color: 'red' }}>{passwordError}</div>}
                    <Form.Control onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type='password' name='password' placeholder='Password' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Check type='checkbox' label='Remember Me' />
                </Form.Group>
                <Button onClick={async e => {
                    navigate(`/main/`)
                }} variant='primary' type='submite'>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login