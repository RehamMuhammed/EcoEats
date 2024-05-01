import { useSnapshot } from 'valtio';
import Styles from './Cart.module.css';
import { cartStore, toggleCart } from '../../valtio/Cart';


function Cart() {
    const snapshot = useSnapshot(cartStore);
    return (
        <div className={`${Styles.cart_container}`}>
            <div className={`${Styles.cart_sidebar}`}>
                <br></br><br></br>
                <h1>Shopping List: </h1>
                <br></br>
                <hr className='hr-cart' style={{ color: "black" }}></hr>
                <div className='items'>
                    <div className={`${Styles.list_container}`}>
                        {snapshot.cart.map((item => (
                            <div className={`${Styles.list_item}`}>Product: {item.name} <br></br>
                                Quantity: {item.quantity}<hr className='hr-cart'></hr></div>
                        )))}
                    </div>
                </div>
                <br></br>
                <h3 style={{ paddingLeft: '140px' }}>Subtotal: {cartStore.totalprice} $</h3>

            </div>

            <span onClick={() => toggleCart(false)} className={`${Styles.close_btn}`}>&times;</span>
        </div>
    )
}

export default Cart