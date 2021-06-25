import { v4 as uuidv4 } from "uuid";
import { ADD_CONTACT, DELETE_CONTACT, ON_CHANGE_FILTER } from "./counter-types";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction(ADD_CONTACT, (name, number) => {
  return {
    payload: { name: name, number: number, id: uuidv4() },
  };
});

const deleteContact = createAction(DELETE_CONTACT);

const onChangeFilter = createAction(ON_CHANGE_FILTER);

export { addContact, deleteContact, onChangeFilter };
