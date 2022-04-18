import React, {useState} from 'react'

export default function NumberButton() {
    const [qty, setQty] = useState(0);

    const styles = {
        mainDiv : "flex flex-row md:h-10 h-8 w-full rounded-lg relative bg-transparent mt-1",
        btnMinus: "bg-gray-300 text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-lg cursor-pointer outline-none",
        btnAdd  : "bg-custom-black text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-lg cursor-pointer",
        icon    : "m-auto text-xl font-semibold",
        inputNum: "outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700  outline-none",
    };

    const handleDecrementClick = () => qty && qty > 0 && setQty(qty-1);
    const handleIncrementClick = () => setQty(count => count + 1);

    const handleValueChange = (value:number) => {
        const number = Number(value);
        setQty(number);
    }

    return (
        <div className={styles.mainDiv}>
            <button onClick={handleDecrementClick} className={styles.btnMinus}>
            <span className={styles.icon}>−</span>
            </button>
            <input 
                type="number" 
                className= {styles.inputNum}
                name="custom-input-number" 
                value={qty? qty: 0}
                onChange = {(event) => {handleValueChange(event.target.valueAsNumber)}}
            />
            <button onClick={handleIncrementClick} className={styles.btnAdd}>
            <span className={styles.icon}>+</span>
            </button>
        </div>
    )
}
