import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import TitleComponent from '../components/TitleComponent'
import category1 from '../assets/category1 .jpg'
import category2 from '../assets/category2 .jpg' 
import category3 from '../assets/category3.jpg'

const Categories = () => { 
  return (
    <Container fluid className=' p-0 bg-warning pb-5' id='categories'>
        <TitleComponent title='Categories' value={1}/>
        <div className=' d-flex justify-content-center  mt-5 mb-5'>
            <Carousel className='carousel-card'>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={category2}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5 className=" gen-title">CISCO Networking</h5>
                        <p className="gen-text">Learn to configure and manage Cisco networks for efficient and secure communication</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src={category1}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5 className=" gen-title">Machine Learning</h5>
                        <p className="gen-text">Create algorithms that enable computers to learn from data and make predictions.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={category3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5 className=" gen-title">Robotics</h5>
                        <p className="gen-text">Master the design and programming of robots to automate tasks and solve problems.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
        </div>
    </Container>
  )
}

export default Categories
