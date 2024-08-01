import React from 'react'
import { Accordion } from 'react-bootstrap'

const ResourcesComponent = ({title, text}) => {
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='gen-title fw-bolder'>{title}</Accordion.Header>
        <Accordion.Body>
            <ul> 
                {text.map((item, i) => {
                    return <li className='gen-text' key={i}>{item}</li>
                })} 
            </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default ResourcesComponent
