import React from 'react'
import '../index.css';


export default function ModalHeader(props: any) {
  return (
    <nav className='top-0 mx-auto bg-custom-black rounded-b-md px-2 py-5 md: px-10 md:container'>
    <div className='container text-center md:text-left mx-auto'>
      <h1 className='text-lg font-bold text-white'>{props.title}</h1>
      {/* <h1 className='text-lg font-light text-white'>Online Ordering</h1> */}
    </div>
  </nav>
  )
}
