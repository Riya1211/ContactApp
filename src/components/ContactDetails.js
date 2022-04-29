import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';

const ContactDetails = (props) => {
    const [user, setUser] =useState({});
    const {id} =useParams();
    const LOCAL_STORAGE_KEY = "contacts";

    useEffect(() => {
        const retrieveContacts = JSON.parse(
            localStorage.getItem(LOCAL_STORAGE_KEY)
          );
          if (retrieveContacts) {
            const contact = retrieveContacts.find(contact => contact.id === parseInt(id));
            setUser(contact);
          }
    }, [id]);
    const randomNum = () => Math.floor(Math.random() * 99) + 1;
  return (
    <div className='main'> 
        <div className='ui card centered'>
            <div className="image">
                <img src={`https://randomuser.me/api/portraits/men/${randomNum()}.jpg`} alt="user" />
            </div>
            <div className="content">
                <div className="header">{user.name}</div>
                <div className="description">{user.email}</div>
            </div>
        </div>
        <div className="center-div">
            <Link to='/'>
                <button className="ui button blue center">
                    Back to contact List
                </button>
            </Link>
        </div>
    </div>
  )
}

export default ContactDetails