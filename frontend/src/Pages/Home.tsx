import '../App.css';
import logo from '../Images/konichiwa.png'
import { useState } from 'react';
import Header from '../Components/Header';
import CategoryBtn from '../Components/CategoryBtn';
import Button from '../Components/AppButton';
import ProductCard from '../Components/ProductCard';
import Footer from '../Components/Footer';
import Cart from './Cart';
import CashlessModal from './Cashless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



function Home() {
    const styles = {
        divParent           : 'md:container mx-auto',
        viewCart            : 'flex justify-end m-5 lg:mt-10 lg:mr-20 relative inline-block',
        main                : 'container mb-40',
        categoryTitle       : 'text-2xl md:text-center font-semibold ml-10 mb-5',
        slider              : 'flex overflow-x-scroll no-scrollbar',
        categoryWrapper     : 'flex md:flex-wrap flex-nowrap md:mx-auto ml-8',
        hr                  : ' my-5',
        productContainer    : 'container mb-10',
        productCategoryTitle: 'text-2xl font-medium ml-10 md:ml-20 mb-5',
        productWrapper      : 'flex md:flex-wrap flex-nowrap md:ml-20 ml-10 py-4'
    }

    const [show, setShowModal] = useState(false);

    const modalClicked = () => {
        setShowModal(true)
    }
    
    return (
        <div className={styles.divParent}>
            <Header
                image   = {logo}
                bgColor = {"custom-black"}
                type    = {"Store"}/>
            <div className={styles.viewCart}>
                <Button 
                    title          = "View Cart"
                    color          = "white"
                    fontWeight     = 'regular'
                    width          = '25'
                    fontColor      = 'custom-black'
                    borderSize     = '2'
                    padding        = '2'
                    hoverBgColor   = 'gray-900'
                    hoverFontColor = 'white'
                    onClick={() => modalClicked()}
                >
                    <FontAwesomeIcon icon = { faCartShopping } className="mr-2"/>
                </Button>
            </div>
            <main className={styles.main}>
                <h1 className={styles.categoryTitle}>Category</h1>
                <div className={styles.slider}>
                    <div className={styles.categoryWrapper}>
                        <CategoryBtn 
                            title='All'
                            bgColor='custom-black'
                            fontColor='white'
                            hoverColor='gray-900'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Milktea'
                            bgColor='gray-300'
                            fontColor='black'
                            hoverColor='gray-900'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Siomai'
                            bgColor='gray-300'
                            fontColor='black'
                            hoverColor='gray-900'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Siomai'
                            bgColor='gray-300'
                            fontColor='black'
                            hoverColor='gray-900'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Siomai'
                            bgColor='gray-300'
                            fontColor='black'
                            hoverColor='gray-900'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Siomai'
                            bgColor='gray-300'
                            fontColor='black'
                            hoverColor='gray-900'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Siomai'
                            bgColor='gray-300'
                            fontColor='black'
                            hoverColor='gray-900'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Siomai'
                            bgColor='gray-300'
                            fontColor='black'
                            hoverColor='gray-900'
                            hoverFontColor = 'white'
                        /><CategoryBtn 
                        title='Siomai'
                        bgColor='gray-300'
                        fontColor='black'
                        hoverColor='gray-900'
                        hoverFontColor = 'white'
                    />
                    <CategoryBtn 
                            title='Siomai'
                            bgColor='gray-300'
                            fontColor='black'
                            hoverColor='gray-900'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Siomai'
                            bgColor='gray-300'
                            fontColor='black'
                            hoverColor='gray-900'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Siomai'
                            bgColor='gray-300'
                            fontColor='black'
                            hoverColor='gray-900'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Siomai'
                            bgColor='gray-300'
                            fontColor='black'
                            hoverColor='gray-900'
                            hoverFontColor = 'white'
                        />
                        
                    </div>
                </div>
                <hr className={styles.hr}/>
                <div className={styles.productContainer}>
                    <h1 className={styles.productCategoryTitle}>Milktea</h1>
                    <div className={styles.slider}>
                        <div className={styles.productWrapper}>
                            <ProductCard productName='Wintermelon' variant='Size: M/L' price='Php 99.00'/>
                        </div>
                    </div>
                </div>
                {show && <CashlessModal setShowModal = { setShowModal } />}
            </main>
            
        </div>
    );
}

export default Home;