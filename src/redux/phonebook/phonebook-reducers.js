import { combineReducers } from "redux";
import { ADD_CONTACT, DELETE_CONTACT, ON_CHANGE_FILTER } from "./counter-types";
import contactsArrray from "../../data/Contacts.json";
import { createReducer } from "@reduxjs/toolkit";


const itemsReducer = createReducer(contactsArrray, {
  [ADD_CONTACT]: (state, { payload }) => [payload, ...state],
  [DELETE_CONTACT]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filterReducer = createReducer("", {
  [ON_CHANGE_FILTER]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
