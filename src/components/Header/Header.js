import React from 'react';

import MainTextBox from './MainTextBox/MainTextBox';
import ContactBox from './ContactBox/ContactBox';
import classes from './Header.module.scss';

const Header = props => {
    return (
        <header className={classes.header}>
            <MainTextBox />
            <ContactBox />
        </header>
    );
};

export default Header;