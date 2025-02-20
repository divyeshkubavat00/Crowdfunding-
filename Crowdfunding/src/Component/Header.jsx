import { useState } from 'react'
import './Header.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header id='header'>
        <div className='icon-sec'>
            <img src='./images/CF-logo.webp'></img>
        </div>
    </header>
    </>
  )
}

export default Header