import React from "react";
import css from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "../../redux/contacts/contactsSlice";

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={filterValue}
        onChange={event => dispatch(filterContact(event.target.value))}
        placeholder="Enter name for Search"
      />
    </label>
  );
 
}

export default Filter;