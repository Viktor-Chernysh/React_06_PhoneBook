// import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact, deleteContact } from 'components/Contacts/contactsSlice';
// import useLocalStorage from './hooks/hooks';
import ContactForm from './components/Form/ContactForm';
import ContactList from './components/Contacts/ContactList ';
import Filter from './components/Filter/Filter';
import './App.css';

function App() {
  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useLocalStorage('contacts', contactsData);
  // const [filter, setFilter] = useState('');
  const filter = useSelector(store => store.filter);
  const handleSubmit = data => {
    const check = contacts.find(
      contact => contact.name === data.name && contact.number === data.number
    );
    if (check) {
      return alert(`${data.name} is already in contacts`);
    }
    dispatch(addContact(data));
    // setContacts(prevContacts => [{ ...data, id: nanoid() }, ...prevContacts]);
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
    // setContacts(contacts.filter(el => el.id !== id));
  };

  // const handleFilter = e => {
  //   setFilter(e.target.value);
  // };

  const normalizedFilter = filter.toLowerCase();
  const isContacts = contacts.length > 0;
  const visibleContacts = contacts.filter(
    el =>
      el.name.toLowerCase().includes(normalizedFilter) ||
      el.number.includes(normalizedFilter)
  );

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} />
      {isContacts ? (
        <ContactList contacts={visibleContacts} onDelete={handleDelete} />
      ) : (
        <p>
          <b>There is no contacts yet!</b>
        </p>
      )}
    </div>
  );
}
// class oldApp extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   handleSubmit = (data) => {
//     const check = this.state.contacts.find((el) => el.name === data.name);
//     if (check) {
//       return alert(`${data.name} is already in contacts`);
//     }
//     this.setState((prevState) => ({
//       contacts: [{ ...data, id: nanoid() }, ...prevState.contacts],
//     }));
//   };

//   handleDelete = (id) => {
//     this.setState({
//       contacts: this.state.contacts.filter((el) => el.id !== id),
//     });
//   };

//   handleFilter = (e) => {
//     this.setState({ filter: e.target.value });
//   };
//   componentDidMount() {
//     const parsedData = JSON.parse(localStorage.getItem("contacts"));
//     if (parsedData) {
//       this.setState({ contacts: parsedData });
//     }
//   }
//   componentDidUpdate(pP, pS) {
//     if (pS.contacts !== this.state.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }
//   render() {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     const isContacts = this.state.contacts.length > 0;
//     const visibleContacts = contacts.filter(
//       (el) =>
//         el.name.toLowerCase().includes(normalizedFilter) ||
//         el.number.includes(normalizedFilter)
//     );
//     return (
//       <div className="App">
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.handleSubmit} />
//         <h2>Contacts</h2>
//         <Filter filter={this.handleFilter} value={filter} />
//         {isContacts ? (
//           <ContactList
//             contacts={visibleContacts}
//             onDelete={this.handleDelete}
//           />
//         ) : (
//           <p>
//             <b>There is no contacts yet!</b>
//           </p>
//         )}
//       </div>
//     );
//   }
// }

export default App;

//write by AI
// import React, { useState, useEffect } from "react";
// import { nanoid } from "nanoid";
// import ContactForm from "./components/Form/ContactForm";
// import ContactList from "./components/Contacts/ContactList ";
// import Filter from "./components/Filter/Filter";
// import "./App.css";

// const App = () => {
//   const [contacts, setContacts] = useState([
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ]);
//   const [filter, setFilter] = useState("");

//   useEffect(() => {
//     const parsedData = JSON.parse(localStorage.getItem("contacts"));
//     if (parsedData) {
//       setContacts(parsedData);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   const handleSubmit = (data) => {
//     const check = contacts.find((el) => el.name === data.name);
//     if (check) {
//       return alert(`${data.name} is already in contacts`);
//     }
//     setContacts((prevContacts) => [{ ...data, id: nanoid() }, ...prevContacts]);
//   };

//   const handleDelete = (id) => {
//     setContacts((prevContacts) => prevContacts.filter((el) => el.id !== id));
//   };

//   const handleFilter = (e) => {
//     setFilter(e.target.value);
//   };

//   const normalizedFilter = filter.toLowerCase();
//   const isContacts = contacts.length > 0;
//   const visibleContacts = contacts.filter(
//     (el) =>
//       el.name.toLowerCase().includes(normalizedFilter) ||
//       el.number.includes(normalizedFilter)
//   );

//   return (
//     <div className="App">
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={handleSubmit} />
//       <h2>Contacts</h2>
//       <Filter filter={handleFilter} value={filter} />
//       {isContacts ? (
//         <ContactList contacts={visibleContacts} onDelete={handleDelete} />
//       ) : (
//         <p>
//           <b>There are no contacts yet!</b>
//         </p>
//       )}
//     </div>
//   );
// };

// export default App;
