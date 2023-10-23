import css from './ContactList.module.css'
import { getContactsList } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, getFilterQuery } from 'redux/contactsSlice';


export const ContactList = () => {

    const list = useSelector(getContactsList);
    const filter = useSelector(getFilterQuery);
    const dispatch = useDispatch();

    const filteredList = () => {
        const currentValue = filter.toLowerCase().trim();
        return list.filter(contact =>
        contact.name.toLowerCase().includes(currentValue)
        );
  };

    const contactsList = filteredList();

    const onDelete = (e) => {
        const { id } = e.target;
        dispatch(removeContact(id));
    }
    
    return(
        <ul className={css.contactsList}>
            {contactsList.map(({name, number, id}) => { 
                return(
                <li key={id} className={css.listItem}>
                    <h2 className={css.contact}>{name}</h2>
                    <p className={css.contact}>{number}</p>
                    <button 
                    id={id}
                    onClick={onDelete}
                    type='button' 
                    className={css.deleteBtn}>DELETE
                    </button></li>
            )
            })}
        </ul>
    )
}