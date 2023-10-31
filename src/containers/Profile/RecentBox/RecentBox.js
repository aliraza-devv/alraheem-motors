import React from 'react';

import classes from './RecentBox.module.scss';

const RecentBox = props => {
    return (
        <div className={classes.RecentBox} onClick={props.openBookingForm}>
            <div className={classes.RecentBox__textBox}>
                <h2 className={classes.RecentBox__title}>{`${props.company} ${props.model}`}</h2>
                <p className={classes.RecentBox__span}>{props.registrationNo}</p>
            </div>
            <div className={classes.RecentBox__info}>
                <h1 className={classes.RecentBox__title}>{`${props.sDate} - ${props.eDate}`}</h1>
                <p className={classes.RecentBox__span}>{props.totalHours} Hours</p>
            </div>
        </div>
    );
};  

export default RecentBox;