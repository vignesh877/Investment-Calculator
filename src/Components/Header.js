import React from 'react'
import img from '../Assets/img.png'
const Header = () => {
  return (
    <header className='header'>
        <img src={img} alt='logo'/>
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header