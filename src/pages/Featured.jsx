import React from 'react'
import { Container } from 'react-bootstrap'
import { featured } from '../data/data'
import FeaturedCard from '../components/FeaturedCard'
import TitleComponent from '../components/TitleComponent'

const Featured = () => {
  return (
    <Container fluid className=' p-0 bg-black' id='featured'>
        <TitleComponent title='Featured Courses' value={2}/>
        <div className='d-flex p-5 gap-3 flex-wrap justify-content-center'>
            {featured.map((course, i) => {
                return (
                    <FeaturedCard img={course.img} title={course.title} text={course.text}/>
                )
            })} 
        </div>
    </Container> 
  )
}

export default Featured
