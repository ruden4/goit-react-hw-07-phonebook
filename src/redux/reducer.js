import { combineReducers } from 'redux';
import { filterReducer } from './filterSlice'
import { contactsReducer } from './contactsSlice'

export const reducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});