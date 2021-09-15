import React from 'react';
import Header from '../../parts/Header/Header';
import Row from '../../parts/Row/Row';

const Toolbar = ({ id }) => {

    return (
        <Header id={id}> 
            <Row>
                <h1>toolbar placeholder</h1>
                <br />
                <h1>thing 1</h1>
                <h1>thing 2</h1>
                <h1>thing 3</h1>
            </Row>
        </Header>
    );
};

export default Toolbar;
