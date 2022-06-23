import React from 'react'
import { Form, InputGroup, FormControl, Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import CommanderNavbar from '../NavbarCommander/CommanderNavbar';
import './style.css'
const Profile = () => {
    const params = useParams();

    return (
        <>
            <CommanderNavbar />
            <div className='d-flex justify-content-center align-items-center'>
                <Form className='rounded p-5 p-sm-5'>
                    <Form.Label className='center'>My Orders</Form.Label>
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
        </>
    )
}
export default Profile