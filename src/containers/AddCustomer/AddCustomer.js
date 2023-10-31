import React from 'react';

import Layout from '../Layout/Layout';
import BookingForm from '../../components/BookingForm/BookingForm';
import classes from './AddCustomer.module.scss';

const AddCustomer = props => {

    const { customer } = props.location.state;

    let form = <BookingForm customerExist={null} />;
    if(customer) { 
        form = <BookingForm customerExist={customer} />;
    };

    return (
        <Layout layoutName='admin' >
            <section className={classes.AddCustomer}>
                <div className={classes.AddCustomer__title}>
                    <h1 className={classes.AddCustomer__title__heading}>Start Booking</h1>
                    <p className={classes.AddCustomer__title__span}>AL-Raheem Motors</p>
                </div>
                <div className={classes.AddCustomer__details}>
                    {form}
                </div>
            </section>
        </Layout>
    );
};

export default AddCustomer;