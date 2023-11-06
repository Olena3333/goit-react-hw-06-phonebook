import React from 'react';
import { StyledForm, StyledInput } from './ContactForm.styled';
import { StyledButton } from 'components/App.styled';

export const ContactForm = () => {
  return (
    <StyledForm onSubmit={handelOnSubmit}>
      <label>
        Name:
        <StyledInput
          type="text"
          placeholder="Enter the name "
          onChange={handelOnChange}
          value={name}
          name="name"
          required
        />
      </label>
      <label>
        Number:
        <StyledInput
          onChange={handelOnChange}
          value={number}
          placeholder="Enter the number"
          type="tel"
          name="number"
          required
        />
      </label>
      <StyledButton disabled={!name}>Add contact</StyledButton>
    </StyledForm>
  );
};
