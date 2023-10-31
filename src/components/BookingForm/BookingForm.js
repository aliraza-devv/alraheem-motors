import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import Calendar from '../Calendar/Calendar';
import CarInfo from '../CarInfo/CarInfo';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import CareOf from '../CareOf/CareOf';
import TotalRent from '../TotalRent/TotalRent';
import PrintForm from '../../containers/PrintForm/PrintForm';
import Modal from '../UI/Modal/Modal';
import classes from './BookingForm.module.scss';
import { auth } from '../../firebase/firebase';
import axios from '../../axios/axios-customers';

const BookingForm = props => {

    let history = useHistory();

    const [duration, setDuration] = useState({
        startDate: null,
        endDate: null
    });
    const [detailDuration, setDetailDuration] = useState({
        sDate: null,
        eDate: null,
        sTime: null,
        etime: null,
        totalHours: null,
        totalDays: null
    });
    const [carInfo, setCarInfo] = useState({
        company: null,
        model: null,
        registrationNo: null,
        color: null
    });
    const [personalInfo, setPersonalInfo] = useState({
        name: null,
        fatherName: null,
        address: null,
        cnicNo: null,
        phoneNo: null,
        cellNo: null,
    });
    const [careOf, setCareOf] = useState([{
        name: null,
        address: null,
        phoneNo: null,
        cnicNo: null
    }]);
    const [totalRent, setTotalRent] = useState({
        totalRentPrice: null,
        perDayRent: null
    });
    const [isOpen, setIsOpen] = useState(false);

    let customer = {
        personalInfo,
        careOf,
        totalRent,
        duration,
        bookings: 1
    };

    useEffect(() => {

        if(props.customerExist) {
            customer = {
                ...customer,
                personalInfo:{
                    name: props.customerExist.personalInfo.name,
                    fatherName: props.customerExist.personalInfo.fatherName,
                    address: props.customerExist.personalInfo.address,
                    cnicNo: props.customerExist.personalInfo.cnicNo,
                    phoneNo: props.customerExist.personalInfo.phoneNo,
                    cellNo: props.customerExist.personalInfo.cellNo,
                },
                careOf: {
                    name: props.customerExist.careOf.name,
                    address: props.customerExist.careOf.address,
                    phoneNo: props.customerExist.careOf.phoneNo,
                    cnicNo: props.customerExist.careOf.cnicNo
                }
            };
        };

    }, [customer]);

    const submitHandler = async e => {
        e.preventDefault();

        const hours = Math.abs(duration.startDate - duration.endDate) / 36e5;
        const days = parseInt(hours/24);
        const sDate = `${duration.startDate.getDate() < 10 ? `0${duration.startDate.getDate()}` : duration.startDate.getDate()}-${duration.startDate.getMonth() + 1 < 10 ? `0${duration.startDate.getMonth() + 1}` : duration.startDate.getMonth() + 1}-${duration.startDate.getFullYear()}`;
        const eDate= `${duration.endDate.getDate() < 10 ? `0${duration.endDate.getDate()}` : duration.endDate.getDate()}-${duration.endDate.getMonth() + 1 < 10 ? `0${duration.endDate.getMonth()+1}` : duration.endDate.getMonth() + 1}-${duration.endDate.getFullYear()}`;
        const sTime= duration.startDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        const eTime= duration.endDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        setDetailDuration({
            ...detailDuration,
            sDate,
            eDate,
            sTime,
            eTime,
            totalHours: hours,
            totalDays: days
        });

        if(props.customerExist) {

            customer = {
                cars: [
                    ...props.customerExist.cars,
                    carInfo
                ],
                duration: [
                    ...props.customerExist.duration,
                    {
                        startDate: duration.startDate.toString(),
                        endDate: duration.endDate.toString(),
                        sDate,
                        eDate,
                        sTime,
                        eTime,
                        totalDays: days,
                        totalHours: hours
                    }
                ],
                totalRent: [
                    ...props.customerExist.totalRent,
                    totalRent
                ],
                bookings: props.customerExist.bookings + 1
            };

            const token = await auth.currentUser.getIdToken();

            axios.patch(`/customers/${props.customerExist.id}.json?auth=` + token, customer);

        } else {

            customer = {
                ...customer,
                cars: [
                    carInfo
                ],
                duration: [ {
                        startDate: duration.startDate.toString(),
                        endDate: duration.endDate.toString(),
                        sDate,
                        eDate,
                        sTime,
                        eTime,
                        totalDays: days,
                        totalHours: hours
                    }
                ],
                totalRent: [
                    totalRent
                ]
            };

            const token = await auth.currentUser.getIdToken();
    
            axios.post('/customers.json?auth=' + token, customer);
        };

        setIsOpen(true);
    };

    let form = null;

    if(isOpen) {
        form = (
            <PrintForm 
                cName={props.customerExist ? props.customerExist.personalInfo.name : personalInfo.name}
                cnic={props.customerExist ? props.customerExist.personalInfo.cnicNo : personalInfo.cnicNo}
                fatherName={props.customerExist ? props.customerExist.personalInfo.fatherName : personalInfo.fatherName}
                cPhoneNo={props.customerExist ? props.customerExist.personalInfo.phoneNo :personalInfo.phoneNo}
                cCellNo={props.customerExist ? props.customerExist.personalInfo.cellNo : personalInfo.cellNo}
                cAddress={props.customerExist ? props.customerExist.personalInfo.address :personalInfo.address}
                company={carInfo.company}
                model={carInfo.model}
                color={carInfo.color}
                registrationNo={carInfo.registrationNo}
                gName={props.customerExist ? props.customerExist.careOf.name :careOf.name}
                gPhoneNo={props.customerExist ? props.customerExist.careOf.phoneNo :careOf.phoneNo}
                gCnicNo={props.customerExist ? props.customerExist.careOf.cnicNo :careOf.cnicNo}
                gAddress={props.customerExist ? props.customerExist.careOf.address :careOf.address}
                perDayRs={totalRent.perDayRent}
                totalRentRs={totalRent.totalRentPrice}
                totalDays={detailDuration.totalDays}
                totalHours={detailDuration.totalHours}
                startDate={detailDuration.sDate}
                endDate={detailDuration.eDate}
                startTime={detailDuration.sTime}
                endTime={detailDuration.eTime}
            />);
    } 

    const closeModalHandler = e => {
        setIsOpen(false);
        history.push('/dashboard')
    };

    return (
        <>
        <Modal open={isOpen} onClose={closeModalHandler}>
            {form}
        </Modal>
        <form className={classes.Booking__form} onSubmit={submitHandler}>
            <h1 className={classes.Booking__form__title}>Duration</h1>
            <Calendar 
                setStart={e => setDuration({...duration, startDate: e.target.value })} 
                setEnd={e => setDuration({...duration, endDate: e.target.value})} />

            <h1 className={classes.Booking__form__title}>Car Information</h1>
            <CarInfo
                company={e => setCarInfo({...carInfo, company: e.target.value})}
                model={e => setCarInfo({...carInfo, model: e.target.value})}
                registration={e => setCarInfo({...carInfo, registrationNo: e.target.value})}
                color={e => setCarInfo({...carInfo, color: e.target.value})} />

            <h1 className={classes.Booking__form__title}>Personal Information</h1>
            {props.customerExist ? <PersonalInfo
                        name={e => setPersonalInfo({...personalInfo, name: e.target.value})}
                        existingName={props.customerExist.personalInfo.name}
                        fatherName={e => setPersonalInfo({...personalInfo, fatherName: e.target.value})}
                        existingFather={props.customerExist.personalInfo.fatherName}
                        cnic={e => setPersonalInfo({...personalInfo, cnicNo: e.target.value})}
                        existingCnic={props.customerExist.personalInfo.cnicNo}
                        address={e => setPersonalInfo({...personalInfo, address: e.target.value})}
                        existingAddress={props.customerExist.personalInfo.address}
                        phone={e => setPersonalInfo({...personalInfo, phoneNo: e.target.value})}
                        existingPhone={props.customerExist.personalInfo.phoneNo}
                        cell={e => setPersonalInfo({...personalInfo, cellNo: e.target.value})}
                        existingCell={props.customerExist.personalInfo.cellNo}
                /> : <PersonalInfo
                        name={e => setPersonalInfo({...personalInfo, name: e.target.value})}
                        fatherName={e => setPersonalInfo({...personalInfo, fatherName: e.target.value})}
                        cnic={e => setPersonalInfo({...personalInfo, cnicNo: e.target.value})}
                        address={e => setPersonalInfo({...personalInfo, address: e.target.value})}
                        phone={e => setPersonalInfo({...personalInfo, phoneNo: e.target.value})}
                        cell={e => setPersonalInfo({...personalInfo, cellNo: e.target.value})}
                />}

            <h1 className={classes.Booking__form__title}>Care of</h1>
            {props.customerExist ? <CareOf
                    name={e => setCareOf({...careOf, name: e.target.value})}
                    address={e => setCareOf({...careOf, address: e.target.value})}
                    cnicNo={e => setCareOf({...careOf, cnicNo: e.target.value})}
                    phone={e => setCareOf({...careOf, phoneNo: e.target.value})}
                    existingName={props.customerExist.careOf.name}
                    existingAddress={props.customerExist.careOf.address}
                    existingCNIC={props.customerExist.careOf.cnicNo}
                    existingPhone={props.customerExist.careOf.phoneNo}
            /> : <CareOf
                    name={e => setCareOf({...careOf, name: e.target.value})}
                    address={e => setCareOf({...careOf, address: e.target.value})}
                    cnicNo={e => setCareOf({...careOf, cnicNo: e.target.value})}
                    phone={e => setCareOf({...careOf, phoneNo: e.target.value})}
            />}
            <h1 className={classes.Booking__form__title}>Total Rent</h1>
            <TotalRent
                total={e => setTotalRent({...totalRent, totalRentPrice: e.target.value})}
                perDay={e => setTotalRent({...totalRent, perDayRent: e.target.value})}
            />
            <div className={classes.Booking__form__btn__wrap}>
                <button type="submit" className={classes.Booking__form__btn}>Save & Print</button>
            </div>
        </form>
    </>
    );
};

export default BookingForm;