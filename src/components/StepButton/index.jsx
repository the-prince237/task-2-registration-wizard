import React from 'react'

import './style.css'

const StepButton = ({text, type, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

export default StepButton
