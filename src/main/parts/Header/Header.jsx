import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

// TODO: Add descriptive text
const Header = ({ id, children, backgroundColor, ...props }) => {

    return (
        <header
            id={id}
            className={styles.header} 
            style={backgroundColor && { backgroundColor }}
            children={children}
            {...props}
        >
        </header>
    );
}

Header.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]),
    backgroundColor: PropTypes.string,
};

Header.defaultProps = {
    children: null,
    backgroundColor: null,
};

export default Header;
