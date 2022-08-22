import React from 'react'
import Header from './Header';
import Options from './Options';
import Forms from './forms'

const Index = () => {
    return (
        <div className='px-14 sm:grid mb-8'>
            <Header />
            <main className='mt-8 sm:grid sm:grid-cols-2 sm:gap-x-10'>
                <Options />
                <Forms />
            </main>
        </div>
    )
};

export default Index