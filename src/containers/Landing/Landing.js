import React from 'react';

import Layout from '../Layout/Layout';
import Header from '../../components/Header/Header';
import Benefits from '../../components/Benefits/Benefits';
import Works from '../../components/Works/Works';
import Services from '../../components/Services/Services';
import Slogan from '../../components/Slogan/Slogan';
import ContactUs from '../../components/ContactUs/ContactUs';

const Landing = props => {
    return (
        <React.Fragment>
            <Layout layoutName="land">
                <Header />
                <Benefits />
                <Services />
                <Slogan />
                <Works />
                <ContactUs />
            </Layout>
        </React.Fragment>
    );
};

export default Landing;