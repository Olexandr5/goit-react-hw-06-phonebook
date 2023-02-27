import css from "./FormContact.module.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "notiflix";
import { handleAddContact } from "../../redux/contacts/contactsSlice";


function FormContact() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const [form, setForm] = useState({
    name: "",
    number: "",
  });


  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };
  const { name, number } = form;



  const isUniqueContact = () => {
    const isExistContact = contacts.find(contact => contact.name === name);
    if (isExistContact) {
      Notify.failure("Contact is already exist");
    }
    return !isExistContact;
  };


  const validateForm = () => {
    if (!name || !number) {
      Notify.failure("Some field is empty");
      return false;
    }
    return isUniqueContact(name);
  };



  const handleFormSubmit = event => {
    event.preventDefault();
    const isValidateForm = validateForm();
    if (!isValidateForm) return;

    dispatch(
      handleAddContact({ id: nanoid(), name, number }),
      Notify.success("Contact was added to phonebook"),
    );
    const resetForm = () => setForm({ name: "", number: "" });
    resetForm();
  };



  useEffect(() => {
    if (contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);


    return (
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label className={css.label} htmlFor="">
          Name
            <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={handleChangeForm}
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={css.label} htmlFor="">
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            placeholder="Enter phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={number}
            onChange={handleChangeForm}
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={css.button} type="submit">
          <span>Add contact</span>
        </button>
      </form>
  ); 
}

export default FormContact;
