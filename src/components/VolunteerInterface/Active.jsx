import React from 'react'
import { useState } from 'react'
import { Button, Col, Container, Form, Row, Tab, Tabs } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

import './styleActive.css'
const Active = () => {
    const setActive = ({ isActive }) => isActive ? 'active-link' : '';
    const [active, SetActive] = useState('home')
    const navigate = useNavigate();
    return (
        <div className='navbar_volunteer'>
            <header className='header_commander'>Profile</header>
            <div class="list-group" className='navbar_menu'>
                <NavLink to='/main/' className={setActive}>
                    Home</NavLink>
                <NavLink to='/' className={setActive}>
                    Exit</NavLink>
            </div>
            <div className="block_3">
                <Form
                    className='Form_size'
                >
                    <h3 className='text_orders'>Orders</h3>
                    <Form.Group className="mb-3">
                        <div className='active_button'>
                            <Tabs
                                activeKey={active}
                                onSelect={k => SetActive(k)}
                                id="uncontrolled-tab-example"
                                className="mb-1"
                            >
                                <Tab
                                    eventKey="home"
                                    title="Active"
                                >
                                    <Form.Control
                                        className='active_input'
                                        placeholder="3 Medical Aid, 50L Fuel, 15 Warm."
                                        disabled />
                                    <Container className='active_action'>
                                        <Row>
                                            <Col>
                                                <Button
                                                    onClick={async e => {
                                                        navigate(`/notes/`)
                                                    }}
                                                    variant="outline-info"
                                                >
                                                    Notes
                                                </Button>{' '}
                                            </Col>
                                            <Col>
                                                <Button
                                                    variant="outline-primary"
                                                >
                                                    Share
                                                </Button>{' '}
                                            </Col>
                                            <Col>
                                                <Button
                                                    variant="outline-secondary"
                                                >
                                                    Refuse
                                                </Button>{' '}
                                            </Col>
                                        </Row>
                                    </Container>
                                </Tab>
                                <Tab
                                    className='tab_2'
                                    eventKey="available"
                                    title="Available"
                                >
                                    <Form.Control
                                        className='active_input'
                                        placeholder="3 Medical Aid, 50L Fuel, 15 Warm."
                                        disabled
                                    />
                                    <Button
                                        variant="outline-success"
                                        className='accept_available'
                                    >
                                        Accept
                                    </Button>{' '}
                                    <div className='order_filling2'>
                                        <Form.Control
                                            className='active_input'
                                            placeholder="3 Medical Aid, 50L Fuel, 15 Warm."
                                            disabled
                                        />
                                        <Button
                                            variant="outline-success"
                                            className='accept_available'
                                        >
                                            Accept
                                        </Button>{' '}
                                    </div>
                                </Tab>
                                <Tab
                                    eventKey="closed"
                                    title="Closed"
                                >
                                    <Form.Control
                                        className='active_input'
                                        placeholder="3 Medical Aid, 50L Fuel, 15 Warm."
                                        disabled
                                    />
                                    <Button
                                        variant="outline-primary"
                                        className='closed_button_share'
                                    >
                                        Share
                                    </Button>{' '}
                                </Tab>
                            </Tabs>
                        </div>
                    </Form.Group>
                </Form>
            </div >
        </div>
    )
}

export default Active