import React from 'react';
import style from './Backdrop.module.css';

const backgrounds = [
    {'white': {'background-color': 'white'}}, 
    {}
];

class Backdrop extends React.Component {
    constructor(props) {
        this.children = props.children;
        this.background = props.background ? props.background : 'white';
    }

    render() {
        return(
            <span></span>
        );
    }
}