import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("phonebook/addContact", (name, number) => {
  return {
    payload: { name: name, number: number, id: uuidv4() },
  };
});

const deleteContact = createAction("phonebook/deleteContact");

const onChangeFilter = createAction("phonebook/changeFilter");

export { addContact, deleteContact, onChangeFilter };
