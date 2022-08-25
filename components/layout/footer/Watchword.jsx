import React from 'react'

const WatchWord = ({watchWord}) => {
    const {title, content} = watchWord
    return <section className='mb-12'>
        <h3 className='font-thin text-sm mb-4 text-footerTitle'>{title}</h3>
        <p className='leading-relaxed text-justify text-footerParagraph'>{content}</p>
    </section>
}

export default WatchWord
