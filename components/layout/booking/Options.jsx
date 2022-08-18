import React, {useState, useEffect, useRef} from 'react'
import { bookingOptions } from './data'

const Options = () => {
    const [options, setOptions] = useState(bookingOptions);
    const bookingOptionRef = useRef(null);

    useEffect(() => {
        const elements = Array.from(bookingOptionRef.current.children);
        elements.map(ele => {
            ele.addEventListener('click', showSuboptions)
        });
    }, [bookingOptionRef]);

    const showSuboptions = (e,id) => {
        const elements = Array.from(bookingOptionRef.current.children);
        if(!e.currentTarget.classList.contains('show')) {
            elements.forEach(ele => {
                ele.classList.contains('show') ? ele.classList.remove('show') : '';
            });
            e.currentTarget.classList.add('show');
        }else {
            elements.forEach(ele => {
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
                        className='mb-4'
                    >
                        <h3 className='bg-optionBg px-5 py-3'>
                            {title}
                        </h3>
                        <ul className='h-0 bg-optionBg overflow-hidden'>
                            {subOptions.map(subOption => {
                                const {id, option} = subOption
                                return(
                                    <li key={id} className='px-3 py-2'>
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