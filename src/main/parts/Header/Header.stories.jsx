import React from 'react';
import Header from './Header';

export default {
    title: 'Parts/Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' },
    },    
};

const Template = (args) => {
    return(
        <Header {...args}>
            <h1 style={{color: `${args.textColor}`}}>Example Content</h1>
        </Header>
    );
}


export const Default = Template.bind({});
Default.args = {
    id: 'default',
    textColor: 'white',
};