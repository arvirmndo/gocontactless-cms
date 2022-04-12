import thumbnail from '../Images/milktea.png'
import NavBackBtn from './NavBackBtn';
import Button from '../Components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

interface modalProp{
    setShowModal: any;
    setChoice: any;
}

const Modal = ({ setShowModal, setChoice }:modalProp) => {

    const handleOKClick = () => {
        setChoice(true)
        setShowModal(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setShowModal(false)
    }

    return (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full">
            <div className="flex h-screen md: justify-center items-center ">
                <div className="flex flex-col h-screen justify-between h-full w-full md:max-h-full md:w-96 bg-white shadow-lg rounded-xl ">
                    <div id = "imgContainer" className = 'w-full'>
                        <button className = 'absolute w-auto m-6 px-4 py-3 bg-white shadow-lg rounded-full' onClick={handleCancelClick} >
                            <FontAwesomeIcon icon = { faArrowLeft } className = "fa-lg"/>
                        </button>
                        <img className="rounded-b-xl" src={thumbnail} alt="milktea" />
                    </div>
                    <div className="text-zinc-600 px-5 py-4 overflow-y-auto">
                        <h1 className='text-2xl font-medium mb-2'>Wintermelon Milktea</h1>
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis numquam quod ex officia. </span>
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis numquam quod ex officia. </span>
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis numquam quod ex officia. </span>
                        
                    </div>
                    <div className="sticky bottom-0 p-5 rounded-b bg-white border-t border-gray-200 dark:border-gray-600">
                        <div className='flex justify-between'>
                            <h1>Php 99.00</h1>
                            <span>Php 99.00</span>
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

export default Modal