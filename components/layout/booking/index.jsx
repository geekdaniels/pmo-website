import React from 'react'
import Header from './Header';
import Options from './Options';
import Forms from './forms'

const Index = () => {
    return (
        <div className='px-14 sm:grid mb-8'>
            <Header />
            <main className='mt-8 grid grid-cols-2 gap-x-10 sm:block'>
                <Options />
                <Forms />
            </main>
        </div>
    )
};

export default Index