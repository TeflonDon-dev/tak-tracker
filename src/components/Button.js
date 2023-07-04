import React from 'react'

const Button = ({text,color,handleShowTask}) => {
  return (
      <button onClick={handleShowTask} style={{backgroundColor:color}} className='btn'>{ text}</button>
  )
}

export default Button