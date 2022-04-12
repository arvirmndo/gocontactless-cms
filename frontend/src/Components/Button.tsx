import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../index.css';

interface button{
  title : string;
  color : string;
  fontWeight : string;
  width : string; 
  fontColor : string;
}

export default function Button({ title, color, fontWeight, width, fontColor } : button) {
  const classes = {
    btn: `w-${width} m-5 py-2 px-4 border-2 border-slate-500 text-md font-${fontWeight} rounded-full text-${fontColor} bg-${color}`,
    btnTitle: title
  }

  return (
    <button className = { classes.btn }>
      <FontAwesomeIcon icon = { faCartShopping }/>
      <span className = 'mx-2'>
        {classes.btnTitle}
      </span>
      <span className = "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">9</span>
    </button>
  )
}

