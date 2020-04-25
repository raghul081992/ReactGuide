import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
    render() {
        console.log('[Persons.js] rendering ...');

        return this.props.Persons.map((person, index) => {
            return (<Person
                name={person.name}
                age={person.age}
                click={() => this.props.click(index)}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
            );
        });
    }
}



export default Persons;
