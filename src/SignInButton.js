import React from 'react'
import './SignInButton.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function SignInButton() {
  return (
    <p className='signInButton' to='/account/signin'>
      Sign in
    </p>
  )
}

export default SignInButton
