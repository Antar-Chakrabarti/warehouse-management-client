import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MyInventory.css';

const MyInventory = () => {
    const { inventoryId } = useParams();
    const [itemsId, setItemsId] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/items/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItemsId(data))
    }, [])
    console.log(itemsId)
    return (
        <div className='myInventory'>
           <div className="inventory-item">
               <img className='item-img' src={itemsId.img} alt="" />
               <h5 className='item-name'>{itemsId.name}</h5>
               <h5 className='item-price'>Price: ${itemsId.price}</h5>
               <h4 className='item-quantity'>Quantity: {itemsId.quantity}</h4>
               <button className='item-btn'>delivered</button>
           </div>
           <form>
               <input type="number" name="quantity" id="" />
               <input type="button" value="Add Quantity" />
           </form>
        </div>
    );
};

export default MyInventory;