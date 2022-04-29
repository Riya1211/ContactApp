import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import { useState, useEffect } from "react";
import{ Route, Switch} from "react-router-dom";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localData ? JSON.parse(localData) : [];
  });

  const addContactHandler = contact => {
    console.log(contact)
    setContacts([...contacts, { id: contacts.length, ...contact }]);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  const removeContact = id => {
    const newContactList = contacts.filter(contact => contact.id !==id);
    setContacts(newContactList);
  }
  
  return (
    <div className="ui container">
        <Header />
        <Switch>
          <Route path="/" component={() => <ContactList contacts={contacts} getContactId={removeContact} /> } exact/>
          <Route path="/add" component={(props) => <AddContact {...props} addContactHandler={addContactHandler}  />} />
          <Route path="/contact/:id" component={ContactDetails} />
        </Switch>
    </div>
  );
}

export default App;
