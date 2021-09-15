import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.children = props.children;
    }

    render() {
        return (
            <ul>
                {this.children.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
        );
    }
}

export default List;