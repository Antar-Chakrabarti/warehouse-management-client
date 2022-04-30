import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Cart from '../Cart/Cart';
import './Inventory.css';

const Inventory = () => {
    const [user, loading, error] = useAuthState(auth);
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://fast-citadel-60509.herokuapp.com/items')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    if (loading) {
        return <Spinner animation="border" variant="info" />
    }
    return (
        <div className='inventory-container'>
            <h2 className='inventory-title'>Inventory</h2>
            <div className="card-container">
                {
                    cars.slice(0, 6).map(car => <Cart key={car._id} car={car} />)
                }
            </div>
            <div className="manage">
                <Link className='manage-link' to='/manageInventory'><button>Manage Inventory</button></Link>
            </div>
        </div>
    );
};

export default Inventory;