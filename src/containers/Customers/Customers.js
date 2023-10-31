import React, {useState, useEffect} from 'react';
import axios from '../../axios/axios-customers';
import {auth} from '../../firebase/firebase';

import CustomerBox from './CustomerBox/CustomerBox';
import Profile from '../Profile/Profile';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import {Nothing} from '../../assets/SvgComponents/index';
import classes from './Customers.module.scss';

const Customers = props => {
    const [customersLi, setCustomersLi] = useState({ customers: [], loading: true });
    const [isEmpty, setIsEmpty] = useState(false);
    const [isShowAll, setIsShowAll] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [isOpen,setIsOpen] = useState(false);

    useEffect(async () => {
        const token = await auth.currentUser.getIdToken();
        axios.get('/customers.json?auth=' + token)
            .then(res => {
                const fetchedCustomers = [];
                for(let key in res.data) {
                    fetchedCustomers.push({
                        ...res.data[key],
                        id: key
                    });
                }
                setCustomersLi({ customers: fetchedCustomers.reverse(), loading: false });
                if(fetchedCustomers.length === 0) {
                    setIsEmpty(true);
                }
            })
    },[]);

    const showAllHandler = e => {
        e.preventDefault();
        setIsShowAll(true);
    };


    let searchedCustomerBox = null;

    if(props.searchFor && props.selected) {
        const value = props.searchFor;
        const selectedValue = props.selected;

        let list = [];

        var _ = (customersLi.customers.map((customer, index) => {

            if(selectedValue === 'name') {
                if(customer.personalInfo.name.toLowerCase().includes(value.toLowerCase())){
                    return (customer ? list.push(customer) : null)
                }
            };

            if(selectedValue === 'sDate') {
                
                const matchedDate = customer.duration.find((dates,index) => {
                    if(value.split("-").reverse().join("-") === dates.sDate) { 
                        return dates;                               
                    };
                });

                if(matchedDate) {
                    return (customer ? list.push(customer) : null)
                };
            };

            if(selectedValue === 'cnicNo'){
                if(value === customer.personalInfo.cnicNo){
                    return (customer ? list.push(customer) : null)             
                }
            };
            })
        );

        if(typeof list !== 'undefined' && list.length > 0){
            searchedCustomerBox = (list.map(customer => {
                return (<CustomerBox 
                    key={customer.id}
                    name={customer.personalInfo.name} 
                    bookings={customer.bookings} 
                    openProfile={() => {
                        setSelectedCustomer(customer);
                        setIsOpen(true);
                    }} />);
            }));
        } else {
            searchedCustomerBox = <Nothing className={classes.Customers__svg} />;
        };
    };  

    let itemsCustList = (isShowAll ? customersLi.customers.map(cust => (                
        <CustomerBox 
            key={cust.id}
            name={cust.personalInfo.name}
            bookings={cust.bookings}
            openProfile={() => {
                setSelectedCustomer(cust);
                setIsOpen(true);
            }}
            />
    )) : customersLi.customers.slice(0,6).map(cust => (              
        <CustomerBox 
            key={cust.id}
            name={cust.personalInfo.name}
            bookings={cust.bookings}
            openProfile={() => {
                setSelectedCustomer(cust);
                setIsOpen(true);
            }}
            />
    )));

    let showItemsCustList = (isEmpty ? <Nothing className={classes.Customers__svg} /> : itemsCustList);

    if(customersLi.loading) {
        showItemsCustList = <Spinner />;
    };

    let btn =(isEmpty ? null : <button className={classes.Customers__btn} onClick={showAllHandler}>View All</button>);

    if(searchedCustomerBox) {
        btn = null;
    };

    return (
        <div className={classes.Customers}>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <Profile 
                    customer={selectedCustomer}
                />
            </Modal>
            {searchedCustomerBox ? searchedCustomerBox : showItemsCustList}
            {isShowAll ? null : btn}
        </div>
    );
};

export default Customers;