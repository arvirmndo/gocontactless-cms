import '../App.css';
import React from 'react';
import Header from '../Components/Header';
import CategoryBtn from '../Components/CategoryBtn';
import Button from '../Components/Button';
import ProductCard from '../Components/ProductCard';
import Footer from '../Components/Footer';



function home() {
    return (
        <div className='md:container mx-auto'>
            <Header />
            <div className='flex justify-end m-5 lg:mt-10 lg:mr-20 relative inline-block'>
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
            <main className='container mb-40'>
                <h1 className='text-2xl md:text-center font-semibold ml-10 mb-5'>Category</h1>
                <div className='flex overflow-x-scroll no-scrollbar mb-5'>
                    <div className='flex md:flex-wrap flex-nowrap md:ml-20 ml-10 space-x-2'>
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
                    </div>
                </div>
                <hr className='mx-auto mb-5'/>
                <div className='container mb-10'>
                    <h1 className='text-2xl font-medium ml-10 md:ml-20 mb-5'>Milktea</h1>
                    <div className='flex overflow-x-scroll no-scrollbar'>
                        <div className='flex md:flex-wrap flex-nowrap md:ml-20 ml-10'>
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