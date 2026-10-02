import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className='flex justify-around items-center'>
        <div>
            <h1 className='text-yellow-400'>FLEXILOADS</h1>
        </div>

        <nav className='gap-4 flex'>
            <Link to="/">О НАС</Link>
            <Link to="/">УСЛУГИ</Link>
            <Link to="/servis">ТАРИФ</Link>
            <Link to="/contact">КОНТАКТ</Link>
        </nav>
    </header>
  )
}

export default Header
