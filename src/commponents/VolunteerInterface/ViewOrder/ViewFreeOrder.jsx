import React from 'react'
import { Button, ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import BootstrapDatePickerComponent from '../../Bootstrap/Bootstrap'
import './style.css'
const ViewFreeOrder = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    return (
        <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form id='view_free_position' className='rounded p-5 p-sm-5'>
                <div className='commander_text_position'>
                    <h3>Order OR-32434</h3>
                    <h5>Subject:</h5>
                </div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Col><Form.Control as="textarea" rows={3} /></Col>
                    <Col className='right'>Valid till...<BootstrapDatePickerComponent /></Col>
                </Form.Group>
                <div className='commander_text_position'>
                    <h3>Commander</h3>
                    <h3>An****ew S*****V</h3>
                </div>
                <Col><Form.Control as="textarea" rows={3} /></Col>
                <Container>
                    <Row>
                        <Col><ButtonGroup aria-label="Basic example" >
                            <Button onClick={goBack}>{`<`} Back</Button>
                        </ButtonGroup></Col>
                        <Col><Button variant="outline-primary">Confirm</Button>{' '}</Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}

export default ViewFreeOrder