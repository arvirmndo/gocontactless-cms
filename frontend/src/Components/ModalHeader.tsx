import React from 'react'
import '../index.css';

interface modalHeaderProps{
  title: string,
}

export default function ModalHeader({title}: modalHeaderProps) {
  const classes = {
    mainDiv : 'h-20 top-0 mx-auto bg-custom-black md:rounded-t-lg px-2 py-5 md:px-10 ',
    div : 'container h-full flex justify-center items-center mx-auto',
    title: 'text-xl font-bold text-white'
  }
  return (
    <div className={classes.mainDiv}>
    <div className= {classes.div}>
      <h1 className={classes.title}>{title}</h1>
      {/* <h1 className='text-lg font-light text-white'>Online Ordering</h1> */}
    </div>
  </div>
  )
}
