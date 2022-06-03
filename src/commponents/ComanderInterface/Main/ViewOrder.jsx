
import { ButtonGroup, Col, Container, Form, Row, Button } from 'react-bootstrap'
import React from 'react';
import './style.css'
import BootstrapDatePickerComponent from '../../Bootstrap/Bootstrap';
const ViewOrder = () => {
    return (
        <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form className='rounded p-5 p-sm-5'>
                <h2>3 Medical Aid, 50L Fuel, 15 Warmvisors</h2>
                <Container>
                    <Row>
                        <Col className='right'>Valid till...<BootstrapDatePickerComponent /></Col>
                    </Row>
                    <Row>
                        <Col className='center'>Volunteers</Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Col><Form.Control as="textarea" rows={3} /></Col>
                        </Form.Group>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <ButtonGroup aria-label="Basic example" >
                                <Button>{`<`} BACK</Button>
                            </ButtonGroup>
                        </Col>
                        <Col>
                            <ButtonGroup aria-label="Basic example">
                                <Button className='button_cancel_vieworder'>CANCEL</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div >
    )
}


export default ViewOrder