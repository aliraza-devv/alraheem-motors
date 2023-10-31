import React from 'react';

import BenefitsBoxes from './BenefitsBoxes/BenefitsBoxes';
import classes from './Benefits.module.scss';

const Benefits = props => {
    return (
        <section className={classes.Benefits} id="benefits">
            <div className={classes.Benefits__heading}>
                <h1>Our Benefits</h1>
                <span>Al-Raheem Motors</span>
            </div>
            <BenefitsBoxes />
        </section>
    );
};

export default Benefits;