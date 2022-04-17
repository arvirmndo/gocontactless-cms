import React, {useState} from 'react'
import AccordionLayout from './AccordionLayout/AccordionLayout'

export default function Accordion() {
    const classes = {
        mainContainer: 'flex flex-col justify-center items-center',
        mainDiv      : "flex justify-between mb-4",
        flexDiv      : 'flex items-center',
        input        : 'w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600',
        label        : 'block ml-2 text-sm font-medium text-custom-black',

    }

    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div className={classes.mainContainer}>
         <AccordionLayout 
            title     = "Size"
            isDefault = {true}
          >
                        
            <fieldset>
                <legend className="sr-only">Size</legend>
                <div className={classes.mainDiv}>
                    <div className={classes.flexDiv}>
                        <input id="option-1" type="radio" name="size" value="Small" className={classes.input} defaultChecked/>
                        <label htmlFor="country-option-1" className={classes.label}>
                        Small
                        </label>
                    </div>
                    <div className={classes.flexDiv}>
                        <label htmlFor="country-option-1" className={classes.label}>
                        + 0.00
                        </label>
                    </div>
                </div>
                <div className={classes.mainDiv}>
                    <div className={classes.flexDiv}>
                        <input id="option-1" type="radio" name="size" value="Medium" className={classes.input} defaultChecked/>
                        <label htmlFor="country-option-1" className={classes.label}>
                        Medium
                        </label>
                    </div>
                    <div className={classes.flexDiv}>
                        <label htmlFor="country-option-1" className={classes.label}>
                        + 10.00
                        </label>
                    </div>
                </div>
                <div className={classes.mainDiv}>
                <div className={classes.flexDiv}>
                        <input id="option-1" type="radio" name="size" value="Large" className={classes.input} defaultChecked/>
                        <label htmlFor="country-option-1" className={classes.label}>
                        Large
                        </label>
                    </div>
                    <div className={classes.flexDiv}>
                        <label htmlFor="country-option-1" className={classes.label}>
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
