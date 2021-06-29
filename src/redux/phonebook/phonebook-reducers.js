import { combineReducers } from "redux";
import contactsArrray from "../../data/Contacts.json";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, onChangeFilter } from "./phonebook-actions";


const itemsReducer = createReducer(contactsArrray, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filterReducer = createReducer("", {
  [onChangeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
