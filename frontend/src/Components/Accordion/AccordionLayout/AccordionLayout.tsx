import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

interface AccordionLayoutProps{
    title    : string;
    children : any;
    isDefault: boolean
}

export default function AccordionLayout({ title, children, isDefault}:AccordionLayoutProps) {
    const styles = {
        mainDiv : 'flex w-full justify-between p-2 mt-2 border-2 rounded-lg bg-white shadow-lg',
        titleDiv: 'flex px-2 text-custom-black font-bold',
        icon: 'flex items-center justify-center',
        content: 'shadow-3xl w-full bg-white shadow-b-lg rounded-b-2xl shadow-cyan-500/50 p-4 transition duration-150 ease-in-out'
    }

    const [showDetail, setShowDetail] = useState(isDefault);

    const handleShowDetail = () => {
        if(showDetail !== true){
            setShowDetail(true)
        }else{
            setShowDetail(false)
        }
    }

    return (
        <>
        <button onClick   = {() => handleShowDetail()}
             className = {styles.mainDiv}>
            <div className = {styles.titleDiv}>{title}</div>
            <div className = {styles.icon}>
                {
                    (showDetail === true)
                    ? <FontAwesomeIcon icon={faAngleDown} className='w-8 h-8' />
                    : <FontAwesomeIcon icon={faAngleUp} className='w-8 h-8' />
                }
            </div>
        </button>

        {(showDetail === true) && (
            <div className={styles.content}>
            {children}
            </div>
        )}
        </>
  )
}
