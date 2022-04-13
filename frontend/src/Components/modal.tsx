import thumbnail from '../Images/milktea.png'
import NavBackBtn from './NavBackBtn';
import Button from '../Components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

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
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="absolute w-full h-full bg-custom-black opacity-20"></div>

            <div className="modal-container flex flex-col md:flex-row fixed bg-white  w-full md:max-w-5xl h-full md:h-5/6 z-50 md:rounded-lg md:shadow-lg overflow-y-auto md:overflow-hidden">
                
                <div id = "imgContainer">
                    <button className = 'absolute w-auto m-6 px-4 py-3 shadow-lg rounded-full bg-white' onClick={handleCancelClick} >
                        <FontAwesomeIcon icon = { faArrowLeft } className = "fa-lg"/>
                    </button>
                    <img className="object-cover rounded-l-lg h-64 md:h-full w-full" src={thumbnail} alt="milktea" />
                </div>

                {/* <!-- Add margin if you want to see grey behind the modal--> */}
                <div className="relative modal-content container bg-white mx-auto h-auto text-left p-6 md:rounded-r-lg">
                    <div className='h-full md:overflow-y-auto'>
                        {/* <!--Title--> */}
                        <div className="pb-2">
                            <p className="text-2xl font-bold">Full Screen Modal!</p>
                        </div>

                        {/* <!--Body--> */}
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                        <p>Modal content can go here</p>
                    </div>
                    
                    
                    {/* <!--Footer--> */}
                    <div className="sticky flex flex-col inset-x-0 bottom-0 p-6 rounded-br-lg rounded-b border-t bg-white">
                        <div className='flex justify-between pb-4'>
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