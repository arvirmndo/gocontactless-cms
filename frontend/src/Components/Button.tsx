import React from 'react'
import '../index.css';


export default function Button(props:any) {
  const classes = {
    button: 'w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-custom-black'
  }
  return (
    <button className={classes.button}>{props.title}</button>
  )
}

