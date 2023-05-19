import React, { useContext }  from 'react'
import { FormContext } from '../../context'

import Step from '../Step'

import steps from '../../datas/steps'

import './style.css'

const Form = () => {
  const { goToStep } = useContext(FormContext)

  return (
    <div className='section form-wrapper'>
      <nav>
        {steps.map(({ name, label }, index) => (
          <div
            key={`${name}-${index}`}
          >
            <div></div>
            <button onClick={() => goToStep(index)}> {label}</button>
          </div>
        ))}
      </nav>
      <div>
        <Step />
      </div>
    </div>
  )
}

export default Form
