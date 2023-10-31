import React from 'react';

import ServicesHead from './ServicesHead/ServicesHead';
import FeatureBoxes from './FeatureBoxes/FeatureBoxes';
import classes from './Services.module.scss';

const Services = props => {
    return (
        <section className={classes.services} id="services">
            <ServicesHead title="Our Services" span="Al-Raheem Motors" />
            <FeatureBoxes />
        </section>
    );
};

export default Services;