import React, {useState} from 'react'
import Button from '../Components/AppButton'
import ModalHeader from '../Components/ModalHeader'
import NavBackButton from '../Components/NavBackButton'
import CartProductItem from '../Components/CartProductItem'
import AppInput from '../Components/AppInput'
import CashlessModal from './Cashless'

interface modalProp{
  setShowModal: any;
}

export default function Cart({ setShowModal }:modalProp) {
  const styles = {
    mainContainer : "fixed w-full h-full top-0 left-0 flex items-center justify-center",
    bg            : "absolute w-full h-full bg-custom-black opacity-80",
    modalContainer: "modal-container fixed bg-white w-full md:max-w-5xl h-full md:h-5/6 z-20 md:rounded-lg md:shadow-lg overflow-y-auto md:overflow-hidden",
    content       : 'flex flex-col md:flex-row h-full w-full',
    productList   : 'flex-col px-3 md:px-7 pb-20 pt-8 space-y-5 h-full w-full md:w-1/2 scrollbar-thin scrollbar-thumb-custom-black scrollbar-track-gray-300 hover:scrollbar-thumb-gray-700 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full',
    footerDiv     : "sticky md:static md:mx-auto mt-3 md:h-fit md:w-96 flex flex-col space-y-3 inset-x-0 bottom-0 px-6 md:px-0 py-5 rounded-br-lg border-t md:border-0 bg-white",
    total         : 'flex justify-between items-center pb-4 font-medium text-lg',
  }
  const [show, setShowCashless] = useState(false);
  const [note, setNote] = useState("");

  const handleCancelClick = () => {
    setShowModal(false)
  }

  const modalClicked = () => {
    setShowCashless(true);
  }

  return (
    <div className = {styles.mainContainer}>
      <div className = {styles.bg}></div>
      <div className = {styles.modalContainer}>
          {/* Header */}
          <NavBackButton onClick={() => handleCancelClick()}/>
          <ModalHeader title='Cart'/>
          {/* Content */}
          <div className = {styles.content}>
             {/* Product List */}
            <div className = {styles.productList}>
              {/* Product */}
              <CartProductItem/>
              <CartProductItem/>
                
            </div>
             {/* <!--Footer--> */}
             <div className = {styles.footerDiv}>
                <AppInput 
                  type = {"textarea"} 
                  value = {note}
                  onChange = {(event) => setNote(event.target.value)} 
                />
                <div className = {styles.total}>
                    <h1>Total Amount: </h1>
                    <h1>Php 99.00</h1>
                </div>
                <Button 
                    title          = "Place Order and Pay Now"
                    color          = "custom-black"
                    fontWeight     = 'Medium'
                    width          = 'full'
                    fontColor      = 'white'
                    borderSize     = '0'
                    padding        = '4'
                    hoverBgColor   = 'gray-900'
                    hoverFontColor = 'white'
                    onClick={() => modalClicked()}>
                </Button>
            </div>
          </div>
      </div>
      {show && <CashlessModal setShowModal= {setShowCashless} />}
    </div>
  )
}
