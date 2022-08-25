import React from 'react'

const Books = ({bookDetails}) => {
    return (
        <section className=''>
            <h3 className='font-thin text-sm text-footerTitle mb-4'>Books By PMO</h3>
            {bookDetails.map(book => {
                const {id, title, src, price} = book;
                return (
                    <section key={id}>
                        <div className='mb-5'>
                            <div className='flex justify-between items-center mb-2'>
                                <p className='text-footerParagraph'>{title}</p>
                                <img src={src} alt={title} />
                            </div>
                            <div>
                                <span className='text-footerParagraph'>{price}</span>
                            </div>
                        </div>
                    </section>
                )
            })}
        </section>
    )
}

export default Books
