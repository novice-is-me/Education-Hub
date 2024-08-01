import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TitleComponent from '../components/TitleComponent'
import FormComponent from '../components/FormComponent'

const Contact = () => {
  return (
    <Container fluid className=' p-0 bg-black' id='contact'>
        <TitleComponent title='Contact Us' value={2}/>
        <Row className=' d-flex  align-items-center p-5'> 
            <Col className=' col-12 col-md-6 p-md-5 p-3'>
                <FormComponent/>
            </Col>
            <Col className=' col-md-6 d-none d-md-block'>
                <div className=' w-100 overflow-hidden'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.8471920832!2d121.04553134439332!3d14.550729549761387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8eef441243d%3A0x4b1c29972e8861c9!2sBonifacio%20High%20Street!5e0!3m2!1sen!2sph!4v1722507985019!5m2!1sen!2sph" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Contact
