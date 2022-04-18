import React, {useState} from 'react'
import AppInput from '../Components/AppInput'
import Button from '../Components/AppButton'
import ModalHeader from '../Components/ModalHeader'
import NavBackButton from '../Components/NavBackButton'

interface modalProp{
    setShowModal: any;
}

export default function CashlessModal({ setShowModal }:modalProp) {
    const[name, setName]           = useState("");
    const[mobileNum, setMobileNum] = useState("");
    const[email, setEmail]         = useState("");

    const styles = {
        mainContainer   : "fixed w-full h-full top-0 left-0 flex items-center justify-center",
        bg              : "absolute w-full h-full bg-custom-black opacity-80",
        modalContainer  : "modal-container fixed bg-white w-full md:max-w-xl h-full md:h-5/6 z-50 md:rounded-lg md:shadow-lg overflow-y-auto md:overflow-hidden",
        contentContainer: 'flex flex-col items-center h-full w-full py-5',
        totalAmount     : 'text-md mb-3',
        title           : 'text-lg font-semibold text-custom-black mb-5',
        price           : 'text-xl font-semibold',
        note            : 'text-xs',
        footerDiv       : "sticky flex flex-col inset-x-0 bottom-0 md:p-8 p-4 rounded-br-lg rounded-b border-t bg-white",
        total           : 'flex justify-between items-center pb-7 font-bold text-lg',
        form            : 'w-96 px-5 md:px-2 my-10 space-y-5',
        formGroup       : 'flex flex-col'
    }

    const handleCancelClick = () => {
        setShowModal(false)
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.bg}></div>
            <div className={styles.modalContainer}>
                {/* Header */}
                <NavBackButton onClick={() => handleCancelClick()}/>
                <ModalHeader title='Cashless Transaction'/>
                {/* Content */}
                <div className = {styles.contentContainer}>
                    <h1 className = {styles.title}>COMPLETE YOUR TRANSACTION</h1>
                    <span className = {styles.totalAmount}>Total amount to pay</span>   
                    <span className = {styles.price}>Php 297.00</span>
                    <span className = {styles.note}>(exclusive of other charges)</span>
                    <form action="" method="post" className={styles.form}>
                        <div className = {styles.formGroup}>
                            <label>Name</label> 
                            <AppInput 
                                type        = 'text'
                                value       = {name}
                                placeholder = {"Enter your full name"}
                                onChange    = {(event) => setName(event.target.value) }/>
                        </div>
                        <div className = {styles.formGroup}>
                            <label>Mobile Number</label> 
                            <AppInput 
                                type        = 'text'
                                value       = {mobileNum}
                                placeholder = {"Enter your mobile number"}
                                onChange    = {(event) => setMobileNum(event.target.value) }/>
                        </div>
                        <div className = {styles.formGroup}>
                            <label>Email</label> 
                            <AppInput 
                                type        = 'email'
                                value       = {email}
                                placeholder = {"Email"}
                                onChange    = {(event) => setEmail(event.target.value) }/>
                        </div>
                        
                    </form>
                </div>
                {/* <!--Footer--> */}
                <div className={styles.footerDiv}>
                        <div className={styles.total}>
                            <h1>Total Amount: </h1>
                            <span>Php 297.00</span>
                        </div>
                        <Button 
                            title          = "Continue"
                            color          = "custom-black"
                            fontWeight     = 'Medium'
                            width          = 'full'
                            fontColor      = 'white'
                            borderSize     = '0'
                            padding        = '2'
                            hoverBgColor   = 'gray-900'
                            hoverFontColor = 'white'>
                        </Button>
                    </div>
            </div>
        </div>
    )
}
