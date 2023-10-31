import React, {useState} from 'react';

import SearchedResult from '../SearchedResult/SearchedResult';
import InputDropdown from '../InputDropdown/InputDropdown';
import classes from './Showcase.module.scss';

const Showcase = props => {
    return(
        <React.Fragment>
            <section className={classes.showcase}>
                <div className={classes.showcase__textbox}>
                    <h1 className={classes.showcase__title}>Search Customers</h1>     
                </div>
                <div className={classes.showcase__search}>
                    {props.children}
                </div>
            </section>
            {/* {isSubmitted ? <SearchedResult 
                        boxTitle={`Searched For "${inpText}"`} 
                        dropdownValue={dropDValue}
                        inpValue={inpText}  /> :  <SearchedResult boxTitle='Recent Bookings' dropdownValue={null} inpValue={null} />} */}
        </React.Fragment>
    );
};

export default Showcase;