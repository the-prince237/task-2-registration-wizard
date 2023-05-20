import React, { useContext, useState } from 'react'
import { SlArrowRight } from 'react-icons/sl'
import { FormContext } from '../../context'

import InputInfo from '../InputInfo'

import './style.css'

const InputSet = ({
  label,
  placeholder,
  optional,
  info,
  type, 
  name, 
  value, 
  message
}) => {

  const { handleChange } = useContext(FormContext)
  const [fileName, setFileName] = useState("")
  
  function changeFile(e) {
    const _file = e.target.files[0]
    setFileName(_file.name)
    handleChange({target: {name, value: fileName}})
  }

  return (
    <div className='input-set'>
      <div className='input-set--top'>
        <label>
          <p>
            {label} {!optional && label && "*"}
          </p>
        </label>
        {info && <InputInfo />}
      </div>
      {type !== "file" && 
        <div className='input-set--content'>
          <input
            type={type || "text"}
            placeholder={placeholder || "Input Your First name"}
            name={name}
            value={value}
            onChange={handleChange}
          />
        </div> }
      {type === "file" &&
        <div className='input-set--content__file'>
          <p className="file-name">{fileName}</p>
          <div className='file-btn'>
            <input type="file" name={name} onChange={changeFile} />
            <SlArrowRight />
          </div>
        </div>
      }
      <p className='input-set--message'>{message && message}</p>
    </div>
  )
}

export default InputSet
