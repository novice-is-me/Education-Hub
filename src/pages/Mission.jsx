import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TitleComponent from '../components/TitleComponent'
import mission from '../assets/mission.png'

const Mission = () => {
  return (
    <Container fluid className=' p-0 bg-warning pb-5' id='mission'>
       <Row>
            <Col className=' col-12 col-md-6 d-none d-md-block'>
                <img src={mission} alt="" className=' border-bottom' />
            </Col>
            <Col className=' col-md-6 d-flex flex-column justify-content-center gap-5'> 
                <TitleComponent title='Our Mission' value={1}/>
                <div className='px-md-5 text-center mx-5 mx-md-0'>
                    <p className=' gen-text fw-bold fst-italic'>"At Scholar Zone, our mission is to empower learners of all ages by providing a comprehensive range of educational resources, innovative tools, and a supportive community. We are dedicated to fostering academic excellence, personal growth, and lifelong learning through accessible and high-quality content that inspires curiosity and drives success."</p>
                </div>
            </Col>
       </Row>
    </Container>
  )
}

export default Mission
