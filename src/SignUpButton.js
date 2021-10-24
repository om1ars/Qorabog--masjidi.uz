import React from 'react'
import './SignUpButton.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function SignUpButton() {
  return (
    <p className='signUpButton' to='/account/create'>
      Join now
    </p>
  )
}

export default SignUpButton
