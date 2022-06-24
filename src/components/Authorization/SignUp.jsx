import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import './style11.css'
import AuthorizationNavbar from './NavbarAuthorization/AuthorizationNavbar';
import { getAndSetStorage } from '../utils/GetAndSetStorage';

const EMAIL_regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_regExp = /^[0-9a-zA-Z]{8,}$/;
const SignUp = () => {
    const sendRegistr = (e) => {
        e.preventDefault();
        !email && setEmailError('Email cannot be empty')
        !password && setPasswordError('Password cannot be empty')
        if (email && !emailError && password && !passwordError) {
            /* const inviteCode = fetch('http://decadal.net/api/v1/invite', { 
                method: 'POST', 
                headers: { 
                    'Content-Type': 'application/json', 
                }, 
                body: JSON.stringify({ 
                    code: code 
                } 
                ), 
            }).then(function (res) { 
                if (res.status === 201) { 
                    res.json().then(function (result) { 
                        setCode(result.code) 
                    }) 
                } 
            }) */

            fetch("http://decadal.net/api/v1/signup", {
                method: 'POST',
                cors: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    code: code,
                    type: usersType
                }),
            })

                .then((res) => {
                    if (res.status === 201) {
                        const user = {
                            name: name,
                            email: email,
                            password: password,
                            code: code,
                            type: usersType
                        }

                        getAndSetStorage(user)
                        navigate(`/login`)
                    }
                    else {
                        res.json().then(function (res) {
                            setErrors(res.detail)
                        })
                    }
                })
        }

    }


    let url
    url = window.location.search;
    url = url.substring(url.lastIndexOf('=') + 1, url.length);

    const navigate = useNavigate()
    const [errors, setErrors] = useState('')
    const [usersType, SetUsersType] = useState('customer')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const name = email.split('@')[0]
    const [code, setCode] = useState(url)
    const [codeError, setCodeError] = useState('')
    const [posts, setPosts] = useState([])
    const { codeSymbols } = useParams();
    const [newCode, setNewCode] = useState(codeSymbols);
    const { codeUrl } = useParams();
    const [startCode, setStartCode] = useState(codeUrl);
    let [searchParams, setSearchParams] = useSearchParams();


    const changeEmailHandler = (e) => {
        const value = e.target.value
        setEmail(value);
        validationEmail(value);
    }

    const changePasswordHandler = (e) => {
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

    const goToMain = (e) => {
        e.preventDefault();
        !email && setEmailError('Email cannot be empty')
        !password && setPasswordError('Password cannot be empty')
        if (email && !emailError && password && !passwordError) {
            navigate(`/main/`)
        }
    }

    /* useEffect(() => {
        code && console.log(code)
    }, [code]) */

    let newWindow;
    function assignWindow() {
        if (newWindow) {
            newWindow.location.replace('http://localhost:3000/signup?code=');
            newWindow.focus();
        }
    }


    /* useEffect(() => {
        localStorage.setItem('userType', usersType)
    }, [usersType]) */
    return (
        <>
            <AuthorizationNavbar />
            <div className='d-flex justify-content-center align-items-center'>

                <Form className='rounded p-4 p-sm-5'>
                    <img
                        className='img_signup'
                    />
                    <Form.Label>Who?</Form.Label>
                    <Form.Select className='mb-3'
                        onChange={e => SetUsersType(e.target.value)}
                        value={usersType}
                    >
                        <option value="customer" >Customer</option>
                        <option value="volunteer" >Volunteer</option>
                    </Form.Select>
                    <Form.Group
                        className='mb-3'
                        controlId='formBasicEmail'
                    >
                        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                        <Form.Control
                            onChange={changeEmailHandler}
                            value={email}
                            name='email'
                            type='email'
                            placeholder='Enter Email' />
                    </Form.Group>
                    <Form.Group
                        className='mb-3'
                        controlId='formBasicPassword'
                    >
                        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                        <Form.Control
                            onChange={changePasswordHandler}
                            value={password}
                            type='password'
                            name='password'
                            placeholder='Enter password' />

                    </Form.Group>
                    <Form.Group
                        className='mb-3'
                        controlId='formBasicCode'
                    >
                        {codeError && <div style={{ color: 'red' }}>{codeError}</div>}
                        <Form.Control
                            value={code}
                            type='text'
                            placeholder='Code'
                            onChange={e => setCode(e.target.value)}
                        />
                    </Form.Group>


                    <div style={{ color: 'red' }}>{errors}</div>
                    <Button
                        onClick={sendRegistr}
                        variant='primary'
                        className='button_class'
                    >
                        SingUp
                    </Button>
                </Form>
            </div>
        </>
    )
}
export default SignUp