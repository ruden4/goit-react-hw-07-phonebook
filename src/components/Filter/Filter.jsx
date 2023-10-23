import { useDispatch, useSelector } from 'react-redux';
import { getFilterQuery, changeFilter } from 'redux/contactsSlice';

import css from './Filter.module.css'

export const Filter = () => {
    
    const dispatch = useDispatch();
    const filterQuery = useSelector(getFilterQuery);

    const handleFilter = (e) => {
        dispatch(changeFilter(e.target.value))
    }

    return (
        <label className={css.label}>Find contacts by name
            <input className={css.input} type="text" onChange={handleFilter} value={filterQuery}/>
            </label>
    )
}
