import React from 'react';

import classes from './TextBox.module.scss';

const TextBox = props => {
    return (
        <div className={classes.Footer__textBox}>
            <h1 className={classes.Footer__textBox__title}>AL-Raheem Motors</h1>
            <p className={classes.Footer__textBox__span}>Copyright&#169;2021| All Right Reserved.</p>
        </div>
    );
};

export default TextBox;