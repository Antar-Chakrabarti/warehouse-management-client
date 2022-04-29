import React from 'react';
import './ManageCard.css';

const ManageCard = ({man}) => {
    return (
        <div className='manage-card'>
            <h4>{man.name}</h4>
            <img style={{width: '30px'}} src={man.img} alt="" />
            <button>Delete</button>
        </div>
    );
};

export default ManageCard;