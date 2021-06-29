import React from "react";
import { connect } from "react-redux";
import { onChangeFilter } from "../../redux/phonebook/phonebook-actions";

import PropTypes from "prop-types";
import css from "./Filter.module.css";

const Filter = ({ filter, onChangeFilter }) => {
  const onChange = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = { onChangeFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
