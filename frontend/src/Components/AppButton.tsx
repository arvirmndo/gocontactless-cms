import React, { useState } from 'react';

interface buttonProps{
  title         : string;
  color         : string;
  fontWeight    : string;
  width         : string;
  fontColor     : string;
  borderSize    : string;
  padding       : string;
  hoverBgColor  : string;
  hoverFontColor: string;
  children      : any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ title, color, fontWeight, width, fontColor, borderSize, padding, hoverBgColor, hoverFontColor, children, onClick} : buttonProps) {
  

  const styles = {
    btn     : `w-${width} p-${padding} border-${borderSize} text-${fontColor} bg-${color} hover:text-${hoverFontColor} hover:bg-${hoverBgColor}  border-slate-500 text-md font-${fontWeight} rounded-full `,
    btnTitle: title,
    span    : `inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full`
  }

  return (
    <>
      <button className = { styles.btn } onClick={onClick}>
        {children}
        <span>{styles.btnTitle}</span>
      {/* <span className = {styles.span}>9</span> */}
      </button>
    </>
  )
}

