import React from 'react'
import '../index.css';


export default function ModalHeader(props: any) {
  const classes = {
    nav : 'top-0 mx-auto bg-custom-black rounded-b-md px-2 py-5 md: px-10 md:container',
    div : 'container text-center md:text-left mx-auto',
    title: 'text-lg font-bold text-white'
  }
  return (
    <nav className={classes.nav}>
    <div className= {classes.div}>
      <h1 className={classes.title}>{props.title}</h1>
      {/* <h1 className='text-lg font-light text-white'>Online Ordering</h1> */}
    </div>
  </nav>
  )
}
