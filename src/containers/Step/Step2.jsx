import React, { useContext } from 'react'

import { InputSet } from '../../components'
import { FormContext } from '../../context'

const Step2 = () => {

  const { datas } = useContext(FormContext)

  // begining of every placeholder text
  const ph = "Input Your"

  return (
    <form>
      <section>
        <h3 className="form-section--title">GENERAL INFORMATION</h3>
        <div className="flexed form-row">
          <InputSet
            label="Brand Name"
            placeholder={ph+" Brand Name"}
            name="brandName"
            value={datas.brandName}
          />
          <InputSet
            label="Brand Type"
            info
            placeholder={ph+" Brand Type"}
            name="brandType"
            value={datas.brandType}       
            />
        </div>
        <div className="flexed form-row">
          <InputSet
            label="Street Address"
            placeholder={ph+" Street Address"}
            name="streeAddress"
            value={datas.streeAddress}       
          />
          <InputSet
            label="City"
            placeholder={ph+" City"}
            name="city"
            value={datas.city}
          />
        </div>
        <div className="flexed form-row">
          <InputSet
            label="Zip Code"
            placeholder={ph+" Zip Code"}
            name="zipCode" 
            value={datas.zipCode}        
          />
          <InputSet
            label="Tax ID Number"
            placeholder={ph+" Tax ID Number"}
            name="taxIdNumber"
            value={datas.taxIdNumber} 
          />
        </div>
      </section>
      <section>
        <h3 className="form-section--title">DOCUMENTS</h3>
        <p className='form-section--description'>Once the following documents are signed, you'll be ready to get started</p>
        <div className="flexed form-row">
          <InputSet
            name="doc1" 
            value={datas.doc1}
            type="file"
          />
        </div>
        <div className="flexed form-row">
          <InputSet
            name="doc2" 
            value={datas.doc2}
            type="file"
          />
        </div>
      </section>
      <section>
        <h3 className="form-section--title">COI PDF UPLOAD</h3>
        <p className='form-section--description'>Once the following documents are signed, you'll be ready to get started</p>
        <div className="flexed form-row">
          <InputSet
            name="doc3" 
            value={datas.doc3}
            type="file"
          />
        </div>
      </section>
    </form>
  )
}

export default Step2
