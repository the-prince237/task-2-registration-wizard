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

  const { handleChange, handleChangeFile } = useContext(FormContext)

  return (
    <div className='input-set'>
      <div className='input-set--top'>
        <label>
          <p>
            {label} {!optional && label && "*"}
          </p>
        </label>
        {info && <InputInfo info={info} />}
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
          <p className="file-name">{value}</p>
          <div className='file-btn'>
            <input type="file" name={name} onChange={handleChangeFile} />
            <SlArrowRight />
          </div>
        </div>
      }
      <p className='input-set--message'>{message && message}</p>
    </div>
  )
}

export default InputSet
