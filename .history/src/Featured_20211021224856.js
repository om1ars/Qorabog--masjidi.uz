import React from 'react'
import './Featured.css'
import { Link } from 'react-router-dom'

function Featured({
  title,
  info,
  link,
  path,
  image,
  order,
  background,
  color,
  className,
}) {
  return (
    <div className='featured' style={{ background }}>
      <div className='featured__left' style={{ order, color }}>
        <h1>{title}</h1>
        <h4>{info}</h4>
        <p  className={className}>
          {link}
        </p>
      </div>
      <div className='featured__right'>
        <img style={{borderRadius: 12, height: 250, width: }} src={image} alt='' / >
      </div>
    </div>
  )
}

export default Featured
