import React from 'react'

interface cardProps{
    storeName: string;
    desc     : string;
    link     : string;
    image    : any;
    children : any;
}

export default function StoreCard({storeName, desc, link, image, children} : cardProps) {
    const styles = {
        mainDiv    : "max-w-sm w-48 md:w-64 md:pb-4 m-4 border shadow-lg rounded-lg hover:scale-105 transition duration-150 ease-in-out",
        imgDiv     : "relative h-32 w-full",
        imgRound   : "object-cover w-full h-full rounded-t-lg",
        contentDiv : "text-center px-5 py-4 space-y-4",
        productName: "font-bold text-sm md:text-lg",
        details    : "text-gray-700 text-xs",
        price      : "text-gray-700 text-base font-semibold mt-4"
    }
    return (
        <a className = {styles.mainDiv}
            href = "#">
            <div className = {styles.imgDiv}>
                <img className = {styles.imgRound} src = {image} alt = "milktea" />
            </div>
            <div className = {styles.contentDiv}>
                <p className = {styles.productName}>
                    {storeName}
                </p>
                <p className = {styles.details}>
                    {desc}
                </p>
                <div className='flex flex-wrap items-center justify-center'>
                    {children}
                </div>
            </div>
        </a>
    )
}
