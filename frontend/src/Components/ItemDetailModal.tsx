import thumbnail from '../Images/milktea.png'
import Button from './AppButton'
import Accordion from './Accordion/Accordion';
import NumberButton from './NumberButton';
import NavBackButton from './NavBackButton';
import '../index.css'

interface modalProp{
    setShowModal: any;
}

export default function Modal({ setShowModal }:modalProp) {
    const styles = {
        mainContainer : "fixed w-full h-full top-0 left-0 flex items-center justify-center",
        bg            : "absolute w-full h-full bg-custom-black opacity-20",
        modalContainer: "modal-container flex flex-col md:flex-row fixed bg-white w-full md:max-w-5xl h-full md:h-5/6 z-50 md:rounded-lg md:shadow-lg overflow-y-auto md:overflow-hidden",
        divImg        : 'md:w-3/4',
        backBtn       : 'absolute w-auto m-6 px-4 py-3 shadow-lg rounded-full bg-white hover:bg-gray-500 hover:text-white',
        img           : "object-cover rounded-l-lg h-64 md:h-full w-full",
        modalContent  : "relative modal-content container bg-white mx-auto h-fit md:h-screen text-left p-6 md:rounded-r-lg",
        titleDiv      : "pb-2",
        contentDiv    : 'h-full md:overflow-y-auto',
        title         : "text-2xl font-semibold px-1 md:px-4 pt-2",
        details       : 'px-1 md:px-4 text-sm md:text-md mb-4',
        accordionDiv  : 'px-1 md:px-4',
        footerDiv     : "sticky flex flex-col inset-x-0 bottom-0 md:p-4 p-2 rounded-br-lg rounded-b border-t bg-white",
        qtyPriceDiv   : 'flex justify-between items-center pb-4 font-semibold text-lg',
        counterWidth  : 'w-32'
    }

    const handleCancelClick = () => {
        setShowModal(false)
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.bg}></div>

            <div className={styles.modalContainer}>
                
                <div id = "imgContainer" className={styles.divImg}>
                    <NavBackButton onClick={() => handleCancelClick()}/>
                    <img className={styles.img} src={thumbnail} alt="milktea" />
                </div>

               
                <div className={styles.modalContent}>
                    <div className={styles.contentDiv}>
                        {/* <!--Title--> */}
                        <div className={styles.titleDiv}>
                            <p className={styles.title}>Wintermelon Milktea</p>
                        </div>

                        {/* <!--Details--> */}
                        <p className={styles.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate.</p>
                        <div className={styles.accordionDiv}>
                            <Accordion/>
                        </div>
                        
                    </div>
                    
                    {/* <!--Footer--> */}
                    <div className={styles.footerDiv}>
                        <div className={styles.qtyPriceDiv}>
                            <h1>Php 99.00</h1>
                            <span className={styles.counterWidth}><NumberButton/></span>
                         </div>
                        <Button 
                            title          = "Add to Cart"
                            color          = "custom-black"
                            fontWeight     = 'bold'
                            width          = 'full'
                            fontColor      = 'white'
                            borderSize     = '0'
                            padding        = '4'
                            hoverBgColor   = 'gray-900'
                            hoverFontColor = 'white'>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}