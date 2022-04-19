import React from 'react'
import '../index.css';

interface HeaderProp{
    image? : any;
    bgColor : string;
    type : string; 
}


export default function Header({ image, type, bgColor } : HeaderProp) {
  const styles = {
    nav         : `top-0 mx-auto bg-${bgColor} rounded-b-md px-2 py-5 shadow-md md:container`,
    div         : 'flex container-md justify-center md:justify-start mx-auto md:ml-20',
    divImg      : 'relative h-12 mr-2',
    img         : 'object-cover w-full h-full',
    headingBold : 'text-lg font-bold text-white ',
    headingLight: 'text-lg font-light text-white'
  }
  return (
    <nav className = {styles.nav}>
      <div className = {styles.div}>
        {
          (type === "Store") 
          ? (
            <div className = 'flex flex-row items-center'>
              <div className = {styles.divImg}>
                <img className={styles.img} src={image} alt="milktea" />
              </div>
              <div className = 'flex flex-col text-left'>
                <h1 className = {styles.headingBold}>Konichiwa Restaurant</h1>
                <h1 className = {styles.headingLight}>Online Ordering</h1>
              </div>
            </div>
              
          )
          : (
            <>
            <div className = {styles.divImg}>
                <img className={styles.img} src={image} alt="milktea" />
            </div>
            </>
          )
        }
        
      </div>
    </nav>
  )
}

