import React, { useState } from 'react'
import thumbnail from '../Images/milktea.png'
import Modal from './ItemDetailModal'

interface cardProps{
    productName: string;
    variant    : string;
    price      : string;
}

export default function ProductCard({productName, variant, price}:cardProps) {
    const [show, setShowModal] = useState(false);
    const classes = {
        mainDiv : "max-w-sm w-48 md:w-64 md:pb-4 mr-4 mb-4 border shadow-lg rounded-lg",
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
        <div>
            <div className = {classes.mainDiv}
                onClick={modalClicked}>
                <div className = {classes.imgDiv}>
                    <img className = {classes.imgRound} src = {thumbnail} alt = "milktea" />
                </div>
                <div className = {classes.contentDiv}>
                    <p className = {classes.productName}>
                        {productName}
                    </p>
                    <p className = {classes.variant}>
                        {variant}
                    </p>
                    <p className = {classes.price}>
                        {price}
                    </p>
                </div>
            </div>
            {show && <Modal setShowModal= {setShowModal} />}
            
        </div>
    )
}
