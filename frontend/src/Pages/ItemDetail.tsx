import React from 'react'
import Button from '../Components/Button'
import NavBackBtn from '../Components/NavBackBtn'
import thumbnail from '../Images/milktea.png'

export default function ItemDetail() {
  return (
    <div>
        <main className = 'container'>
          <div id = "imgContainer" className = 'w-full'>
              <NavBackBtn />
              <img className="rounded-b-xl " src={thumbnail} alt="milktea" />
          </div>
          <div className='h-96'></div>
          <div className='h-96'></div>
          <div className='h-96'></div>
        </main>
        {/* <Button display = "Add to Cart"/> */}
    </div>
  )
}
