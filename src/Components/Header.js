import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Название</span>
            <ul className='nav'>
                <li>about</li>
                <li>contact</li>
                <li>user</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>

  )
}
