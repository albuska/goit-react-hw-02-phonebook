import { Container } from './App.styled'; 
import { Component } from 'react';
import { nanoid } from 'nanoid'; 

class App extends Component {

    state = {
      contacts: [],
      name: ''
    }


  render() {
    return (
      <Container>
        Hello baby
      </Container>
    );
  } 
};

export default App;