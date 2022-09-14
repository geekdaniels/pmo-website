import React from 'react'
import Header from './Header';
import Options from './Options';
import Forms from './forms'

const Index = () => {
    return (
        <div className='px-5 md:px-8 grid mb-8 bg-white'>
            <Header />
            <main className=' mt-8 md:px-0 md:grid md:grid-cols-2 md:gap-x-10'>
                <Options />
                <Forms />
            </main>
        </div>
    )
};

export default Index