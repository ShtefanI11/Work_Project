import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import './style.css'
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email error! low symbols')
    const [passwordError, setPasswordError] = useState('Password cannot be empty')

    const [code, setCode] = useState('')
    const [codeDirty, setCodeDirty] = useState(false)
    const [codeError, setCodeError] = useState('Error code!')

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

    const codeHandler = (el) => {
        setCode(el.target.value)
        if (el.target.value.length > 6) {
            setCodeError('Code must be 6 characters long')

        } else {
            setCodeError('')
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
            case 'code':
                setCodeDirty(true)
                break
        }
    }

    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();

    return (
        <div className='color-overlay d-flex justify-content-center align-items-center'>
            <Form className='rounded p-4 p-sm-3'>
                <Form.Label>Who?</Form.Label>
                <Form.Select className='mb-3'>
                    <option>Open this select menu</option>
                    <option value="1">Commander</option>
                    <option value="2">Volunteer</option>
                </Form.Select>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                    <Form.Control onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type='email' placeholder='Enter Email' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    {(passwordError && passwordDirty) && <div style={{ color: 'red' }}>{passwordError}</div>}
                    <Form.Control onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type='password' name='password' placeholder='Password' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Check type='checkbox' label='I agree to the processing of personal data' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicCode'>
                    {(codeError && codeDirty) && <div style={{ color: 'red' }}>{codeError}</div>}
                    <Form.Control onChange={e => codeHandler(e)} value={code} onBlur={e => blurHandler(e)} type='code' name='code' placeholder='Code' />
                </Form.Group>
                <Button variant='primary' type='submite'
                    onClick={async event => {
                        navigate(`/Main/`);
                    }}
                >
                    SingUp
                </Button>
            </Form>
        </div>
    )
}
export default SignUp