import React from 'react';
import { Btn, Item, List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contactSelector';
import { deleteContact } from 'redux/contactSlice';
import { TiDelete } from 'react-icons/ti';

export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => {
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
