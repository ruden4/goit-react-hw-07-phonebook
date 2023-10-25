import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./APIoperations";

const contactsOperations = [fetchContacts, addContact, deleteContact];

const changeContactsFuncArr = type => contactsOperations.map(item => item[type]);

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const handleFulfilledFetch = (state, {payload}) => {
    state.isLoading = false;
    state.error = null;
    state.contacts = payload;
};

const handleFulfilledAdd = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.contacts.push(action.payload);
};

const handleFulfilledDelete = (state, action) => {
    state.isLoading = false;
    state.error = null;

    const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
    );
    if (index >= 0) {
        state.contacts.splice(index, 1);
    }
};

export const contactsSlice = createSlice({

    name: 'contacts',
    initialState:{
        contacts: [],
        isLoading: false,
        error: null
    },

    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
            .addCase(addContact.fulfilled, handleFulfilledAdd)
            .addCase(deleteContact.fulfilled, handleFulfilledDelete)
            .addMatcher(isAnyOf(...changeContactsFuncArr('pending')), handlePending)
            .addMatcher(
                isAnyOf(...changeContactsFuncArr('rejected')),
                handleRejected
            );
    },
});

export const contactsReducer = contactsSlice.reducer;