import React from 'react'
import { MdPhone } from 'react-icons/md'
import { Logo } from '../../components'

import './style.css'

const Header = () => {
  return (
    <header className='section'>
      <Logo />
      <h1>Create New Account</h1>
      <button><MdPhone /><span>Contact Us</span></button>
    </header>
  )
}

export default Header
