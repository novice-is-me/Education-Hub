import React from 'react'
import { Form, Button } from 'react-bootstrap'

const FormComponent = () => {
  return (
    <Form className=' d-flex flex-column'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-warning fw-bold'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group> 

      <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPassword">
        <Form.Label className='text-warning fw-bold'>Message</Form.Label>
        <textarea name="" id=""></textarea>
      </Form.Group>
      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormComponent
