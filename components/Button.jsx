// import react and our button styles
import React from 'react';
import './Button.css';

// create function to test if it is a operator
const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

// create button function
export const Button = props => (
    <div className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`} 
        onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
);
