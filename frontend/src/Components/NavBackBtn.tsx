import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function NavBackBtn() {
  return (
    <button className = 'absolute w-auto m-6 px-4 py-3 bg-white shadow-lg rounded-full' >
      <FontAwesomeIcon icon = { faArrowLeft } className = "fa-lg"/>
    </button>
  )
}
