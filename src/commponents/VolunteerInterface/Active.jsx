import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './style.css'
const Active = () => {
    return (
        <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form id='confirm_order' className='rounded p-5 p-sm-5'>
                <h3 className='text_orders'>Orders</h3>
                <Form.Group className="mb-3">
                    <div className='active_button'>
                        <Button variant="outline-primary">Active</Button>{' '}
                        <Button variant="outline-primary">Available</Button>{' '}
                        <Button variant="outline-primary">Closed</Button>{' '}
                    </div>
                    <Form.Control className='active_input' placeholder="3 Medical Aid, 50L Fuel, 15 Warm." disabled />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Active