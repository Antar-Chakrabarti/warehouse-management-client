import React from 'react';
import './AddItem.css';

const AddItem = () => {

    const handleAddItems =(e)=>{
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;
        const img = e.target.photoUrl.value;
        const supplier = e.target.supplier.value;

        const item = {name, price, quantity, description,img, supplier};
        
        // send data
        fetch('https://fast-citadel-60509.herokuapp.com/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data)
        })
    }
    return (
        <div>
            <h2 className='text-primary text-center my-5'>Add user</h2>

            <form className='addItemsForm' onSubmit={handleAddItems}>
                <input type="text" name="name" id="" placeholder='Your name' required/>
                <input type="number" name="price" id="" placeholder='Price' required/>
                <input type="number" name="quantity" id="" placeholder='quantity' required/>
                <input type="text" name="description" id="" placeholder='description' required/>
                <input type="url" name="photoUrl" id="" placeholder='photoUrl' required/>
                <input type="text" name="supplier" id="" placeholder='supplier' required/>
                <input type="submit" value="Add Items" />
            </form>
        </div>
    );
};

export default AddItem;