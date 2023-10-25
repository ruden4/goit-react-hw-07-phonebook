import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getIsLoding } from 'redux/selectors';


export const App = () => {

  const loading = useSelector(getIsLoding);

  return (
<div className={css.container}>
      <h1 className={css.bookTitle}>Phonebook
        <span>{loading && 'Loading...'}</span>
      </h1>
        <ContactForm/>
        <h2 className={css.contactsList}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
  );
};
