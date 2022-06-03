import React from 'react'
import { Button, ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap'
import BootstrapDatePickerComponent from '../../Bootstrap/Bootstrap'
import './style.css'
const CreateOrder = () => {
    return (
        <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form id='window_size' className='rounded p-5 p-sm-5'>
                <Container>
                    <h5>Subject</h5>
                    <Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Col><Form.Control as="textarea" rows={3} /></Col>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col className='right'>Valid till...<BootstrapDatePickerComponent /></Col>
                    </Row>
                </Container>
                <Container className='button-position'>
                    <Row>
                        <Col md={4}>
                            <ButtonGroup aria-label="Basic example">
                                <Button>{`<`} BACK</Button>
                            </ButtonGroup>
                        </Col>
                        <Col md={{ span: 4, offset: 4 }}>
                            <ButtonGroup aria-label="Basic example">
                                <Button className='button-cancel'>CREATE</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}

export default CreateOrder