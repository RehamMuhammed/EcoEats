import { useSnapshot } from 'valtio';
import Styles from './Cart.module.css';
import { MinusOne, PlusOne, RemoveFromCart, cartStore, toggleCart } from '../../valtio/Cart';
import { Link } from 'react-router-dom';



function Cart() {
    const snapshot = useSnapshot(cartStore);
    return (
        <div className={`${Styles.cart_container}`}>
            <div className={`${Styles.cart_sidebar}`}>
                <br></br><br></br><br></br>
                <div className={`${Styles.cart_border}`}>
                    <h1>Your Cart: </h1>
                    <hr className={`${Styles.cart_hr}`}></hr>
                    <br></br>
                    {snapshot.cart.length > 0 ? (<div className='items'>
                        <div className={`${Styles.list_container}`}>
                            {snapshot.cart.map((item => (
                                <div className={`${Styles.list_item}`}> {item.name}
                                    <br></br>
                                    {/* Quantity: {item.quantity}  <br></br> */}
                                    <div className='d-flex'>
                                        <div className={`${Styles.cart_price}`}>
                                            {item.quantity}
                                        </div>
                                        &nbsp;x $ {item.price}
                                        <button className={`${Styles.delete_button}`} onClick={() => RemoveFromCart(item._id)}>Delete</button>
                                    </div>

                                    <hr></hr>
                                    <div>
                                        <span onClick={() => PlusOne(item._id)}>add</span>
                                        <span onClick={() => MinusOne(item._id)}>remove</span>
                                    </div>
                                </div>
                            )))}
                        </div>
                    </div>) : (
                        <h4 style={{ textAlign: "center" }}>Ooops! <br></br>Your cart is empty.</h4>
                    )}
                    <br></br>
                    <hr className={`${Styles.cart_hr}`}></hr>
                    <br></br>

                </div>
                {snapshot.cart.length > 0 ? (
                    <>
                        <h3 style={{ display: 'flex', justifyContent: "center" }}>Subtotal: $&nbsp;{cartStore.totalprice}</h3>
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <button type="submit" className={`${Styles.cart_button}`}>Proceed To Checkout</button>
                        </div>
                    </>
                ) : (
                    <div>
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <Link to={'/AllProducts'} className={`${Styles.cart_button}`}>Return To Products</Link>
                        </div>
                    </div>
                )}
            </div>
            <span onClick={() => toggleCart(false)} className={`${Styles.close_btn}`}>&times;</span>
        </div>
    )
}

export default Cart