import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import useRefreshToken from '../hooks/useRefreshToken'
import AuthorizationNavbar from './NavbarAuthorization/AuthorizationNavbar'

import './style11.css'

const EMAIL_regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_regExp = /^[0-9a-zA-Z]{8,}$/;

const Login = () => {

    const sendLogin = (e) => {
        e.preventDefault();
        !email && setEmailError('Email cannot be empty')
        !password && setPasswordError('Password cannot be empty')
        if (email && !emailError && password && !passwordError) {
            document.querySelector('#get-request .result');
            fetch('http://decadal.net/api/v1/login', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    identity: email,
                    password: password,
                }),
            })
                .then(function (res) {
                    if (res.status === 200) {
                        res.json().then(function (result) {
                            setAccessToken(result.token)
                            setAuth(result.token)
                            navigate(`/main/`)
                        })
                    } else {
                        res.json().then(function (res) {
                            setErrors(res.detail)
                        })
                    }
                })
        }
    }
    const { setAuth } = useContext(AuthContext)
    const [errors, setErrors] = useState('')
    const [token, setAccessToken] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    useEffect(() => {
        token && alert(token)
    }, [token])

    const params = useParams()
    const id = params.id;
    const navigate = useNavigate();

    const changeEmailHandler = (e) => {
        const value = e.target.value
        setEmail(value);
        validationEmail(value);
    }

    const changePaswordHandler = (e) => {
        const value = e.target.value
        setPassword(value);
        validationPassword(value);
    }

    const validationEmail = (e) => {
        if (!e) {
            setEmailError('');
            return;
        } else if (!EMAIL_regExp.test(e)) {
            setEmailError('Not correct email, should be like "example@gmail.com"')
        } else setEmailError('')
    }

    const validationPassword = (e) => {
        if (!e) {
            setPasswordError('');
            return;
        } else if (!PASSWORD_regExp.test(e)) {
            setPasswordError('Should contain at least 8 characters')
        } else setPasswordError('')
    }
    return (
        <>
            <AuthorizationNavbar />
            <div className="d-flex justify-content-center align-items-center">
                <Form
                    className='rounded p-4 p-sm-5'
                >
                    <img
                        className='img_login'
                        alt="" />
                    <Form.Group
                        className='mb-2 p-3'
                        controlId='formBasicEmail'
                    >
                        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                        <Form.Control
                            onChange={changeEmailHandler}
                            value={email}
                            name='email'
                            type='email'
                            placeholder='Enter Email'
                        />
                    </Form.Group>
                    <Form.Group
                        className='mb-5 p-3'
                        controlId='formBasicPassword'
                    >
                        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                        <Form.Control
                            onChange={changePaswordHandler}
                            value={password}
                            type='password'
                            name='password'
                            placeholder='Enter password'
                        />
                    </Form.Group>
                    <div id='get-request' style={{ color: 'red' }}>
                        <pre class='result'></pre>
                    </div>
                    <div style={{ color: 'red' }}>{errors}</div>
                    <Button
                        onClick={sendLogin}
                        variant='primary'
                        className='button_class'
                    >
                        Login
                    </Button>
                </Form>
            </div >
        </>
    )
}

export default Login