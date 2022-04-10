import '../App.css';
import React from 'react';
import Header from '../Components/Header';
import CategoryBtn from '../Components/CategoryBtn';
import Button from '../Components/Button';
import thumbnail from '../Images/milktea.png';

function home() {
    return (
        <div className='md:container mx-auto'>
            <Header />
            <div className='flex justify-end'>
                <Button 
                    title = "View Cart" 
                    color = "white"
                    fontWeight = 'regular'
                    width = '25'
                    fontColor='custom-black'
                />
            </div>
            <main className='container'>
                <h1 className='text-xl md:text-center font-semibold lg:ml-40 ml-10 mb-5'>Category</h1>
                <div className='flex overflow-x-scroll no-scrollbar mb-5'>
                    <div className='flex md:flex-wrap flex-nowrap lg:ml-40 md:ml-20 ml-10'>
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
                    </div>
                </div>
                <hr className='mx-auto mb-5'/>
                <div className='container mb-10'>
                    <h1 className='text-xl font-medium lg:mx-40 mx-10 mb-5'>Milktea</h1>
                    <div className='flex overflow-x-scroll no-scrollbar'>
                        <div className='flex md:flex-wrap flex-nowrap lg:ml-40 md:ml-20 ml-10'>
                            <div className="flex-none md:flex w-3/5 md:w-1/6 mr-4 md:pb-4 border overflow-hidden shadow-lg rounded-lg">
                                <div className="aspect-w-32 aspect-h-9">
                                    <img
                                        className="object-cover shadow-md hover:shadow-xl rounded-lg"
                                        src={thumbnail}
                                        alt=""
                                    />
                                </div>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-md">Wintermelon Milktea</div>
                                    <p className="text-gray-700 text-base">
                                    Sizes: M/L
                                    </p>
                                </div>
                            </div>
                            <div className="flex-none md:flex w-3/5 md:w-1/6 mr-4 md:pb-4 border rounded-lg">
                                <img src={thumbnail} alt="image"/>
                            </div>
                            <div className="flex-none md:flex w-3/5 md:w-1/6 mr-4 md:pb-4 border rounded-lg">
                                <img src={thumbnail} alt="image"/>
                            </div>
                            <div className="flex-none md:flex w-3/5 md:w-1/6 mr-4 md:pb-4 border rounded-lg">
                                <img src={thumbnail} alt="image"/>
                            </div>
                            <div className="flex-none md:flex w-3/5 md:w-1/6 mr-4 md:pb-4 border rounded-lg">
                                <img src={thumbnail} alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mb-10'>
                    <h1 className='text-xl font-medium lg:mx-40 mx-10 mb-5'>Milktea</h1>
                    <div className='flex overflow-x-scroll no-scrollbar'>
                        <div className='flex md:flex-wrap flex-nowrap lg:ml-40 md:ml-20 ml-10'>
                            <div className="flex-none md:flex w-3/5 md:w-1/6 mr-4 md:pb-4 border rounded-lg">
                                <img src={thumbnail} alt="image"/>
                            </div>
                            <div className="flex-none md:flex w-3/5 md:w-1/6 mr-4 md:pb-4 border rounded-lg">
                                <img src={thumbnail} alt="image"/>
                            </div>
                            <div className="flex-none md:flex w-3/5 md:w-1/6 mr-4 md:pb-4 border rounded-lg">
                                <img src={thumbnail} alt="image"/>
                            </div>
                            <div className="flex-none md:flex w-3/5 md:w-1/6 mr-4 md:pb-4 border rounded-lg">
                                <img src={thumbnail} alt="image"/>
                            </div>
                            <div className="flex-none md:flex w-3/5 md:w-1/6 mr-4 md:pb-4 border rounded-lg">
                                <img src={thumbnail} alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
        </div>
    );
}

export default home;