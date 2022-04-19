import '../App.css'
import React, { useState } from 'react'
import Header from '../Components/Header'
import logo from '../Images/Ayala_Malls_logo.svg'
import featured from '../Images/ayala.jpg'
import AppInput from '../Components/AppInput'
import CategoryBtn from '../Components/CategoryBtn'
import StoreCard from '../Components/StoreCard'
import thumbnail from '../Images/jolly.png'
import CategoryBadge from '../Components/CategoryBadge'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'



export default function Marketplace() {
    const[search, setSearch] = useState("");

    const styles = {
        divParent         : 'sm:container mx-auto',
        featureImg        : 'relative h-72 md:h-[28rem] bg-custom-black',
        img               : 'object-cover w-full h-full',
        searchContainer     : 'py-10 px-6 md:px-[10rem] lg:px-[20rem] w-full',
        searchDiv          : 'relative text-gray-600 focus-within:text-gray-400 w-full',
        searchIconSpan  : 'absolute inset-y-0 right-0 flex items-center pl-2',
        searchButton    : 'p-2 focus:outline-none focus:shadow-outline',
        slider            : 'flex overflow-x-scroll no-scrollbar mb-3',
        categoryWrapper   : 'flex items-center justify-center md:flex-wrap flex-nowrap md:mx-auto ml-8',
        storeContainer    : 'container mb-10',
        storeCategoryTitle: 'text-2xl font-medium ml-10 md:ml-20 mb-5',
        storeWrapper      : 'flex md:flex-wrap flex-nowrap md:ml-20 ml-10 py-4'
    }
    return (
        <div className = {styles.divParent}>
            <Header 
                image   = {logo}
                bgColor = {"white" }
                type    = {"Marketplace"}/>
            <div className = {styles.featureImg}>
                <img 
                    src       = {featured}
                    alt       = "featured image"
                    className = {styles.img}/>
            </div>
            <div className = {styles.searchContainer}>
                <form action="" method="get" >
                    <div className = {styles.searchDiv}>
                        <span className = {styles.searchIconSpan}>
                            <button type="submit" className = {styles.searchButton}>
                                <svg 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    viewBox="0 0 24 24" 
                                    className="w-6 h-6">
                                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </span>
                        <AppInput 
                            type        = 'text'
                            value       = {search}
                            placeholder = {"Search a store"}
                            onChange    = {(e) => setSearch(e.target.value)}
                        />
                    </div>                    
                </form>       
            </div>
            
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
                    />
                </div>
            </div>
            <div className={styles.storeContainer}>
                <div className={styles.slider}>
                    <div className={styles.storeWrapper}>
                        <StoreCard storeName = 'Jollibee'
                                   desc      = 'Jollibee is a family-centric brand that promotes family values and togetherness and espouses Filipino pride.'
                                   link      = '#' 
                                   image = {thumbnail}>
                            <CategoryBadge value = {"Restaurant"} />
                        </StoreCard>
                        <StoreCard storeName = 'Jollibee'
                                   desc      = 'Jollibee is a family-centric brand that promotes family values and togetherness and espouses Filipino pride.'
                                   link      = '#' 
                                   image = {thumbnail}>
                            <CategoryBadge value = {"Restaurant"} />
                        </StoreCard>
                        <StoreCard storeName = 'Jollibee'
                                   desc      = 'Jollibee is a family-centric brand that promotes family values and togetherness and espouses Filipino pride.'
                                   link      = '#' 
                                   image = {thumbnail}>
                            <CategoryBadge value = {"Restaurant"} />
                        </StoreCard>
                        <StoreCard storeName = 'Jollibee'
                                   desc      = 'Jollibee is a family-centric brand that promotes family values and togetherness and espouses Filipino pride.'
                                   link      = '#' 
                                   image = {thumbnail}>
                            <CategoryBadge value = {"Restaurant"} />
                        </StoreCard>
                        <StoreCard storeName = 'Jollibee'
                                   desc      = 'Jollibee is a family-centric brand that promotes family values and togetherness and espouses Filipino pride.'
                                   link      = '#' 
                                   image = {thumbnail}>
                            <CategoryBadge value = {"Restaurant"} />
                        </StoreCard>
                    </div>
                </div>
            </div>
            <Footer companyName = 'Ayala Malls' companyLink = 'https://ayalamalls.com'/>
        </div>
    )
}
