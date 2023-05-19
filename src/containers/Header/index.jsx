import React from 'react'
import { Logo } from '../../components'

import './style.css'

const Header = () => {
  return (
    <header className='section'>
      <Logo />
      <h1>Create New Account</h1>
      <button>Contact Us</button>
    </header>
  )
}

export default Header
