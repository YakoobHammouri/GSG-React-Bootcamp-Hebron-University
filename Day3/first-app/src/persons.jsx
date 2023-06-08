import React from "react";

const Persons = (props) => {   
    return (
        <div>

            <h3>My name is {props.name} and my email is {props.email}</h3>
            <button onClick={props.fun}>
                Click me
            </button>
        </div>
    );
}

export default Persons;