import React, { useEffect, useState } from 'react';
import ManageCard from '../ManageCard/ManageCard';
import './manageInventory.css';

const ManageInventory = () => {
    const [manage, setManage] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/items/')
        .then(res => res.json())
        .then(data => setManage(data))
    },[])
    return (
        <div className='manages'>
           {
               manage.map(man => <ManageCard key={man._id} man={man}/>)
           }
        </div>
    );
};

export default ManageInventory;