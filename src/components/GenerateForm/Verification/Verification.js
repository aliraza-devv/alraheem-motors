import React from 'react';

import classes from './Verification.module.scss';

const Verification = props => {
    return (
        <div className={classes.Verification}>
            <div className={classes.Verification__box}>
                <hr className={classes.Hr} />
                <p className={classes.Verification__box__text}>Owner Signature</p>
            </div>
            <div className={classes.Verification__box}>
                <hr className={classes.Hr} />
                <p className={classes.Verification__box__text}>Customer Signature</p>
            </div>
            <div className={classes.Verification__box}>
                <hr className={classes.Hr} />
                <p className={classes.Verification__box__text}>Customer Fingerprint</p>
            </div>
        </div>
    );
};

export default Verification;