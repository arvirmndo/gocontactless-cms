import '../App.css';
import React from 'react';
import Header from '../Components/Header';
import CategoryBtn from '../Components/CategoryBtn';
import Button from '../Components/Button';
import ProductCard from '../Components/ProductCard';
import Footer from '../Components/Footer';



function home() {
    const classes = {
        divParent           : 'md:container mx-auto',
        viewCart            : 'flex justify-end m-5 lg:mt-10 lg:mr-20 relative inline-block',
        main                : 'container mb-40',
        categoryTitle       : 'text-2xl md:text-center font-semibold ml-10 mb-5',
        slider      : 'flex overflow-x-scroll no-scrollbar',
        categoryWrapper     : 'flex md:flex-wrap flex-nowrap md:mx-auto ml-8',
        hr                  : ' mb-5 mx-10',
        productContainer    : 'container mb-10',
        productCategoryTitle: 'text-2xl font-medium ml-10 md:ml-20 mb-5',
        productWrapper: 'flex md:flex-wrap flex-nowrap md:ml-20 ml-10'
    }
    return (
        <div className={classes.divParent}>
            <Header />
            <div className={classes.viewCart}>
                <Button 
                    title = "View Cart" 
                    color = "white"
                    fontWeight = 'regular'
                    width = '25'
                    fontColor='custom-black'
                    borderSize='2'
                    padding='2'
                />
            </div>
            <main className={classes.main}>
                <h1 className={classes.categoryTitle}>Category</h1>
                <div className={classes.slider}>
                    <div className={classes.categoryWrapper}>
                        <CategoryBtn 
                            title='All'
                            bgColor='custom-black'
                            fontColor='white'
                            hoverColor='gray-700'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Milktea'
                            bgColor='slate-200'
                            fontColor='black'
                            hoverColor='gray-700'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Milktea'
                            bgColor='slate-200'
                            fontColor='black'
                            hoverColor='gray-700'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Milktea'
                            bgColor='slate-200'
                            fontColor='black'
                            hoverColor='gray-700'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Milktea'
                            bgColor='slate-200'
                            fontColor='black'
                            hoverColor='gray-700'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Milktea'
                            bgColor='slate-200'
                            fontColor='black'
                            hoverColor='gray-700'
                            hoverFontColor = 'white'
                        />
                        <CategoryBtn 
                            title='Milktea'
                            bgColor='slate-200'
                            fontColor='black'
                            hoverColor='gray-700'
                            hoverFontColor = 'white'
                        />
                    </div>
                </div>
                <hr className={classes.hr}/>
                <div className={classes.productContainer}>
                    <h1 className={classes.productCategoryTitle}>Milktea</h1>
                    <div className={classes.slider}>
                        <div className={classes.productWrapper}>
                            <ProductCard productName='Wintermelon' variant='Size: M/L' price='Php 99.00'/>
                        </div>
                    </div>
                </div>
                
            </main>
            <Footer/>
        </div>
    );
}

export default home;