import * as React from 'react'
import { Link } from 'react-router-dom'
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded'
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded'



// const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']

export const MenuLink = ({ link, path, icon, goBackIcon, onClick, width }) => {
  return (
    <>
      <p>
        <motion.li
          style={{ width }}
          onClick={onClick}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {goBackIcon && <ChevronLeftRoundedIcon fontSize='large' />}
          {link}
          {icon && <ChevronRightRoundedIcon fontSize='large' />}
        </motion.li>
      </p>
    </>
  )
}
