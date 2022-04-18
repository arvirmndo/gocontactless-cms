import React, {useState} from 'react'
import AccordionLayout from './AccordionLayout/AccordionLayout'

export default function Accordion() {
    const styles = {
        mainContainer: 'flex flex-col justify-center items-center',
        mainDiv      : "flex justify-between mb-4",
        flexDiv      : 'flex items-center',
        input        : 'w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600',
        label        : 'block ml-2 text-sm font-medium text-custom-black',
        legend       : 'sr-only'
    }

    return (
        <div className={styles.mainContainer}>
         <AccordionLayout 
            title     = "Size"
            isDefault = {true}
          >
                        
            <fieldset>
                <legend className={styles.legend}>Size</legend>
                <div className={styles.mainDiv}>
                    <div className={styles.flexDiv}>
                        <input id="option-1" type="radio" name="size" value="Small" className={styles.input} defaultChecked/>
                        <label htmlFor="country-option-1" className={styles.label}>
                        Small
                        </label>
                    </div>
                    <div className={styles.flexDiv}>
                        <label htmlFor="country-option-1" className={styles.label}>
                        + 0.00
                        </label>
                    </div>
                </div>
                <div className={styles.mainDiv}>
                    <div className={styles.flexDiv}>
                        <input id="option-1" type="radio" name="size" value="Medium" className={styles.input} defaultChecked/>
                        <label htmlFor="option-1" className={styles.label}>
                        Medium
                        </label>
                    </div>
                    <div className={styles.flexDiv}>
                        <label className={styles.label}>
                        + 10.00
                        </label>
                    </div>
                </div>
                <div className={styles.mainDiv}>
                <div className={styles.flexDiv}>
                        <input id="option-1" type="radio" name="size" value="Large" className={styles.input} defaultChecked/>
                        <label className={styles.label}>
                        Large
                        </label>
                    </div>
                    <div className={styles.flexDiv}>
                        <label className={styles.label}>
                        + 15.00
                        </label>
                    </div>
                </div>
            </fieldset>
   
          </AccordionLayout>

          <AccordionLayout 
            title="Add-ons"
            isDefault={false}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus velit, quaerat, corporis neque, 
            esse omnis alias id sunt veniam pariatur aliquam possimus aut sit! Dolorem optio distinctio autem accusantium assumenda.    
          </AccordionLayout>
      </div>
    )
}
