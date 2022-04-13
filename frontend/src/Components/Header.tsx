import React from 'react'
import '../index.css';

export default function Header() {
  const classes = {
    nav         : 'top-0 mx-auto bg-custom-black rounded-b-md px-2 py-5  md:container',
    div         : 'container-md text-center md:text-left mx-auto md:ml-20',
    headingBold : 'text-lg font-bold text-white ',
    headingLight: 'text-lg font-light text-white'
  }
  return (
    <nav className = {classes.nav}>
      <div className = {classes.div}>
        <h1  className = {classes.headingBold}>Konichiwa Restaurant</h1>
        <h1  className = {classes.headingLight}>Online Ordering</h1>
      </div>
    </nav>
  )
}

