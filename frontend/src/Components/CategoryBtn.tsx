import React from 'react'

interface Category{
    title         : string;
    bgColor       : string;
    fontColor     : string;
    hoverColor    : string;
    hoverFontColor: string;
}

export default function CategoryBtn({title, fontColor, bgColor, hoverColor, hoverFontColor}:Category) {
    const classes = {
        button: `text-${fontColor} bg-${bgColor} hover:bg-${hoverColor} group-hover:text-white font-medium px-6 py-2 m-2 rounded-full `,
    }
  return (
    <button className = {classes.button}>{title}</button>
  )
}
