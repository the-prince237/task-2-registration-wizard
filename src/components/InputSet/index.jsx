import React, { useContext } from 'react'
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

  const { datas, handleChange } = useContext(FormContext)

  return (
    <div className='input-set'>
      <div className='input-set--top'>
        <label>
          <p>
            {label || "First Name"} {!optional && "*"}
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
          <div className="file-name">{value}</div>
          <button>
            <input type="file" name={name} />
            Browse
          </button>
        </div>
      }
      <p className='input-set--message'>{message && message}</p>
    </div>
  )
}

export default InputSet
