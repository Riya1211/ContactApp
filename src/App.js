import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import{ BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact}]);
  };

  useEffect(() => {
    const retrievedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrievedContacts) {
      setContacts(retrievedContacts);
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
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={ContactList} exact/>
          <Route path="/add" component={AddContact} />
        </Switch>
      </Router>
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContact} /> */}
    </div>
  );
}

export default App;
