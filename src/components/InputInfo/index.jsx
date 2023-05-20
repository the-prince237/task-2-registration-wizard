import React from 'react'

import { BsTriangleFill } from 'react-icons/bs'

import './style.css'

const InputInfo = ({info}) => {
  return (
    <div className='input-info'>
      <p className='input-info--qm'>?</p>
      <div>
        <span><BsTriangleFill /></span>
        {info
          ? info.map((i, index) => (
            <p key={index}>{i}</p>
          ))
          :<p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, itaque. Nesciunt quasi tenetur, porro assumenda voluptates et, obcaecati fuga corrupti voluptatibus eos quo, rem soluta error consectetur quos modi nulla?
        </p> }
      </div>
    </div>
  )
}

export default InputInfo
