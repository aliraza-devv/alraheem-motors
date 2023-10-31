// import React, {useState} from 'react';
import React from 'react';

import './Calendar.css';
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';

const Calendar = props => {

    return (
        <div className="calendar-wrapper">
            <div>
                <DateTimePickerComponent 
                    placeholder="Start Date & Time"
                    step="30"
                    onChange={props.setStart}
                >
                </DateTimePickerComponent>
            </div>
            <div>
                <DateTimePickerComponent 
                    placeholder="End Date & Time"
                    step="30"
                    onChange={props.setEnd}
                >
                </DateTimePickerComponent>
            </div>
        </div>
    );
};

export default Calendar;