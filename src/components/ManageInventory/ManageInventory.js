import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ManageCard from '../ManageCard/ManageCard';
import './manageInventory.css';

const ManageInventory = () => {
    const [manage, setManage] = useState([]);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/addItems')
    }
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
            <button className='manageCardBtn' onClick={handleNavigate}>Add Items</button>
        </div>
    );
};

export default ManageInventory;