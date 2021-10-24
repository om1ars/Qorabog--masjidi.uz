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
import {Logo} from './assets/maskid.jpg'

function Header({ menuPage }) {
  const user = useSelector(selectUser)

  return (
    <div className={`header ${menuPage && 'header__menuPage'}`}>
      <div className='header__left'>
        <p className='header__logo' to='/'>
          <img
          src=''
            alt=''
          />
        </p>
        <Link to='/menu' className='header__link'>
          Menu
        </Link>
        <p to='/' className='header__link'>Rewards</p>
        <p to='/' className='header__link'>Gift Cards</p>
      </div>
      <div className='header__right'>
        <Example />
        <FindAStore />
        {
          <>
            <p>
              <SignInButton />
            </p>
            <p >
              <SignUpButton />
            </p>
          </>
        }
      </div>
    </div>
  )
}

export default Header
