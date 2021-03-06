import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, NavLink, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useMutation } from 'react-query';
import './style.css'
const EMAIL_regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_regExp = /^[0-9a-zA-Z]{8,}$/;
const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    /* let [searchParams, setSearchParams] = useSearchParams(); */
    /* useEffect(() => {
        fetch(`http://localhost:3000/signup/?codeUrl=/codeSymbols`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => setStartCode(data))
    }) */


    const changeEmailHandler = (e) => {
        setEmail(e);
        validationEmail(e);
    }

    const changePaswordHandler = (e) => {
        setPassword(e);
        validationPassword(e);
    }

    /* const changeCodeHandler = (e) => {
        setCode(e);
        validationCode(e);
    } */

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

    /* const validationCode = (e) => {
        if (!e) {
            setCodeError('');
            return;
        } else if (!CODE_regExp.test(e)) {
            setCodeError('Should contain at more 6 characters')
        } else setCodeError('')
    } */


    /* const goToMain = (e) => {
        e.preventDefault();
        !email && setEmailError('Email cannot be empty')
        !password && setPasswordError('Password cannot be empty')
        if (email && !emailError && password && !passwordError) {
            navigate(`/main/`)
        }
    } */
    /* let newWindow;
    function assignWindow() {
        if (newWindow) {
            newWindow.location.replace('http://localhost:3000/signup?code=');
            newWindow.focus();
        }
    } */
    /* let url
    url = window.location.search;
    url = url.substring(url.lastIndexOf('=') + 1, url.length); */

    /* const sendData = async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            url: 'http://decadal.net/api/v1/signup',
            body: data,
            headers: {
                "Content-type": "application/json"
            },
        })
        if (!response.ok) {
            throw new Error(`???????????? ???? ???????????? ${url}, ???????????? ???????????? ${response}`)
        }
        return await response.json()
    }
    const sendSignUp = () => {
        const signUpForm = document.querySelector('.button_class')
        const data = {
            "name": email,
            "email": email,
            "password": password
        };
    }  */

    return (
        <div className='color-overlay d-flex justify-content-center align-items-center'>

            <Form className='rounded p-4 p-sm-3'>

                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                    <Form.Control
                        onChange={e => changeEmailHandler(e.target.value)}
                        value={email}
                        name='email'
                        type='email'
                        placeholder='Enter Email' />
                </Form.Group>
                {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                <Form.Control
                    onChange={e => changePaswordHandler(e.target.value)}
                    value={password}
                    type='password'
                    name='password'
                    placeholder='Password' />

                <Button
                    className='button_class'
                    variant='primary'
                    type='submite'
                    onClick={async (e) => {
                        console.log(email);
                        try {
                            await axios.post({
                                url: "http://decadal.net/api/v1/signup",
                                headers: {
                                    "Content-type": "application/json"
                                },

                                body: JSON.stringify({
                                    name: '',
                                    email,
                                    password

                                }),
                            }).then(({ data }) => {
                                return data;
                            });
                        } catch (e) {
                            console.log("Sending error", e);
                        }
                    }}
                >
                    SingUp
                </Button>
            </Form>
        </div>
    )
}
export default SignUp