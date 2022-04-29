import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const deleteContact = (id) => {
    props.getContactId(id);
  };

  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link to="/add">
        <button className="ui button violet">Add Contact</button>
      </Link>
      <div className="ui celled list">
        {props.contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            clickHandler={deleteContact}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
