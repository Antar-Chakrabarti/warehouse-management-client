import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Banner from '../../HomeCompo/Banner/Banner';
import ContactUs from '../../HomeCompo/ContactUs/ContactUs';
import CustomarReview from '../../HomeCompo/CustomarReview/CustomarReview';
import Inventory from '../../HomeCompo/Inventory/Inventory';

const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    if(loading){
       return <Spinner animation="border" variant="info" />
    }
    return (
        <div>
            <Banner/>
            <Inventory/>
            <CustomarReview/>
            <ContactUs/>
        </div>
    );
};

export default Home;