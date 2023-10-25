import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterQuery, getContactsList } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/APIoperations';
import { useEffect } from 'react';

export const ContactList = () => {

    const contacts  = useSelector(getContactsList);
    const filter = useSelector(getFilterQuery);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const onDelete = (e) => {
        const { id } = e.target;
        dispatch(deleteContact(id));
    }

    	const filteredContacts = contacts.filter(
		(contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
    
    return (
 <ul className={css.contactsList}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number}) => {
          return (
                      <li key={id} className={css.listItem}>
                        <h2 className={css.contact}>{name}</h2>
                        <p className={css.contact}>{number}</p>
                        <button
                            id={id}
                            onClick={onDelete}
                            type='button'
                            className={css.deleteBtn}>DELETE
                        </button>
                    </li>
        );
        })
  )  : 'No results'}
    </ul>
    )
};