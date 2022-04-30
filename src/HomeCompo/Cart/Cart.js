import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Spinner } from 'react-bootstrap';
const Cart = ({car}) => {
    const navigate = useNavigate();
    const handleNavigate =()=>{
        navigate(`/inventory/${car._id}`)
    }
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Spinner animation="border" variant="info" />
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