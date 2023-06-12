import React from 'react';
import { Btn, Item, List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contact/contactSelector';
import { deleteContact } from 'redux/contact/contactSlice';
import { TiDelete } from 'react-icons/ti';
import { getFilter } from 'redux/filter/filterSelector';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filterContacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <span>{name}:</span>
            <span>{number}</span>

            <Btn type="button" onClick={() => onDelete(id)}>
              <TiDelete size="20" />
            </Btn>
          </Item>
        );
      })}
    </List>
  );
};
