import React, { Component } from 'react';
import Styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: '01', name: 'Max', age: 28 },
      { id: '02', name: 'Manu', age: 29 },
      { id: '03', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    ShowPersons: false
  };



  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Raghul', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  nameChangedHandler = (event, PersonId) => {

    const personIndex = this.state.persons.findIndex(p => { return p.id === PersonId });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.ShowPersons;
    this.setState({ ShowPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }

  render() {

    

    let persons = null;


    if (this.state.ShowPersons) {
      persons = (<div>
        {
          this.state.persons.map((person, index) => {
            return <Person name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })
        }
      </div>)
      
    }

    const StyledButton = Styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid;
      padding: 8 px;
      cursor: pointer;
      
      &:hover {
        background-color:${props => props.alt ? 'salmon' : 'lightgreen'};
        color:black
      }
`

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
    
<div className="App">
          
            <p>Muthu Karrupana swami</p>
            <p className={classes.join(' ')}>Satus</p>
            <StyledButton alt = {this.state.ShowPersons} onClick={this.togglePersonHandler}>
              Toggle Person
        </StyledButton>
            {persons}
          
        </div>  
          
    );
  }


}

export default App;
