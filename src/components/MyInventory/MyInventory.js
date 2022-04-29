import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MyInventory.css';

const MyInventory = () => {
    const { inventoryId } = useParams();
    const [itemsId, setItemsId] = useState({});
    const [quantity, setQuantity] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/items/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItemsId(data))
    }, [])

    const updateQuantity = (e)=>{
        e.preventDefault();
        const quantity = e.target.quantity.value;
        if(!quantity || quantity < 0){
            return;
        }

        
        fetch(`http://localhost:5000/items/${inventoryId}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({quantity})
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data)
            window.alert('quantity added')
            e.target.reset();
        })
        
    }
    const handleDelever = ()=>{

    }

    return (
        <div className='myInventory'>
           <div className="inventory-item">
               <img className='item-img' src={itemsId.img} alt="" />
               <h5 className='item-name'>{itemsId.name}</h5>
               <h5 className='item-price'>Price: ${itemsId.price}</h5>
               <h4 className='item-quantity'>Quantity: {itemsId.quantity}</h4>
               <button onClick={handleDelever} className='item-btn'>delivered</button>
           </div>
           <form onSubmit={updateQuantity}>
               <input type="number" name="quantity" id="" />
               <input type="submit" value="Add Quantity" />
           </form>
        </div>
    );
};

export default MyInventory;