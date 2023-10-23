import { createSlice } from "@reduxjs/toolkit";
import { defaultList } from "./defaultList";

export const contactsSlice = createSlice({

    name: 'contacts',
    initialState:{
        items: defaultList,
        filter: ""
    },

    reducers: {
        addContact: (state, {payload}) => {
            state.items.push(payload)
        },
        removeContact: (state, {payload}) => {
             state.items = state.items.filter(({ id }) => id !== payload);
        },
        changeFilter(state, { payload }) {
            state.filter = payload;
        },
    },
});

export const { addContact, removeContact, changeFilter } = contactsSlice.actions;
export const getContactsList = state => state.contacts.items;
export const getFilterQuery = state => state.contacts.filter;

export default contactsSlice.reducer;