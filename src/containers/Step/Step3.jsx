import React, { useContext, useState } from 'react'

import { FormContext } from '../../context'

const Step3 = () => {
  const { submit, datas } = useContext(FormContext)
  const [submited, setSubmited] = useState("")
  function handleClick() {
    submit()
    setSubmited(JSON.stringify(datas))
  }

  return (
    <form className='step3'>
      <div className='step3--btn' onClick={handleClick}>SUBMIT</div>
      <div className='step3--console'>
        <p>{submited !== "" ? submited : "waiting..."}</p>
      </div>
    </form>
  )
}

export default Step3
