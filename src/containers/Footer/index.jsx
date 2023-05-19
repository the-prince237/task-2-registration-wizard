import React, { useContext } from 'react'

import { SlArrowLeft } from 'react-icons/sl'

import { StepButton } from '../../components'
import { FormContext } from '../../context'

import steps from '../../datas/steps'

import './style.css'

const Footer = () => {
  const { currentStep, goToNextStep, goToPrevStep } = useContext(FormContext)

  return (
    <footer className='section'>
      <a href='#'>
        <SlArrowLeft />
        <p>Back To Login</p>
      </a>
      <nav>
        {(steps.length > 1 && currentStep > 0) &&
          <StepButton
            text="Previous Step"
            type="prev"
            handleClick={goToPrevStep}
          />
        }
        {(steps.length > 1 && currentStep < steps.length - 1) &&
          <StepButton
            text='Next Step'
            type="next"
            handleClick={goToNextStep}
          />
        }
      </nav>
    </footer>
  )
}

export default Footer
