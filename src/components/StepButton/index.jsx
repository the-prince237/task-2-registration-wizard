import React from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

import './style.css'

const StepButton = ({text, type, handleClick}) => {
  return (
    <button
      onClick={handleClick}
      className={`step-btn step-btn__${type}`}
    >
      {type === "prev" && <SlArrowLeft />}
      <p>{text}</p>
      {type === "next" && <SlArrowRight />}
    </button>
  )
}

export default StepButton
