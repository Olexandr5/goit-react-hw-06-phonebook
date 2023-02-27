import "./App.module.css";
import FormContact from "../FormContact/FormContact";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";


function App() {
  return (
      <>
        <h1>Phonebook</h1>

         <FormContact />
        
        <h2>Contants</h2>
        
        <Filter />

        <ContactsList
         
        ></ContactsList>

       
      </>
    );
    
}

export default App;