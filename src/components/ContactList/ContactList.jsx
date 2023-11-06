import React from 'react';
import { StyledList } from './ContactList.styled';
import { StyledButton } from 'components/App.styled';

export const ContactList = () => {
  return (
    <StyledList>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <StyledButton onClick={() => deletedContact(contact.id)}>
            Delete
          </StyledButton>
        </li>
      ))}
    </StyledList>
  );
};
