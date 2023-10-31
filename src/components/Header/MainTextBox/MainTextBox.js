import React from 'react';

import classes from './MainTextBox.module.scss';

const MainTextBox = props => {
    return (
        <div className={classes.mainTextBox}>
            <h1 className={classes.mainTextBox__title}>Welcome to AL-Raheem Motors and <br/> Drive Safe</h1>
            <p className={classes.mainTextBox__para}>We are hopeful to facilitate on a single door.we have introduced<br/>a brand new technique for your convenience.we hope that we<br/>will start our journey together.</p>
        </div>
    );
};

export default MainTextBox;