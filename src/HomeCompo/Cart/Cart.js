import './Cart.css';
const Cart = ({car}) => {
    return (
        <div className="cart">
            <img src={car.img} alt="" />
            <h4 className='card-name'>{car.name}</h4>
            <p className='card-desc'>description</p>
            <h5 className='card-price'>price: {car.price}</h5>
            <h6 className='card-quantity'>Quantity: </h6>
            <h5 className='card-supp'>supplier name</h5>
            <button className='btn btn-primary'>stock update</button>
        </div>
    );
};

export default Cart;