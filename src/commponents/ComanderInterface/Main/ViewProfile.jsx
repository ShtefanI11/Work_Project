import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import './style.css'
const ViewProfile = () => {
    return (
        <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form id='viewprofile' className='rounded p-5 p-sm-5'>
                <Container>
                    <Row className='social_position'>
                        <Col><h5>129 Karpatska Brihada</h5></Col>
                    </Row>
                    <Row className='social_position2'>
                        <Col><h5>Telegram:<a href="">...</a></h5></Col>
                    </Row>
                    <Row className='social_position3'>
                        <Col><h5>SIGNAL:<a href="">...</a></h5></Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}

export default ViewProfile