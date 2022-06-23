/* import React from 'react'
import { Button, Form, Tab, Tabs } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

const Closed = () => {
    const params = useParams()
    const id = params.id;
    const navigate = useNavigate();
    return (
        <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form id='confirm_order' className='rounded p-5 p-sm-5'>
                <h3 className='text_orders'>Orders</h3>
                <Form.Group className="mb-3">
                    <div className='active_button'>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab
                                eventKey="home"
                                title="Active"
                            >
                                Active
                            </Tab>

                            <Tab
                                eventKey="available"
                                title="Available"
                            >
                                Available
                            </Tab>
                            <Tab
                                eventKey="closed"
                                title="Closed"
                            >
                                Closed
                            </Tab>
                        </Tabs>
                    </div>
                    <Form.Control className='active_input' placeholder="3 Medical Aid, 50L Fuel, 15 Warm." disabled />
                    <Button variant="outline-primary" className='closed_button_share'>Share</Button>{' '}
                </Form.Group>
            </Form>
        </div>
    )
}

export default Closed */