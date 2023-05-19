import React, { useContext } from 'react'

import { FormContext } from '../../context'

import steps from '../../datas/steps'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

import './style.css'

const Step = () => {
  const { currentStep } = useContext(FormContext)

  return (
    <div className='step'>
      <div className="step--header">
        <h2>Step {currentStep + 1}</h2>
        <h1>{steps[currentStep].title}</h1>
        <h3>{steps[currentStep].description}</h3>
      </div>
      <>
        {
          (currentStep === 0 && <Step1 />) ||
          (currentStep === 1 && <Step2 />) ||
          (currentStep === 2 && <Step3 />)
        }
      </>
    </div>
  )
}

export default Step
