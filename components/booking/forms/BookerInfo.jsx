import React from 'react'


const BookerInfo = ({bookerInfo, handleBookerInfo, handleSubmit, inputsSectionRef}) => {

    return (
        <section>
            <div className='grid mb-3 gap-1'>
                <label htmlFor='name'>
                    Your Name *
                </label>
                <input 
                    type='text' 
                    name='name' 
                    value={bookerInfo.name} 
                    onChange={(e) => handleBookerInfo(e)}
                    className='h-10 bg-optionBg outline-none focus:border-2 focus:border-headerBg px-2'
                />
            </div>
            <div className='grid mb-3 gap-1'>
                <label htmlFor='email'>
                    Your Email *
                </label>
                <input 
                    type='text' 
                    name='email' 
                    value={bookerInfo.email} 
                    onChange={(e) => handleBookerInfo(e)} 
                    className='h-10 bg-optionBg outline-none focus:border-2 focus:border-headerBg px-2'
                />
            </div>
            <div className='grid mb-3 gap-1 bg-optionsBg'>
                <label htmlFor='phone'>
                    Your Phone *
                </label>
                <input 
                    type='text' 
                    name='phone' 
                    value={bookerInfo.phone} 
                    onChange={(e) => handleBookerInfo(e)} 
                    className='h-10 bg-optionBg outline-none focus:border-2 focus:border-headerBg px-2'
                />
            </div>
            <div className='grid mb-3 gap-1'>
                <label htmlFor='organization'>
                    Name of Organization *
                </label>
                <input 
                    type='text' 
                    name='organization' 
                    value={bookerInfo.organization} 
                    onChange={(e) => handleBookerInfo(e)}
                    className='h-10 bg-optionBg outline-none focus:border-2 focus:border-headerBg px-2' 
                />
            </div>
            <div className='grid mb-3 gap-1'>
                <label htmlFor='eventTheme'>
                    Event Theme *
                </label>
                <input 
                    type='text' 
                    name='eventTheme' 
                    value={bookerInfo.eventTheme} 
                    onChange={(e) => handleBookerInfo(e)} 
                    className='h-10 bg-optionBg outline-none focus:border-2 focus:border-headerBg px-2'
                />
            </div>
            <div className='grid mb-3 gap-1'>
                <label htmlFor='eventDate'>
                    Date of Event *
                </label>
                <input 
                    type='date' 
                    name='eventDate' 
                    value={bookerInfo.eventDate} 
                    onChange={(e) => handleBookerInfo(e)} 
                    className='h-10 bg-optionBg outline-none focus:border-2 focus:border-headerBg px-2'
                />
            </div>
            <div className='grid mb-3 gap-1'>
                <label htmlFor='eventLocation'>
                    Event Location *
                </label>
                <input 
                    type='text' 
                    name='eventLocation' 
                    value={bookerInfo.eventLocation} 
                    onChange={(e) => handleBookerInfo(e)} 
                    className='h-10 bg-optionBg outline-none focus:border-2 focus:border-headerBg px-2'
                />
            </div>
            <div className='grid mb-3 gap-1'>
                <label htmlFor='website'>
                    Website (If any)
                </label>
                <input 
                    type='text' 
                    name='website' 
                    value={bookerInfo.website} 
                    onChange={(e) => handleBookerInfo(e)} 
                    className='h-10 bg-optionBg outline-none focus:border-2 focus:border-headerBg px-2'
                />
            </div>
            <div className='grid mb-3 gap-1'>
                <label htmlFor='budget'>
                    Your Budget *
                </label>
                <input 
                    type='text' 
                    name='budget' 
                    value={bookerInfo.budget} 
                    onChange={(e) => handleBookerInfo(e)} 
                    className='h-10 bg-optionBg outline-none focus:border-2 focus:border-headerBg px-2'
                />
            </div>
            <div className='grid mb-3 gap-1'>
                <label htmlFor='moreInfo'>
                    More Information?
                </label>
                <textarea 
                    type='text' 
                    name='moreInfo' 
                    value={bookerInfo.moreInfo} 
                    onChange={(e) => handleBookerInfo(e)} 
                    className='h-60 bg-optionBg outline-none focus:border-2 focus:border-headerBg p-2 cursor-pointer'
                >
                </textarea>
            </div>

            <button 
                onClick={(e) => handleSubmit(e)}
                className='bg-headerBg py-2 px-6 rounded-md cursor-pointer'
            >
                Book Appointment
            </button>
        </section>
    )
}

export default BookerInfo
