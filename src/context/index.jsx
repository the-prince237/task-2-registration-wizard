import React, { useState, createContext } from 'react'

export const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [datas, setDatas] = useState()
  const [currentStep, setCurrentStep] = useState(0)

  function goToNextStep() {
    setCurrentStep((step) => (step + 1))
  }

  function handleChange(e) {
    const { name, value } = e.target
    setDatas((datas) => ({ ...datas, [name]: value }))
  }

  function goToPrevStep() {
    setCurrentStep((step) => (step - 1))
  }

  function goToStep(x) {
    setCurrentStep(x)
  }

  function submit() {
    console.log({userData: datas})
  }

  return (
    <FormContext.Provider value={{
      datas,
      handleChange,
      currentStep,
      goToNextStep,
      goToPrevStep,
      goToStep,
      submit
    }}>
      {children}
    </FormContext.Provider>
  )
}