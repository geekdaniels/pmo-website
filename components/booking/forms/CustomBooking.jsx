import React from 'react'



const CustomBooking = ({customOptions, isCustomOptions, openCustomOptions, handleSelectedOptions, handleOther, deleteCustomOption, customOptionsSelected, isOther, otherRef}) => { 

    return (
        <section>
            <article className={`${customOptionsSelected.length !== 0 ? 'grid grid-cols-1 border pt-4 pb-2' : ''}`}>
                {customOptionsSelected.map(option => {
                    const {id, content} = option
                    return (
                        <div key={id} className='flex items-center w-fit basis-1/2 h-auto border-2 rounded-lg justify-self-center px-2 mb-2'>
                            <p className='inline-block mr-6'>{content}</p>
                            <button onClick={() => deleteCustomOption(id)}>
                                <svg className='text-red-500 pt-1' xmlns="http://www.w3.org/2000/svg" 
                                    width="35" height="35" fill="currentColor" 
                                    viewBox="0 0 16 16"
                                > 
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" 
                                        fill="red"
                                    >
                                    </path> 
                                </svg>
                            </button>
                        </div>
                    )
                })}
            </article>
            <article className=''>
                <div>
                    <div className='flex items-center justify-between bg-optionBg border-4 border-optionBg px-5 py-3 mb-2 cursor-pointer' 
                        onClick={(e) => openCustomOptions(e)}
                    >
                        <h3 className='font-medium'>What would you have me do?</h3>
                        <button onClick={(e) => openCustomOptions(e)}>
                            {
                                !isCustomOptions ? <svg className='text-formArrow pt-1'
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="35" height="35"  fill="currentColor" 
                                    viewBox="0 0 16 16"
                                > 
                                    <path fillRule="evenodd" 
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" 
                                        fill="#45b3ba"
                                        className='font-bold'
                                    >
                                    </path> 
                                </svg> :
                                <svg className='text-formArrow pt-1'
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="35" height="35"  fill="currentColor" 
                                    viewBox="0 0 16 16"
                                > 
                                    <path fillRule="evenodd" 
                                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" 
                                        fill="#45b3ba"
                                    >
                                    </path> 
                                    </svg>
                            }
                        </button>
                    </div>
                    <ul className={!isCustomOptions ? 'h-0 overflow-hidden' : 'h-auto border border-t-0 border-optionsBg border-solid shadow-2xl shadow-optionsBg mb-2 rounded-b-lg'}>
                        {customOptions.map(customOption => {
                            const {id, option} = customOption;
                            return (
                                <li 
                                    key={id} 
                                    className='hover:bg-headerBg focus:border-headerBg focus:outline-0 border-0 px-5 py-2 hover:bg-optionsBg'
                                    onClick={(e) => handleSelectedOptions(e)}
                                >
                                    {option}
                                </li>
                            )
                        })}
                    </ul>
                    {isOther && <div className='border-2 border-headerBg'>
                        <label htmlFor='other'></label>
                        <input 
                            name='other' 
                            type='text' 
                            id='other'
                            placeholder='what would you have me do?' 
                            // value={other} 
                            // onChange={(e) => setOther(e.target.value)}
                            className='outline-0 w-full border-0 h-10 text-xl px-3'
                            ref={otherRef}
                        />
                        <button className='bg-headerBg w-full h-8 border-0' type='submit' onClick={(e) => handleOther(e)}>Enter</button>
                    </div>}
                </div>
            </article>
        </section>
    )
}

export default CustomBooking
