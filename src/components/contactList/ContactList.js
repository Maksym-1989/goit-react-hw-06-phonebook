import React from "react";
import PropTypes from "prop-types";
import css from "./ContactList.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-actions";

const ContactList = ({ items, filter, deleteContact }) => {
  const getFilteredContacts = () => {
    const filtertoLowerCase = filter.toLowerCase();

    return items.filter((contact) =>
      contact.name.toLowerCase().includes(filtertoLowerCase)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id} className={css.item}>
          <p className={css.text}>
            {name}: {number}
          </p>
          <button
            className={css.button}
            type="button"
            onClick={() => {
              deleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = { deleteContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
