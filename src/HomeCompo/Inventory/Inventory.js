import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './inventory.css';

const Inventory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    return (
        <div className='inventory-container'>
            <h2 className='inventory-title'>Inventory</h2>
            <div className="card-container">
                {
                    cars.map(car => <Cart key={car.id} car={car} />)
                }
            </div>
        </div>
    );
};

export default Inventory;