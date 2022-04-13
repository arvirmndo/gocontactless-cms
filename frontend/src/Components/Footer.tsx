import React from 'react'

export default function Footer() {
    const classes = {
        footer : 'p-4 bg-white rounded-t-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-custom-black',
        span : "text-sm text-gray-500 sm:text-center dark:text-gray-400",
        link : "https://konichiwa.com",
        a: "hover:underline",
        ul: "flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0",
        li: "hover: underline",
        liWithMargin: "mr-4 hover:underline md:mr-6 "

    }

    return (
        <footer className = {classes.footer}>
            <span   className = {classes.span}>© 2022 <a href = {classes.link} className = {classes.a}>Konichiwa Restaurant™</a>. All Rights Reserved.
            </span>
            <ul className = {classes.ul}>
                <li>
                    <a href = "#" className = {classes.liWithMargin}>About</a>
                </li>
                <li>
                    <a href = "#" className = {classes.liWithMargin}>Privacy Policy</a>
                </li>
                <li>
                    <a href = "#" className = {classes.liWithMargin}>Licensing</a>
                </li>
                <li>
                    <a href = "#" className = {classes.li}>Contact</a>
                </li>
            </ul>
        </footer>
    )
}
