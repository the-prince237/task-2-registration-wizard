import React, { useState, createContext } from 'react'
import { checkFields } from '../helpers/inputs'

export const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [datas, setDatas] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    brandName: "",
    brandType: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    taxIdNumber: "",
    doc1: "",
    doc2: "",
    doc3: ""
  })
  const [currentStep, setCurrentStep] = useState(0)

  function firstStepOk() {
    const { firstName, lastName, phone, email, password, confirmPassword } = datas
    const cf =  (checkFields({
      firstName, lastName, phone, email, password, confirmPassword
    }))

    if (!cf) {
      return cf
    }
    if (password === confirmPassword) {
      return true
    } else {
      alert("Both passwords have to be the same !")
      return false
    }
  }

  function secondStepOk() {
    const { brandType, brandName, streetAddress, city, zipCode, taxIdNumber, doc1, doc2, doc3 } = datas
    
    return checkFields({
      brandType, brandName, streetAddress, city, zipCode, taxIdNumber, doc1, doc2, doc3
    })
  }

  function goToNextStep() {
    let fieldsOk = false;

    switch (currentStep) {
      case 0:
        fieldsOk = firstStepOk()
        break;
      case 1:
        fieldsOk = secondStepOk()
        break;
      default:
        break;
    }

    fieldsOk && setCurrentStep((step) => (step + 1))
  }

  function handleChange(e) {
    const { name, value } = e.target
    setDatas((datas) => ({ ...datas, [name]: value }))
  }

  function handleChangeFile(e) {
    const { name, files } = e.target
    setDatas((datas) => ({ ...datas, [name]: files[0]?.name }))
  }

  function goToPrevStep() {
    setCurrentStep((step) => (step - 1))
  }

  function goToStep(x) {
    if (currentStep > x) {
      setCurrentStep(x)
    } else {
      let prevStepOk = false

      switch (x) {
        case 1:
          prevStepOk = firstStepOk()
          break;
        case 2:
          prevStepOk = secondStepOk()
          break;
        default:
          break;
      }

      prevStepOk && setCurrentStep(x)
    }
  }

  function submit() {
    console.log({userData: datas})
  }

  return (
    <FormContext.Provider value={{
      datas,
      handleChange,
      handleChangeFile,
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