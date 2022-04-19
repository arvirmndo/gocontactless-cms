import React from 'react'

interface footerProps{
    companyName: string;
    companyLink: string;
}

export default function Footer({ companyName, companyLink }:footerProps) {
    const styles = {
        footer      : 'p-4 bg-white rounded-t-lg shadow md:flex md:items-center md:justify-between md:p-6',
        span        : "text-sm text-gray-500 sm:text-center",
        link        : companyLink,
        a           : "hover:underline",
        ul          : "flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0",
        li          : "hover: underline",
        liWithMargin: "mr-4 hover:underline md:mr-6"

    }

    return (
        <footer className = {styles.footer}>
            <span   className = {styles.span}>© 2022 <a href = {styles.link} className = {styles.a}>{companyName}™</a>. All Rights Reserved.
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
