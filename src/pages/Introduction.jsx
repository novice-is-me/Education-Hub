import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { about } from '../data/data';
import { FaHandshake, FaLaptop, FaBookOpen, FaUsers } from 'react-icons/fa';

const Introduction = () => {
    const icons = [FaLaptop, FaHandshake, FaBookOpen, FaUsers];

    return (
        <Container fluid className=' p-0' id='introduction'>
            <Row className=' d-flex'>
                {about.map((item, i) => {

                    const iconColor = i % 2 === 0 ? 'white' : 'black'; 
                    const textColor = i % 2 === 0 ? 'white' : 'black';

                    const IconComponent = icons[i];  
                    return (
                            <Col className='col-12 col-md-3 p-0 intro-card' key={i}>
                                <div className={` h-100 p-5 text-center ${i % 2 === 0 ? 'bg-black' : 'bg-yellow'}
                                d-flex  flex-column justify-content-center align-items-center`}>
                                    <IconComponent size={50} color={iconColor}/>
                                    <div style={{color: textColor}}>
                                        <h3 className='gen-title'>{item.title}</h3>  
                                        <p className=' gen-text'>{item.text}</p>
                                    </div>
                                </div>
                            </Col>  
                    );
                })}
            </Row>
        </Container>
    )
}

export default Introduction
