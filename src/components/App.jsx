import { StyledWrapper } from './App.styled';

export const App = () => {
  return (
    <StyledWrapper>
      <h1>Phonebook</h1>

      <ContactForm
        onAddContact={handleAddContact}
        // contacts={contacts}
      />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handelOnFilter} />
      {contacts.length ? (
        <ContactList
          contacts={filterContact}
          deletedContact={handleDeleteContact}
        />
      ) : (
        <Notificatio message={'You have no contacts'} />
      )}
    </StyledWrapper>
  );
};
