import React from 'react';
import { MdCached } from "react-icons/md";
import Button from './Button';

export default {
    title: 'Parts/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    text: 'Button',
    id: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    text: 'Button',
    id: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    variant: 'tertiary',
    text: 'Button',
    id: 'tertiary',  
};

export const Small = Template.bind({});
Small.args = {
    variant: 'contained',
    text: 'Button',
    id: 'small',
    size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = { 
    variant: 'contained',
    text: 'Button',
    id: 'small',
    size: 'md',
};

export const Large = Template.bind({});
Large.args = {
    variant: 'contained',
    text: 'Button',
    id: 'small',
    size: 'lg',
};

export const Loading = Template.bind({});
Loading.args = {
    variant: 'contained',
    text: 'Button',
    isLoading: true,
    id: 'loading',
}

export const IconWithText = Template.bind({});
IconWithText.args = {
    variant: 'contained',
    text: 'Button',
    icon: <MdCached />,
    id: 'icon',
}

export const IconAlone = Template.bind({});
IconAlone.args = {
    variant: 'contained',
    icon: <MdCached />,
    id: 'icon',
}