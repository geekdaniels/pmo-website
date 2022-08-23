import React from 'react'

const Contacts = ({contacts}) => {
    const {title, phone, email, address} = contacts;
    return (
        <section className='mb-12'>
            <h3 className='font-thin text-sm text-footerTitle mb-4'>
                {title} 
            </h3>
            <p className='mb-2 text-footerParagraph'>
                <span className='font-bold'>Phone: </span>
                {phone} 
            </p>
            <p className='mb-2 text-footerParagraph'>
                <span className='font-bold'>Email: </span>
                <a href={`mailto:${email}`}>{email}</a> 
            </p>
            <p className='mb-2 text-footerParagraph'>
                <span className='font-bold'>Address: </span> 
                {address}
            </p>
        </section >
    )
}

export default Contacts
