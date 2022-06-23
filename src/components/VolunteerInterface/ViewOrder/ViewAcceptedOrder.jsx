import React from 'react'
import { Button, ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import BootstrapDatePickerComponent from '../../Bootstrap/Bootstrap'
import './style.css'
const ViewAcceptedOrder = () => {
    const params = useParams()
    const id = params.id;
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    return (
        <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form id='view_accept_position' className='rounded p-5 p-sm-5'>
                <div className='commander_text_position'>
                    <h3>Order OR-32434</h3>
                    <h4>3 Medical Aid, 50L Fuel, 15 Warmvisors</h4>
                </div>
                <Col className='right'>Valid till...<BootstrapDatePickerComponent /></Col>
                <div className='commander_text_position'>
                    <h4>Commander</h4>
                    <h4>An***ew S*****V</h4>
                    <h4>Volunteers</h4>
                </div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} />
                    <Col><Button
                        onClick={async e => {
                            navigate(`/notes/`)
                        }}
                        className='viewaccept_notes'
                        variant="outline-info">Notes</Button>{' '}</Col>
                    <Form.Control className='viewaccept_textarea' as="textarea" rows={3} />
                </Form.Group>
                <Container className='viewaccept_button'>
                    <Row>
                        <Col><ButtonGroup aria-label="Basic example" >
                            <Button onClick={goBack}>{`<`} Back</Button>
                        </ButtonGroup></Col>
                        <Col><Button variant="outline-secondary">Refuse</Button>{' '}</Col>
                        <Col><Button variant="outline-primary">Share</Button>{' '}</Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}

export default ViewAcceptedOrder