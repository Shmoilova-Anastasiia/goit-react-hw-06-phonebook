import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import { ContactList } from './ContactList/ContactList';
import { Container, Section, TitleH1, TitleH2 } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Section title="Phonebook">
        <TitleH1>Phonebook</TitleH1>
        <ContactForm />
        <TitleH2>Contacts</TitleH2>
        <Filter />
        <ContactList />
      </Section>
      <ToastContainer />
    </Container>
  );
};
