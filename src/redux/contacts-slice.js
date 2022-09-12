import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, removeContact } from "./contacts-operations";

const initialState = {
    items: [],
    filter: '',
    loading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [fetchContacts.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = payload;
        },
        [fetchContacts.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [addContacts.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [addContacts.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items.push(payload);
        },
        [addContacts.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [addContacts.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [addContacts.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items.push(payload);
        },
        [addContacts.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [removeContact.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [removeContact.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = store.items.filter( item => item.id !== payload);
        },
        [removeContact.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
    }
})

export default contactsSlice.reducer;