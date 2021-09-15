import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import styles from './Button.module.css';

/**
 * 
 * @param {string} id - unique identifier
 * @param {string} text - button text
 * @param {string} backgroundColor - overriding background color string
 * @param {string} size - size (small, medium, large)
 * @param {string} variant - variant (primary, secondary)
 * @param {bool} isLoading - T/F if loading
 * @param {string} icon - icon
 * @param {func} onClick - click event listener
 * @returns button component
 */
const Button = ({ id, text, backgroundColor, size, variant, isLoading, icon, ...props}) => {

    // TODO: Add ripple effect on click (or some other animation)
    // TODO: Add text color field
    // TODO: Add match text and border for outlined (secondary)

    return(
        <button 
            id={id}
            type="button"
            className={[styles.button, styles[`button-${size}`], styles[`button-${variant}`]].join(' ')} 
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            <IconContext.Provider 
                value={{ size: '1em', style: { 'vertical-align': 'text-top'} }}>
                {icon}
            </IconContext.Provider>
            <span>{icon && text ? ' ' : null}</span>
            <span>{isLoading ? 'Loading...' : text}</span>
        </button>
    );
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    isLoading: PropTypes.bool,
    icon: PropTypes.element,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    text: undefined,
    backgroundColor: null,
    size: 'md',
    variant: 'primary',
    isLoading: false,
    icon: undefined,
    onClick: undefined,
};

export default Button;
