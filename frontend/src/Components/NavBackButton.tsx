import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


interface navBackButtonProps{
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function NavBackButton({onClick}: navBackButtonProps) {
    const classes = {
        backBtn: 'absolute w-auto m-5 px-3 py-2 shadow-lg rounded-full bg-white hover:bg-gray-500 hover:text-white',
    }
    
  return (
    <button className = {classes.backBtn} onClick={onClick} >
        <FontAwesomeIcon icon = { faArrowLeft } className = "fa-lg"/>
    </button>
  )
}
