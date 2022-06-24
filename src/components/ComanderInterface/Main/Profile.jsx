import React, { useState } from 'react'
import { Form, InputGroup, FormControl, Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom';
import './styleCustomer.css'
const Profile = () => {
    const setActive = ({ isActive }) => isActive ? 'active-link' : '';
    const navigate = useNavigate();

    return (
        <div className='navbar_customer' >
            <header className='header_commander'>Profile</header>
            <div class="list-group" className='navbar_menu'>
                <NavLink to='/main/' className={setActive}>
                    Home</NavLink>
                <NavLink to='/' className={setActive}>
                    Exit</NavLink>
            </div>
            <div className="block_3">
                <Form className='Form_size'>
                    <h3 className='center'>My Orders</h3>
                    <InputGroup className="mb-4 p-2">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group className='md-3' controlId='formBasicCheckbox'>
                                    <Form.Check type='checkbox' label='CONFIRM' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <ButtonGroup aria-label="Basic example" className='button-top'>
                                    <Button>CANCEL</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className='md-3' controlId='formBasicCheckbox'>
                                    <Form.Check type='checkbox' />
                                </Form.Group>
                            </Col>
                            <Col xs={10}>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                    <Button variant="success" className='button_add'>+</Button>{' '}
                </Form>
            </div>
        </div>
    )
}
export default Profile