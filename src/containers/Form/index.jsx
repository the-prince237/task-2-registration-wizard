import React, { useContext, useEffect, useState }  from 'react'

import {  MdPhone } from 'react-icons/md'

import { FormContext } from '../../context'

import Step from '../Step'

import steps from '../../datas/steps'

import './style.css'
import { Logo } from '../../components'

const Form = () => {
  const { goToStep, currentStep } = useContext(FormContext)
  
  const [scrolled, setScrolled] = useState(false)

  //scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 70 ? setScrolled(true) : setScrolled(false)
    })
  })

  return (
    <div className='section form-wrapper'>
      <div className={`form-wrapper--header ${scrolled && "form-wrapper--header__scrolled"}`}>
        <div className='form-wrapper--header-top'>
          <Logo />
          <h2>Create New Account</h2>
          <MdPhone />
        </div>
        <nav className={`nav ${scrolled ? "scrolled-nav" : ""}`}>
          {steps.map(({ name, label }, index) => (
            <div
              onClick={() => goToStep(index)}
              key={`${name}-${index}`}
              className={`form-wrapper--nav-step ${currentStep === index && "form-wrapper--nav-step__current"}`}
            >
              <div className='currStep-bg'></div>
              <div className="form-wrapper--nav-step--content">
                <h2 className='currStep-number'>{index+1}</h2>
                <h2 className='step-label'>{label}</h2>
              </div>
            </div>
          ))}
        </nav>
      </div>
      <div className={scrolled ? "step-wrapper__scrolled" : ""}>
        <Step />
      </div>
    </div>
  )
}

export default Form
