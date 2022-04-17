import React from 'react'

interface AppInputProps{
    type        : string;
    value       : any;
    placeholder?: string;
    onChange?   : (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AppInput({ type, value, placeholder, onChange}:AppInputProps) {
    const styles = {
        input : 'border-2 border-gray-400 p-2 mt-2 font-regular text-sm rounded-lg'
    }

    return (
        <>
        {
            type === "textarea" 
            ? (<textarea 
                    className   = "border-2 border-gray-500 rounded-md p-2 mb-3 text-sm"
                    cols        = {30}
                    rows        = {4}
                    placeholder = "Type your notes here..."
                />) 
            :   <input 
                    type        = {type}
                    value       = {value}
                    placeholder = {placeholder}
                    className   = {styles.input}
                    onChange    = {onChange}
                />
        }
        </>
    )
}
