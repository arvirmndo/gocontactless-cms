import React from 'react'
import thumbnail from '../Images/milktea.png'
import NumberButton from '../Components/NumberButton'

export default function CartProductItem() {
    const styles = {
        mainDiv                : "flex flex-row w-full h-40 rounded-lg shadow-lg bg-white",
        counterWidth           : "w-28",
        imgWrapper             : "w-1/3",
        img                    : "object-cover rounded-l-lg h-full w-full",
        productDetailsContainer: 'flex flex-col justify-between w-2/3 px-3 py-2',
        detailsContainer       : "space-y-2",
        title                  : "text-lg font-semibold",
        details                : "text-xs md:text-md",
        qtyPriceDiv            : 'flex justify-between items-center font-medium text-md',
    }
  return (
    <div className={styles.mainDiv}>
        {/* Product Image */}
        <div className={styles.imgWrapper}>
            <img 
                className={styles.img} 
                src={thumbnail}
                alt="milktea" />
        </div>
        {/* Product Details */}
        <div className= {styles.productDetailsContainer}>
            <div className = {styles.detailsContainer}>
                <h1 className= {styles.title}>Wintermelon Milktea</h1>
                <span className={styles.details}>Size: M, Add-ons: Pearl/Topioca</span>
            </div>
            <div className={styles.qtyPriceDiv}>
                <span className={styles.counterWidth}><NumberButton/></span>
                <h1 className=''>Php 99.00</h1>
            </div>
        </div>
    </div>
  )
}
