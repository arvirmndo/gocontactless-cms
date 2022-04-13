import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../index.css';
import Modal from '../Components/modal';

interface buttonProps{
  title     : string;
  color     : string;
  fontWeight: string;
  width     : string;
  fontColor : string;
  borderSize: string;
  padding   : string;
}

export default function Button({ title, color, fontWeight, width, fontColor, borderSize, padding} : buttonProps) {
  const classes = {
    btn     : `w-${width} p-${padding} border-${borderSize} border-slate-500 text-md font-${fontWeight} rounded-full text-${fontColor} bg-${color}`,
    btnTitle: title,
    span    : `inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full`
  }

  return (
    <button className = { classes.btn }>
    {/* <FontAwesomeIcon icon      = { faCartShopping }/> */}
    <span>{classes.btnTitle}</span>
    {/* <span            className = {classes.span}>9</span> */}
    </button>
  )
}

