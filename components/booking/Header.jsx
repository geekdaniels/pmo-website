import React from 'react'
import { bookingHeading } from './data'

const Header = () => {
    return (
        <header className='pr-8 pl-5 py-5 mb-1 text-left bg-headerBg'>
            <h1 className='text-xl font-medium'>{bookingHeading}</h1>
        </header>
    )
}

export default Header