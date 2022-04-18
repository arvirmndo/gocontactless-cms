import React from 'react'

export default function Footer() {
    const styles = {
        footer : 'p-4 bg-white rounded-t-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-custom-black',
        span : "text-sm text-gray-500 sm:text-center dark:text-gray-400",
        link : "https://konichiwa.com",
        a: "hover:underline",
        ul: "flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0",
        li: "hover: underline",
        liWithMargin: "mr-4 hover:underline md:mr-6 "

    }

    return (
        <footer className = {styles.footer}>
            <span   className = {styles.span}>© 2022 <a href = {styles.link} className = {styles.a}>Konichiwa Restaurant™</a>. All Rights Reserved.
            </span>
            <ul className = {styles.ul}>
                <li>
                    <a href = "#" className = {styles.liWithMargin}>About</a>
                </li>
                <li>
                    <a href = "#" className = {styles.liWithMargin}>Privacy Policy</a>
                </li>
                <li>
                    <a href = "#" className = {styles.liWithMargin}>Licensing</a>
                </li>
                <li>
                    <a href = "#" className = {styles.li}>Contact</a>
                </li>
            </ul>
        </footer>
    )
}
