import React from 'react'
import TitleComponent from '../components/TitleComponent'
import { Col, Container, Row } from 'react-bootstrap'
import { resources } from '../data/data'
import ResourcesComponent from '../components/ResourcesComponent'

const Resources = () => {
  return (
    <Container fluid className=' p-0 bg-black pb-5' id='resources'> 
        <TitleComponent title='Resources' value={2}/>
        <Row className='p-5 gap-4 d-flex justify-content-center'>
            {resources.map((resource, i) => {
                return (
                    <Col className=' col-12 col-md-4'>
                        <ResourcesComponent title={resource.title} text={resource.text} key={i}/>
                    </Col>
                )
            })}
        </Row>
    </Container>
  )
}

export default Resources
