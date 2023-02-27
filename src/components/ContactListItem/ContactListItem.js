import css from "./ContactListItem.module.css";
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Notify } from "notiflix";
import { handleRemoveContact } from "../../redux/contacts/contactsSlice";

function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();

  return (
        <li className={css.listItem}>
            <span className={css.listItemText}>{name}:</span>
            <span className={css.listItemText}>{number}</span>
            <button className={css.button} type="button" onClick={() =>
              dispatch(
              handleRemoveContact(id),
              Notify.success("Contact was deleted"),
                )}>Delete</button>
        </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;