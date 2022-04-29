import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const deleteContact = (id) => {
    props.getContactId(id);
  };

  const contacts = [
    { id: "1", name: "John", email: "john@gmail.com" },
    { id: "2", name: "Lily", email: "lily@gmail.com" },
  ];
  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link to="/add">
        <button className="ui button violet">Add Contact</button>
      </Link>
      <div className="ui celled list">
        {contacts.map((contact) => (
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
