import React from 'react';
import {Link} from 'react-router-dom';

import {Add} from '../../assets/SvgComponents/index';
import classes from './SearchedResult.module.scss';

const SearchedResult = props => {
    return (
        <section className={classes.searchedResult}>
            <div className={classes.searchedResult__textBox}>
                <h1 className={classes.searchedResult__title}>{props.boxTitle}</h1>
                <span className={classes.searchedResult__span}>AL-Raheem Motors</span>
            </div>
            <div className={classes.searchedResult__box}>
                <h2 className={classes.searchedResult__box__title}>Customer List</h2>
                <Link to={{
                    pathname: "/addCustomer",
                    state: {
                        customer: null
                    }
                }} className={classes.searchedResult__box__btn}><Add /> Add New</Link>
            </div>
            {props.children}
        </section>
    ); 
};

export default SearchedResult;