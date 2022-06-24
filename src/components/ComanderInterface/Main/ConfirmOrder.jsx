import React from 'react'
import { Button, ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap'
import './styleCustomer.css'
const ConfirmOrder = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <Form id='confirm_order' className='rounded p-4 p-sm-3'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control type='text' placeholder='Спасибо, за заказ. Наш youtube: https://www.youtube.com/watch?v=nmC6_2oYqY4&list=LL&index=58&ab_channel=Skriptonit-Topic' rows={4} readOnly />
                    </Form.Group>
                    <Container>
                        <Row>
                            <Col md={{ span: 4, offset: 4 }}>
                                <ButtonGroup aria-label="Basic example">
                                    <Button className='button_confirm'>Confirm</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Container>
                    +ADD Photo
                </Form>
            </div>
        </>
    )
}

export default ConfirmOrder