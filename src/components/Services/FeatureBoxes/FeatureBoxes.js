import React from 'react';

import FeatureBox from './FeatureBox/FeatureBox';
import {CarRental, CarSell, TourPlanner,WeddingCar} from '../../../assets/SvgComponents/index';
import './FeatureBoxes.scss';

const FeatureBoxes = props => {
    return (
        <div className="row">
            <div className="col-1-of-4">
                <FeatureBox 
                    title="Car Rental" 
                    details="You can hire a car for rent on monthly, daily and hourly basis." 
                    icon={CarRental} />
            </div>
            <div className="col-1-of-4">
                <FeatureBox 
                    title="Car Sell/Purchase" 
                    details="You can easily buy and sell car’s through us.We won't let you down." 
                    icon={CarSell} />
            </div>
            <div className="col-1-of-4">
                <FeatureBox 
                    title="Tour Planner" 
                    details="We arranges a trip for you and your family for northern areas throughout the year." 
                    icon={TourPlanner} />
            </div>
            <div className="col-1-of-4">
                <FeatureBox 
                    title="Wedding services" 
                    details="You can book Car or Cars for weddings as long as you need at cheap price." 
                    icon={WeddingCar} />
            </div>
        </div>
    );
};

export default FeatureBoxes;