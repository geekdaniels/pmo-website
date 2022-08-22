import React from 'react'

const modal = ({modalContent, isInfoIncomplete, isModal}) => {
    return (
        <div className='bg-modalBg flex justify-center items-center mt-3'>
            <p className='text-xl text-center text-red-500'>Complete the fields marked as important *</p>
        </div>
    )
}

export default modal
