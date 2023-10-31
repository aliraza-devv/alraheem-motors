import React from 'react';

import Position from './Position/Position';
import classes from './Works.module.scss';

const Works = props => {
    return (
        <section className={classes.Works} id="works">
            <h1 className={classes.Works__heading}>How does<br/>Al-Raheem Motors Works</h1>
            <Position />
        </section>
    );
};

export default Works;