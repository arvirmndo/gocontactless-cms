import React from 'react'
import thumbnail from '../Images/milktea.png';

interface Card{
    productName : string;
    variant : string;
    price : string;
}

export default function ProductCard({productName, variant, price}:Card) {
  return (

    <div className="max-w-sm w-48 md:w-64 md:pb-4 mr-4 mb-4 border shadow-lg rounded-lg">
        <a href="#" className='w-full'>
            <img className="rounded-t-lg" src={thumbnail} alt="milktea" />
        </a>
        <div className="px-5 py-4">
            <p className="font-bold text-sm md:text-lg">
                {productName}
            </p>
            <p className="text-gray-700 text-base">
                {variant}
            </p>
            <p className="text-gray-700 text-base font-semibold mt-4">
                {price}
            </p>
        </div>
    </div>
  )
}
