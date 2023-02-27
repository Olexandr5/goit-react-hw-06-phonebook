import css from "../ContactsList/ContactList.module.css";
import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import { useSelector } from "react-redux";


function ContactsList() {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);

  const isVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  const filterContact = isVisibleContacts();

  return (
          <ul className={css.list}>
          {filterContact.map(contact => (
              <ContactListItem
              key={contact.id}
              id={contact.id}
                  name={contact.name}
                  number={contact.number}
              />
          ))}
          </ul>
      );
}


export default ContactsList;