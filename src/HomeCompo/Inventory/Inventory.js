import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Inventory.css';

const Inventory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    return (
        <div className='inventory-container'>
            <h2 className='inventory-title'>Inventory</h2>
            <div className="card-container">
                {
                    cars.map(car => <Cart key={car._id} car={car} />)
                }
            </div>
            <div className="manage">
                <Link className='manage-link' to='/manageInventory'><button>Manage Inventory</button></Link>
            </div>
        </div>
    );
};

export default Inventory;