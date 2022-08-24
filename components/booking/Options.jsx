import React, {useState, useEffect, useRef} from 'react'
import { bookingOptions } from './data'

const Options = () => {
    const [options, setOptions] = useState(bookingOptions);
    const bookingOptionRef = useRef(null);

    useEffect(() => {
        //get children elements within the bookinhOption container
        const elements = Array.from(bookingOptionRef.current.children);
        elements.map(ele => {
            //add the click event listener to all the children
            ele.addEventListener('click', showSuboptions)
        });
    }, [bookingOptionRef]);

    const showSuboptions = (e) => {
        //get children element of the bookingOption container
        const elements = Array.from(bookingOptionRef.current.children);
        //check if option target clicked does not have the custom css class(show) to display ul within it
        if(!e.currentTarget.classList.contains('show')) { 
            elements.forEach(ele => {
                //the target does not have custom class(show) remove the class of show from other options to hide the ul within them
                ele.classList.contains('show') ? ele.classList.remove('show') : '';
            });
            //add the custom class(show) to option target to display the ul within it
            e.currentTarget.classList.add('show'); 
        }else {
            elements.forEach(ele => {
                //if option target  has the custom class(show) to display the ul within it, then remove the custom class to hide the ul
                ele.classList.contains('show') ? ele.classList.remove('show') : '';
            });
        }
    }
   
    return (
        <section className='' ref={bookingOptionRef}>
            {options.map(option => {
                const {id, title, subOptions} = option
                return(
                    <div 
                        key={id} 
                        className='mb-4 cursor-pointer text-black'
                    >
                        <h3 className='bg-optionBg px-5 py-3'>
                            {title}
                        </h3>
                        <ul className='h-0 bg-optionBg overflow-hidden'>
                            {subOptions.map(subOption => {
                                const {id, option} = subOption
                                return(
                                    <li key={id} className='px-3 py-2 text-black'>
                                        {option}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </section>

    )
}

export default Options