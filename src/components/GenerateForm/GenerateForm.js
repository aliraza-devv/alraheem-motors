import React from 'react';

import Header from './Header/Header';
import Inputs from './Inputs/Inputs';
import InputsBox from './Inputs/InputsBox/InputsBox';
import Verification from './Verification/Verification';
import {logo} from '../../assets/img/index';
import classes from './GenerateForm.module.scss';

class GenerateForm extends React.Component {
    render() {
        const d = new Date();
        const nowDate = `${d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()}-${d.getMonth()+1 < 10 ? `0${d.getMonth()+1}`: d.getMonth()+1}-${d.getFullYear()}`
    return (
        <section className={classes.GenerateForm}>
            <div className={classes.GenerateForm__issue}>
                <p className={classes.GenerateForm__issue__text}>Issue Date: <span>{nowDate}</span></p>
            </div>
            <img className={classes.GenerateForm__bg} src={logo} />
            <Header />
            <Inputs mainTitle='Customer Information' >
                <InputsBox title1='Full Name' title2='CNIC No' text1={this.props.cName} text2={this.props.cnic} />
                <InputsBox title1='Father Name' title2='Phone No' text1={this.props.fatherName} text2={this.props.cPhoneNo} />
                <InputsBox title1='Address' title2='Cell No' text1={this.props.cAddress} text2={this.props.cCellNo} />
            </Inputs>
            <Inputs mainTitle='Car Information' >
                <InputsBox title1='Company' title2='Model' text1={this.props.company} text2={this.props.model} />
                <InputsBox title1='Registration No' title2='Color' text1={this.props.registrationNo} text2={this.props.color} />
            </Inputs>
            <Inputs mainTitle='Duration' >
                <InputsBox title1='Date' title2='Days' text1={`${this.props.startDate} - ${this.props.endDate}`} text2={this.props.totalDays} />
                <InputsBox title1='Time' title2='Hours' text1={`${this.props.startTime} - ${this.props.endTime}`} text2={this.props.totalHours} />
            </Inputs>
            <Inputs mainTitle='Care of' >
                <InputsBox title1='Name' title2='Phone No' text1={this.props.gName} text2={this.props.gPhoneNo} />
                <InputsBox title1='Address' title2='CNIC No' text1={this.props.gAddress} text2={this.props.gCnicNo} />
            </Inputs>
            <Inputs mainTitle='Rental Price' >
                <InputsBox title1='Per Day Rent' title2='Total Rent' text1={this.props.perDayRs} text2={this.props.totalRentRs} />
            </Inputs>
            <Verification />
        </section>
    );
    }
};

export default GenerateForm;