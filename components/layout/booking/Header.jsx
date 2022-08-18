import React from 'react'
import { bookingHeading } from './data'

const Header = () => {
    return (
        <header className='pr-10 pl-5 py-5 mb-4 text-left bg-headerBg'>
            <h1 className='text-2xl font-medium'>{bookingHeading}</h1>
        </header>
    )
}

export default Header