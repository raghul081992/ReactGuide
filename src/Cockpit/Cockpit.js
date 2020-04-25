import React from 'react';
import Classes from './Cockpit.module.css'


const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if(props.ShowPersons)
    {
        btnClass = Classes.Red;
    }


    if(props.persons.length <= 2) {
      assignedClasses.push(Classes.red);
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(Classes.bold);
    }

    return (
        <div className= {Classes.Cockpit}>
            <p>Muthu Karrupana swami</p>
            <p className={assignedClasses.join(' ')}>Satus</p>
            <button className = {btnClass}
            onClick={props.clicked}>
                Toggle Person
    </button>
        </div>
    )

}

export default cockpit;