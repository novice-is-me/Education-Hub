import React from 'react'
import { Card } from 'react-bootstrap'

const FeaturedCard = ({title, text, img}) => {
  return (
    <Card className=' border-warning border-primary featured-card'>
      <div className=' h-50 overflow-hidden'>
        <img src={img} alt="" className='img-fluid h-100 w-100' /> 
      </div>
      <Card.Body className=' text-center'>
        <Card.Title className=' gen-title fw-bold'>{title}</Card.Title>
        <Card.Text className=' gen-text'>{text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default FeaturedCard
