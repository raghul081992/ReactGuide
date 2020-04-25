import React, { Component } from 'react';
import Classes from '../Container/App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Cockpit/Cockpit'

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
      persons = <Persons 
            Persons = {this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangedHandler} />                  
    }

//     const StyledButton = Styled.button`
//       background-color: ${props => props.alt ? 'red' : 'green'};
//       color: white;
//       font: inherit;
//       border: 1px solid;
//       padding: 8 px;
//       cursor: pointer;
      
//       &:hover {
//         background-color:${props => props.alt ? 'salmon' : 'lightgreen'};
//         color:black
//       }
// `

    return (
    
<div className= {Classes.App}>
          
            <Cockpit persons = {this.state.persons}
            ShowPersons = {this.state.ShowPersons}
            clicked = {this.togglePersonHandler}/>
            {persons}
          
        </div>  
          
    );
  }


}

export default App;
