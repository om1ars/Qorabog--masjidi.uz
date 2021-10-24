import React from 'react'
import './FindAStore.css'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@material-ui/icons/LocationOn'

function FindAStore() {
  return (
    <p className='findAStore' style={{alignItems:'center', display: 'flex'}}>
      <a><LocationOnIcon />
      <h5>Find a store</h5>
    </p>
  )
}

export default FindAStore
