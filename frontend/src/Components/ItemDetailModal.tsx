import thumbnail from '../Images/milktea.png'
import NavBackBtn from './NavBackBtn';
import Button from './Button'
import Accordion from './Accordion/Accordion';
import NumberButton from './NumberButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

interface modalProp{
    setShowModal: any;
}

export default function Modal({ setShowModal }:modalProp) {
    const classes = {
        mainContainer : "fixed w-full h-full top-0 left-0 flex items-center justify-center",
        bg            : "absolute w-full h-full bg-custom-black opacity-20",
        modalContainer: "modal-container flex flex-col md:flex-row fixed bg-white  w-full md:max-w-5xl h-full md:h-5/6 z-50 md:rounded-lg md:shadow-lg overflow-y-auto md:overflow-hidden",
        divImg        : 'md:w-3/4',
        backBtn       : 'absolute w-auto m-6 px-4 py-3 shadow-lg rounded-full bg-white',
        img           : "object-cover rounded-l-lg h-64 md:h-full w-full",
        modalContent  : "relative modal-content container bg-white mx-auto h-screen text-left p-6 md:rounded-r-lg",
        titleDiv      : "pb-2",
        contentDiv    : 'h-full md:overflow-y-auto',
        title         : "text-2xl font-semibold px-1 md:px-4 pt-2",
        details       : 'px-1 md:px-4 text-sm md:text-md mb-8',
        accordionDiv  : 'px-1 md:px-4',
        footerDiv     : "sticky flex flex-col inset-x-0 bottom-0 p-6 rounded-br-lg rounded-b border-t bg-white",
        qtyPriceDiv   : 'flex justify-between items-center pb-4',
        counterWidth  : 'w-32'
    }

    const handleCancelClick = () => {
        setShowModal(false)
    }

    return (
        <div className={classes.mainContainer}>
            <div className={classes.bg}></div>

            <div className={classes.modalContainer}>
                
                <div id = "imgContainer" className={classes.divImg}>
                    <button className = {classes.backBtn} onClick={handleCancelClick} >
                        <FontAwesomeIcon icon = { faArrowLeft } className = "fa-lg"/>
                    </button>
                    <img className={classes.img} src={thumbnail} alt="milktea" />
                </div>

               
                <div className={classes.modalContent}>
                    <div className={classes.contentDiv}>
                        {/* <!--Title--> */}
                        <div className={classes.titleDiv}>
                            <p className={classes.title}>Wintermelon Milktea</p>
                        </div>

                        {/* <!--Details--> */}
                        <p className={classes.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate.</p>
                        <div className={classes.accordionDiv}>
                            <Accordion/>
                        </div>
                        
                    </div>
                    
                    
                    {/* <!--Footer--> */}
                    <div className={classes.footerDiv}>
                        <div className={classes.qtyPriceDiv}>
                            <h1>Php 99.00</h1>
                            <span className={classes.counterWidth}><NumberButton/></span>
                         </div>
                        <Button 
                            title = "Add to Cart" 
                            color = "custom-black"
                            fontWeight = 'semibold'
                            width = 'full'
                            fontColor='white'
                            borderSize='0'
                            padding='4'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}