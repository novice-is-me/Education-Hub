import React from 'react'

const TitleComponent = ({title, value}) => {
  return (
    <div className='pt-5 mt-5 text-center'>
      <h1 className={`title ${value % 2 === 0 ? 'text-warning' : 'text-black'}`}>{title}</h1>
      <div className=' border w-25 d-flex mx-auto my-3'></div>
    </div>
  ) 
}

export default TitleComponent
