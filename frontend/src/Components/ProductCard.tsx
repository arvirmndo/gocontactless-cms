import React, { useState } from 'react'
import thumbnail from '../Images/milktea.png'
import Modal from '../Components/modal'

interface cardProps{
    productName: string;
    variant    : string;
    price      : string;
}

export default function ProductCard({productName, variant, price}:cardProps) {
    const [show, setShowModal] = useState(false);
    const [choice, setChoice] = useState(false)
    
    const modalClicked = () => {
        setShowModal(true)
    }

    return (
    <div>
        <div className = "max-w-sm w-48 md:w-64 md:pb-4 mr-4 mb-4 border shadow-lg rounded-lg"
            onClick={modalClicked}>
            <div className = 'w-full'>
                <img className = "rounded-t-lg" src = {thumbnail} alt = "milktea" />
            </div>
            <div className = "px-5 py-4">
            <p   className = "font-bold text-sm md:text-lg">
                    {productName}
                </p>
                <p className = "text-gray-700 text-base">
                    {variant}
                </p>
                <p className = "text-gray-700 text-base font-semibold mt-4">
                    {price}
                </p>
            </div>
        </div>
        {show && <Modal setShowModal= {setShowModal} setChoice={setChoice}/>}
        
    </div>
  )
}
