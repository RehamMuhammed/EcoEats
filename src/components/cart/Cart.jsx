import { useSnapshot } from 'valtio';
import Styles from './Cart.module.css';
import { cartStore, toggleCart } from '../../valtio/Cart';
function Cart() {
    const snapshot = useSnapshot(cartStore);
    return (
        <div className={`${Styles.cart_container}`}>
            <div className={`${Styles.cart_sidebar}`}>
                <h1>Shopping List: {cartStore.totalprice} $</h1>
                <div>
                    <div className={`${Styles.list_container}`}>
                        {snapshot.cart.map((item => (
                            <div className={`${Styles.list_item}`}>{item.name} - {item.quantity}</div>
                        )))}
                    </div>
                </div>
            </div>

            <span onClick={() => toggleCart(false)} className={`${Styles.close_btn}`}>&times;</span>
        </div>
    )
}

export default Cart