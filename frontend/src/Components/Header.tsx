import React from 'react'
import '../index.css';

export default function Header() {
  return (
    <nav className = 'top-0 mx-auto bg-custom-black rounded-b-md px-2 py-5  md:container'>
      <div className = 'container-md text-center md:text-left mx-auto md:ml-20'>
        <h1  className = 'text-lg font-bold text-white '>Konichiwa Restaurant</h1>
        <h1  className = 'text-lg font-light text-white'>Online Ordering</h1>
      </div>
    </nav>
  )
}

