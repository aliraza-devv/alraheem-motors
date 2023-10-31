import React, {useState} from 'react';

import Showcase from '../../components/Showcase/Showcase';
import InputDropdown from '../../components/InputDropdown/InputDropdown';
import Layout from '../Layout/Layout';
import SearchedResult from '../../components/SearchedResult/SearchedResult';
import Customers from '../Customers/Customers';

const Admin = props => {

    const [dropDValue, setDropDValue] = useState('cnicNo');
    const [inpText, setInputText] = useState(null);
    const [isSubmitted,setIsSubmitted] = useState(false); 

    const searchedSubmitHandler = e => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <Layout layoutName="admin">
            <Showcase>
                    <InputDropdown 
                        submitHandler={searchedSubmitHandler}
                        selectedValue={dropDValue} 
                        selected={e => setDropDValue(e.target.value)} 
                        value={e => setInputText(e.target.value)}
                        holderTxt={inpText ? inpText : `Enter ${dropDValue.toUpperCase()}`}  />
            </Showcase>
            <SearchedResult boxTitle='Recent Bookings'>
                {isSubmitted ? <Customers searchFor={inpText} selected={dropDValue} /> : <Customers searchFor={null} selected={null} />}                         
            </SearchedResult>
        </Layout>
    );
};

export default Admin;