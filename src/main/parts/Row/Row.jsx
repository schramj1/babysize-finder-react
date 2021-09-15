import React from 'react';
import { Grid } from '@material-ui/core';

// TODO: Add fill prop
class Row extends React.Component {
    constructor(props) {
        super(props);
        this.children = Array.isArray(props.children) ? props.children : Array.of(props.children);
        this.spacing = props.spacing ? props.spacing : 1;
        this.width = props.width ? props.width : 12;
        this.direction = props.vertical ? 'column' : 'row';
        this.widths = props.widths ? props.widths : Array.from(
            Array(this.children.length))
            .fill(this.width / this.children.length);
    }

    // wrap children in a flex container??
    render() {
        return (
            <Grid 
                direction={this.direction} 
                container 
                spacing={this.spacing}
                justifyContent='space-evenly'
                xs={this.width}
            >
                {this.children.map((element, index) => (
                    <Grid  
                        item 
                        xs={this.widths[index]}
                        spacing={element.spacing ? element.spacing : 1}
                    >
                        {element}
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default Row;
