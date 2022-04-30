import './Cart.css';
import { useNavigate } from 'react-router-dom';
const Cart = ({car}) => {
    const navigate = useNavigate();
    const handleNavigate =()=>{
        navigate(`/inventory/${car._id}`)
    }
    return (
        <div className="cart">
            <img src={car.img} alt="" />
            <h4 className='card-name'>{car.name}</h4>
            <p className='card-desc'>{car.description}</p>
            <h5 className='card-price'>price: ${car.price}</h5>
            <h6 className='card-quantity'>Quantity: {car.quantity}</h6>
            <h5 className='card-supp'>supplier name: {car.supplier}</h5>
            <button onClick={handleNavigate} className='btn btn-primary'>stock update</button>
        </div>
    );
};

export default Cart;