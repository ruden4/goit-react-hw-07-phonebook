import css from './App.module.css';
import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { getContactsList } from 'redux/contactsSlice';
import { Filter } from './Filter/Filter';

export const App = () => {

  const list = useSelector(getContactsList);

  return (
<div className={css.container}>
        <h1 className={css.bookTitle}>Phonebook</h1>
        <ContactForm/>
        <h2 className={css.contactsList}>Contacts</h2>
        <Filter />
      {list.length !== 0 && <ContactList />}
      </div>
  );
};
