import React from 'react'

interface Category{
    title         : string;
    bgColor       : string;
    fontColor     : string;
    hoverColor    : string;
    hoverFontColor: string;
}

export default function CategoryBtn({title, fontColor, bgColor, hoverColor, hoverFontColor}:Category) {
    const styles = {
        button: `text-${fontColor} bg-${bgColor} hover:bg-${hoverColor} hover:text-${hoverFontColor} font-medium px-6 py-2 m-2 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-300`,
    }
  return (
    <button className = {styles.button}>{title}</button>
    // <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
  )
}