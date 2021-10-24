import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './MenuHeader.css'

function MenuHeader() {
  const [index, setIndex] = useState(0)

  return (
    <div className='menuHeader'>
      <div className='menuHeader__links'>
        <p
          className={`${index === 0 && 'menuHeader__link--active'}`}
          onClick={() => setIndex(0)}
        >
          <Link to='/'>Bosh sahifa</Link>
        </p>
        <p
          to='/menu/featured'
          className={`${index === 1 && 'menuHeader__link--active'}`}
          onClick={() => setIndex(1)}
        >
          <Link to='/'>Qur'on</Link>
        </p>
        <Link to='/courses'>Kurslar</Link>
        <p>Favorite Products</p>
      </div>
    </div>
  )
}

export default MenuHeader
