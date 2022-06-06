import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import './style.css'
const Active = () => {
    const params = useParams()
    const id = params.id;
    const navigate = useNavigate();
    return (
        <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form id='confirm_order' className='rounded p-5 p-sm-5'>
                <h3 className='text_orders'>Orders</h3>
                <Form.Group className="mb-3">
                    <div className='active_button'>
                        <Button variant="outline-primary">Active</Button>{' '}
                        <Button
                            onClick={async e => {
                                navigate(`/VolunteerInterface/Available/`)
                            }}
                            variant="outline-primary">Available</Button>{' '}
                        <Button
                            onClick={async e => {
                                navigate(`/VolunteerInterface/Closed/`)
                            }}
                            variant="outline-primary">Closed</Button>{' '}
                    </div>
                    <Form.Control className='active_input' placeholder="3 Medical Aid, 50L Fuel, 15 Warm." disabled />
                    <Container className='active_action'>
                        <Row>
                            <Col><Button
                                onClick={async e => {
                                    navigate(`/notes/`)
                                }}
                                variant="outline-info">Notes</Button>{' '}</Col>
                            <Col><Button variant="outline-primary">Share</Button>{' '}</Col>
                            <Col><Button variant="outline-secondary">Refuse</Button>{' '}</Col>
                        </Row>
                    </Container>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Active