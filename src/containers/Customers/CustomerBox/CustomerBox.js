import React from 'react';

import {User, AddPrimary } from '../../../assets/SvgComponents/index';
import classes from './CustomerBox.module.scss';

const CustomerBox = props => {
    return (
        <div onClick={props.openProfile} className={classes.Customer__box}>
            <div className={classes.Customer__box__info}>
                <div className={classes.Customer__box__info__textBox}>
                    <User className={classes.Customer__box__info__textBox__svg} />
                    <div className={classes.Customer__box__info__textBox__box}>
                        <h2 className={classes.Customer__box__info__textBox__title}>{props.name}</h2>
                        <p className={classes.Customer__box__info__textBox__span}>{props.bookings} Bookings</p>
                    </div>
                </div>
            </div>
            <div className={classes.Customer__box__counter}>
                <AddPrimary className={classes.Customer__box__counter__svg} />
            </div>
        </div>
    );
};

export default CustomerBox;