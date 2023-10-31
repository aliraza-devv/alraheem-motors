import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import RecentBox from './RecentBox/RecentBox';
import Modal from '../../components/UI/Modal/Modal';
import PrintForm from '../PrintForm/PrintForm';
import {User, Add} from '../../assets/SvgComponents/index';
import classes from './Profile.module.scss';

const Profile = props => {

    const [isOpen, setIsOpen] = useState(false);
    const [carsObj,setCarsObj] = useState({});
    const [rentObj,setRentObj] = useState({});
    const [durationObj,setDurationObj] = useState({});

    return (
        <>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <PrintForm 
                    cName={props.customer.personalInfo.name}
                    cnic={props.customer.personalInfo.cnicNo}
                    fatherName={props.customer.personalInfo.fatherName}
                    cPhoneNo={props.customer.personalInfo.phoneNo}
                    cCellNo={props.customer.personalInfo.cellNo}
                    cAddress={props.customer.personalInfo.address}
                    gName={props.customer.careOf.name}
                    gPhoneNo={props.customer.careOf.phoneNo}
                    gCnicNo={props.customer.careOf.cnicNo}
                    gAddress={props.customer.careOf.address}
                    company={carsObj.company}
                    model={carsObj.model}
                    color={carsObj.color}
                    registrationNo={carsObj.registrationNo}
                    perDayRs={rentObj.perDayRent}
                    totalRentRs={rentObj.totalRentPrice}
                    totalDays={durationObj.totalDays}
                    totalHours={durationObj.totalHours}
                    startDate={durationObj.sDate}
                    endDate={durationObj.eDate}
                    startTime={durationObj.sTime}
                    endTime={durationObj.eTime}
                />
        </Modal>
            <div className={classes.profile}>
                <div className={classes.profile__addBox}>
                    <div className={classes.profile__personalBox}>
                        <User className={classes.profile__personalBox__svg} />
                        <div className={classes.profile__personalTextBox}>
                            <h1 className={classes.profile__personalTextBox__title}>{props.customer.personalInfo.name}</h1>
                            <p className={classes.profile__personalTextBox__span}>{props.customer.personalInfo.cnicNo}</p>
                        </div>
                    </div>
                    <Link to={{
                        pathname: '/addCustomer',
                        state: {
                            customer: props.customer
                        }
                    }} className={classes.profile__addNewBtn}><Add /> Add</Link>
                </div>
                <div className={classes.profile__recentBox}>
                    <h1 className={classes.profile__recentBox__title}>Recent Booking</h1>
                    <div className={classes.profile__recentList}>
                        {props.customer.cars.map((car, index) => {
                        return <RecentBox 
                                    key={`${props.customer.id}${index}`}
                                    company={car.company} 
                                    model={car.model} 
                                    registrationNo={car.registrationNo} 
                                    sDate={props.customer.duration[index].sDate} 
                                    eDate={props.customer.duration[index].eDate} 
                                    totalHours={props.customer.duration[index].totalHours}
                                    openBookingForm={() => {
                                        setCarsObj(car);
                                        setDurationObj(props.customer.duration[index]);
                                        setRentObj(props.customer.totalRent[index]);
                                        setIsOpen(true);
                                    }} 
                                />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;

