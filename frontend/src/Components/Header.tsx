import React from 'react'
import '../index.css';

export default function Header() {
  const styles = {
    nav         : 'top-0 mx-auto bg-custom-black rounded-b-md px-2 py-5  md:container',
    div         : 'container-md text-center md:text-left mx-auto md:ml-20',
    headingBold : 'text-lg font-bold text-white ',
    headingLight: 'text-lg font-light text-white'
  }
  return (
    <nav className = {styles.nav}>
      <div className = {styles.div}>
        <h1  className = {styles.headingBold}>Konichiwa Restaurant</h1>
        <h1  className = {styles.headingLight}>Online Ordering</h1>
      </div>
    </nav>
  )
}

