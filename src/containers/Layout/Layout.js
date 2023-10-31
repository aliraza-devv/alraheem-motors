import React, {useState} from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Layout = props => {

    let layoutPage = (
        <React.Fragment>
            <Navbar navName={props.layoutName} />
            {props.children}
            <Footer />
        </React.Fragment>
    );

    if(props.layoutName === 'admin') {
        layoutPage = (
            <React.Fragment>
                <Navbar navName={props.layoutName} />
                {props.children}
                <Footer />
            </React.Fragment>
        );
    };
   
    return layoutPage;
};

export default Layout;