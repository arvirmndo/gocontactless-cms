import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function NavBackBtn() {
  const classes = {
    btn : 'absolute w-auto m-6 px-4 py-3 bg-white shadow-lg rounded-full' 
  }
  return (
    <button className = {classes.btn}>
      <FontAwesomeIcon icon = { faArrowLeft } className = "fa-lg"/>
    </button>
  )
}
