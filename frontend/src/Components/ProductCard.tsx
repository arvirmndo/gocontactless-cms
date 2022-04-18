import React, { useState } from 'react'
import thumbnail from '../Images/milktea.png'
import ItemDetail from './ItemDetailModal'

interface cardProps{
    productName: string;
    variant    : string;
    price      : string;
}

export default function ProductCard({productName, variant, price}:cardProps) {
    const [show, setShowModal] = useState(false);
    const styles = {
        mainDiv : "max-w-sm w-48 md:w-64 md:pb-4 mr-4 mb-4 border shadow-lg rounded-lg hover:scale-105 transition duration-150 ease-in-out",
        imgDiv : "w-full",
        imgRound: "rounded-t-lg",
        contentDiv : "px-5 py-4",
        productName: "font-bold text-sm md:text-lg",
        variant : "text-gray-700 text-base",
        price: "text-gray-700 text-base font-semibold mt-4"
    }
    const modalClicked = () => {
        setShowModal(true)
    }

    return (
        <>
            <div className = {styles.mainDiv}
                 onClick   = {modalClicked}>
                <div className = {styles.imgDiv}>
                    <img className = {styles.imgRound} src = {thumbnail} alt = "milktea" />
                </div>
                <div className = {styles.contentDiv}>
                    <p className = {styles.productName}>
                        {productName}
                    </p>
                    <p className = {styles.variant}>
                        {variant}
                    </p>
                    <p className = {styles.price}>
                        {price}
                    </p>
                </div>
            </div>
            {show && <ItemDetail setShowModal= {setShowModal} />}
            
        </>
    )
}
