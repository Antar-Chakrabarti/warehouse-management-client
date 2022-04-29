import React from 'react';
import Banner from '../../HomeCompo/Banner/Banner';
import ContactUs from '../../HomeCompo/ContactUs/ContactUs';
import CustomarReview from '../../HomeCompo/CustomarReview/CustomarReview';
import Inventory from '../../HomeCompo/Inventory/Inventory';

const Home = () => {
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