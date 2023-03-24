import { Container, Title } from './App.styled';
import { Component } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    const newContact = {
      ...data,
      id: nanoid(),
    };

    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  handleFilterInput = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();

    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <div>
          <h2>Contacts</h2>
          <Filter
            filter={this.state.filter}
            onChange={this.handleFilterInput}
          />
          <ContactList
            contacts={filterContacts}
            onDeleteContact={this.onDeleteContact}
          />
        </div>
      </Container>
    );
  }
}

export default App;
