import React, {useState} from 'react'

import WatchWord from './Watchword'
import { watchWord } from './data'

import Contacts from './Contacts'
import { contacts } from './data'

import Books from './Books'
import { booksDetails } from './data'

const Footer = (props) => {
    const [watchWordData, setWatchWordData] = useState(watchWord);
    const [contactsData, setContactsData] = useState(contacts);
    const [booksData, setBooksData] = useState(booksDetails);

    return (
        <footer className='bg-black px-7 md:px-14 md:grid md:grid-cols-2 md:gap-20'>
            <section>
                <WatchWord watchWord={watchWordData} />
                <Contacts contacts={contactsData} />
            </section>
            <Books bookDetails={booksData}/>
        </footer>
    )
};

export default Footer