import React from 'react';
import './ManageCard.css';

const ManageCard = ({ man }) => {

    const handleUserDelete = (id) => {
        const proceed = window.confirm('are you sure you want to delete?')
        if (proceed) {
            const url = `https://fast-citadel-60509.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        window.location.reload();
                        // const remaining = man.filter(ma => ma._id !== id);
                    }
                })
        }
    }
    return (

        <div className='manage-card'>
            <h4>{man.name}</h4>
            <img style={{ width: '70px' }} src={man.img} alt="" />
            <button onClick={() => handleUserDelete(man._id)}>Delete</button>
        </div>
    );
};

export default ManageCard;