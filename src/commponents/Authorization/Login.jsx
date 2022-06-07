import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

import './style.css'

const EMAIL_regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_regExp = /^[0-9a-zA-Z]{8,}$/;

const Login = () => {
    const sendData = async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            url: 'http://decadal.net/api/v1/login',
            body: data,
            headers: {
                "Content-type": "application/json"
            },
        })
        if (!response.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`)
        }
        return await response.json()
    }
    const sendSignUp = () => {
        const signUpForm = document.querySelector('.button_class')
        const data = {
            "email": email,
            "password": password
        };
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const params = useParams()
    const id = params.id;
    const navigate = useNavigate();

    const changeEmailHandler = (e) => {
        setEmail(e);
        validationEmail(e);
    }

    const changePaswordHandler = (e) => {
        setPassword(e);
        validationPassword(e);
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

    const goToMain = (e) => {
        e.preventDefault();
        !email && setEmailError('Email cannot be empty')
        !password && setPasswordError('Password cannot be empty')
        if (email && !emailError && password && !passwordError) {
            navigate(`/Main/`)
        }
    }


    return (
        <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form
                id='form_login'
                className='rounded p-6 p-sm-4'
            >
                <Form.Group
                    className='mb-3'
                    controlId='formBasicEmail'
                >
                    {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                    <Form.Control
                        onChange={e => changeEmailHandler(e.target.value)}
                        value={email}
                        name='email'
                        type='email'
                        placeholder='Enter Email'
                    />
                </Form.Group>

                <Form.Group
                    className='mb-3'
                    controlId='formBasicPassword'
                >
                    {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                    <Form.Control
                        onChange={e => changePaswordHandler(e.target.value)}
                        value={password}
                        type='password'
                        name='password'
                        placeholder='Enter password'
                    />
                </Form.Group>

                <Button
                    onClick={e => goToMain(e)}
                    variant='primary'
                    type='submite'
                    className='button_class'
                >
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login
