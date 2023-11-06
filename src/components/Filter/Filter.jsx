import { StyledInput } from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import { StyledTitle } from './Filter.style';

export const Filter = () => {
  return (
    <div>
      <StyledTitle>Find contact by name</StyledTitle>
      <StyledInput
        onChange={onFilterChange}
        value={filter}
        placeholder="Enter filter value"
        name="filter"
      ></StyledInput>
    </div>
  );
};
