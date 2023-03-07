import Contact from "./components/Contact";
import { useState } from "react";
import React from "react";
import ContactAdder from "./components/ContactAdder";
import "./styles/app.css";
import Navbar from "./components/Navbar";

const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContacts] = useState(getContacts ? getContacts : []);
  const addContact = (p) => {
    const allContacts = [p, ...contacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };
  const deleteAll = () => {
    localStorage.clear();
    setContacts([]);
  };
  return (
    <>
      <Navbar />
      <div className="contact_adder">
        <ContactAdder oncontactAdded={addContact} />
      </div>
      <div className="contact_list">
        <h3>Contact List: </h3>
        <button onClick={deleteAll} style={{ background: "#cc0800" }}>
          Clear All
        </button>
        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}
      </div>
    </>
  );
};

export default App;
