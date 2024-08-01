import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container fluid className='home-img p-md-5' id='home'>
      <div className='text-center p-5 m-md-5'>
        <h1 className='title-text text-uppercase '>The Ultimate Hub  <br /> for Lifelong Learning.</h1>
        <div className=' px-5 mx-5'>
          <p className='sub-text'>Discover a world of knowledge at your fingertips, tailored to fuel your academic journey. From comprehensive resources to expert guidance, Scholar Zone is your ultimate partner in lifelong learning.</p>
        </div>
        <Button className='mt-4' href='#introduction'>Enroll Now!</Button>
      </div>
    </Container>
  ) 
}

export default Home
