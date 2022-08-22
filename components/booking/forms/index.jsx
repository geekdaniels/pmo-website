import React, {useState, useRef, useEffect} from 'react'
import CustomBooking from './CustomBooking'
import BookerInfo from './BookerInfo'
import Modal from './Modal'
import { customBookingOptions } from '../data'

const Index = (props) => {
    const [customOptions, setCustomOptions] = useState(customBookingOptions)
    const [isCustomOptions, setIsCustomOptions] = useState(false) //state to check if customOptions is displayed or hidden - needed to change arrow icon
    const [customOptionsSelected, setCustomOptionsSelected] = useState([]) //state to store custom Options selected and to display the options
    const [isOther, setIsOther] = useState(false) //state to check if custom option selected is 'other'
    const [bookerInfo, setBookerInfo] = useState({name: '', email: '', phone: '', organization: '', eventTheme: '', eventDate: '', eventLocation: '', website: '', budget: '', moreInfo: ''})
    const [completeBookings, setCompleteBookings] = useState([]) //store every booker's info after submission
    const [isModal, setIsModal] = useState(false) //boolean state to check if booker's info fiels marked as important is not empty
    const otherRef = useRef(null)

    const openCustomOptions = (e) => {
        e.preventDefault()
        //display and hide customOptions
        isCustomOptions ? setIsCustomOptions(false) : setIsCustomOptions(true)
    };

    const handleSelectedOptions = (e) => {
        if(e.target.textContent !== 'select an option...' && e.target.textContent !== 'other') {
            const content = e.target.textContent
            if(customOptionsSelected.some(option => option.content === content)) {
                //ensure same customoOption is not selected twice
                setCustomOptionsSelected(customOptionsSelected)
            }else {
                const option = {id: customOptionsSelected.length + 1, content}
                setCustomOptionsSelected([...customOptionsSelected, option])
            }
        };
        if(e.target.textContent === 'other') {
            setIsOther(true) //open input to take in customized customOption
            setIsCustomOptions(false) //hide the dropdown for customOption
        }
    };

    const deleteCustomOption = (id) => {
        const newOptions = customOptionsSelected.filter(option => option.id !== id);
        setCustomOptionsSelected(newOptions)
        console.log(id)
    };

    useEffect(() => {
        if(isOther) {
            otherRef.current.focus()
        }
     }, [isOther]);

    const handleOther = (e) => {
        e.preventDefault()
        const content = otherRef.current.value
        const option = {id: customOptionsSelected.length + 1, content}
        setCustomOptionsSelected([...customOptionsSelected, option])
        setIsOther(false)
    };

    const handleBookerInfo = (e) => {
        const {name, value} = e.target
        setBookerInfo({...bookerInfo, [name]: value})
        setIsCustomOptions(false)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, email, phone, organization, eventTheme, eventDate, eventLocation, budget} = bookerInfo
        const checkEmptyInfo = [name, email, phone, organization, eventTheme, eventDate, eventLocation, budget]
        if(checkEmptyInfo.every(info => info !== '')) {
            const completeInfo = {customOptionsSelected, bookerInfo}
            setCompleteBookings([...completeBookings, completeInfo])
            //reset state
            setCustomOptionsSelected([])
            //reset state
            setBookerInfo({name: '', email: '', phone: '', organization: '', eventTheme: '', eventDate: '', eventLocation: '', website: '', budget: '', moreInfo: ''})
            setIsModal(false)
        }else {
            setIsModal(true) //show modal for incomplete booker info
        }
    }


    return (
        <form className='sm:mt-16'>
            <CustomBooking
                customOptions={customOptions}
                openCustomOptions={openCustomOptions}
                customOptionsSelected={customOptionsSelected}
                handleSelectedOptions={handleSelectedOptions}
                otherRef={otherRef}
                handleOther={handleOther}
                deleteCustomOption={deleteCustomOption}
                isCustomOptions={isCustomOptions}
                isOther={isOther}
            />
            <BookerInfo
                bookerInfo={bookerInfo}
                handleBookerInfo={handleBookerInfo}
                handleSubmit={handleSubmit}
            />
            {isModal && <Modal />}
        </form>
    )
}

export default Index
