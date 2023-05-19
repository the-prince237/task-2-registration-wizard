import React, { useContext, useEffect, useState }  from 'react'
import { FormContext } from '../../context'

import Step from '../Step'

import steps from '../../datas/steps'

import './style.css'

const Form = () => {
  const { goToStep, currentStep } = useContext(FormContext)
  
  const [scrolled, setScrolled] = useState(false)

  //scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 120 ? setScrolled(true) : setScrolled(false)
    })
  })

  return (
    <div className='section form-wrapper'>
      <nav className={`nav ${scrolled && "scrolled-nav"}`}>
        {steps.map(({ name, label }, index) => (
          <div
            onClick={() => goToStep(index)}
            key={`${name}-${index}`}
            className={`form-wrapper--nav-step ${currentStep === index && "form-wrapper--nav-step__current"}`}
          >
            <div className='currStep-bg'></div>
            <div className="form-wrapper--nav-step--content">
              <div className='currStep-number'>{index+1}</div>
              <h2>{label}</h2>
            </div>
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
