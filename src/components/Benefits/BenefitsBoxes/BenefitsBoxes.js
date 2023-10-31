import React from 'react';

import BenefitsBox from './BenefitsBox/BenefitsBox';
import {BestPrice, FastBooking, CustomerSatisfied} from '../../../assets/SvgComponents/index';
import classes from './BenefitsBoxes.module.scss';

const BenefitsBoxes = props => {
    return (
        <div className={classes.Benefits__Boxes}>
            <BenefitsBox 
                icon={CustomerSatisfied}
                fHLine="Our Customers Always"
                sHLine="100% Satisfied"
                fPLine="Comfort of our Customers is our first Priority."
            />
            <BenefitsBox 
                icon={BestPrice}
                fHLine="We offer best"
                sHLine="Price"
                fPLine="We offer Best and Cheap Prices in Burewala"
            />
            <BenefitsBox 
                icon={FastBooking}
                fHLine="We Provide Easier"
                sHLine="& Faster Bookings"
                fPLine="Booking Method is very Easy and Quick"
            />
        </div>
    );
};

export default BenefitsBoxes;