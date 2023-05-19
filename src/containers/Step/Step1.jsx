import React, { useContext } from 'react'

import { InputSet } from '../../components'
import { FormContext } from '../../context'

const Step1 = () => {

  const { datas } = useContext(FormContext)

  // begining of every placeholder text
  const ph = "Input Your"

  return (
    <form>
      <div className="flexed form-row">
        <InputSet
          label="First Name"
          placeholder={ph+" First Name"}
          name="firstName"
          value={datas.firstName}
        />
        <InputSet
          label="Last Name"
          placeholder={ph+" Last Name"}
          name="lastName"
          value={datas.lastName}       
          />
      </div>
      <div className="flexed form-row">
        <InputSet
          label="Email"
          placeholder={ph+" Email"}
          name="email"
          value={datas.email}       
        />
        <InputSet
          label="Phone Number"
          placeholder={ph+" Phone Number"}
          name="phone"
          value={datas.phone}
        />
      </div>
      <div className="flexed form-row">
        <InputSet
          label="Password"
          placeholder={ph+" Your Password"}
          type="password"
          name="password" 
          value={datas.password}        
        />
        <InputSet
          label="Confirm password"
          placeholder="Confirm Password"
          type="password"
          name="password"
          value={datas.confirmPassword} 
        />
      </div>
    </form>
  )
}

export default Step1
