import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Example } from './Example.js'
import SignInButton from './SignInButton'
import SignUpButton from './SignUpButton'
import FindAStore from './FindAStore'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import LogoutButton from './LogoutButton'

function Header({ menuPage }) {
  const user = useSelector(selectUser)

  return (
    <div className={`header ${menuPage && 'header__menuPage'}`}>
      <div className='header__left'>
        <p className='header__logo' to='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
            alt=''
          />
        </p>
        <Link to='/menu' className='header__link'>
          Menu
        </Link>
        <p className='header__link'>Rewards</p>
        <p className='header__link'>Gift Cards</p>
      </div>
      <div className='header__right'>
        <Example />
        <FindAStore />
        {!user ? (
          <>
            <p>
              <SignInButton />
            </p>
            <Link to='/account/create'>
              <SignUpButton />
            </Link>
          </>
        ) : (
          <div className='header__logout'>
            {menuPage ? <LogoutButton /> : <Link to='/menu'>Order Now</Link>}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
