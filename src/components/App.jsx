import { useEffect } from 'react';
import { AppDiv } from './App.styled';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactForm/ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { nanoid } from 'nanoid';
import { useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.length
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];

    savedContacts.length && setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function handleSubmit({ name, number }) {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { name, number, id: nanoid() };
    setContacts(prev => {
      return [...prev, newContact];
    });
  }

  function handleSearch(e) {
    const searchName = e.target.value;
    setFilter(searchName);
  }

  function handleDelete(e) {
    const nameToDelete = e.target.parentNode.firstChild.textContent.slice(
      0,
      -2
    );
    setContacts(prev => {
      const newContacts = prev.filter(({ name }) => name !== nameToDelete);

      return newContacts;
    });
  }

  return (
    <AppDiv className="main">
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />

      <h2>Contacts:</h2>
      <Filter handleSearch={handleSearch} />
      <ContactList
        initialValues={filteredContacts}
        handleDelete={handleDelete}
      />
    </AppDiv>
  );
};
