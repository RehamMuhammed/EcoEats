import { useSnapshot } from 'valtio';
import Styles from './Cart.module.css';
import { MinusOne, PlusOne, RemoveFromCart, cartStore, toggleCart } from '../../valtio/Cart';
import { Link, useNavigate } from 'react-router-dom';
import trashIcon from '../../images/trash-bin.png';


function Cart() {
    const navigate = useNavigate()
    const onProceed = () => {
        toggleCart(false)
        navigate("Payment")
    }
    const snapshot = useSnapshot(cartStore);
    return (
        <div className={`${Styles.cart_container}`}>
            <div className={`${Styles.cart_sidebar}`}>
                <br></br><br></br>
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
                                    <div className='d-flex justify-content-between' style={{ alignSelf: "stretch" }}>
                                        <div className={`${Styles.cart_price}`}>
                                            {item.quantity}
                                            &nbsp;x $ {item.price}
                                        </div>
                                        <button className={`${Styles.delete_button}`} onClick={() => RemoveFromCart(item._id)}>
                                            <img src={trashIcon} />
                                        </button>
                                    </div>
                                    <div className={`${Styles.quantity_container}`}>
                                        <button className={`${Styles.plus}`} onClick={() => PlusOne(item._id)}>+</button>
                                        <button>{item.quantity}</button>
                                        <button disabled={item.quantity === 1} className={`${Styles.minus}`} onClick={() => MinusOne(item._id)}>-</button>
                                    </div>
                                    <hr></hr>

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
                            <button onClick={onProceed} className={`${Styles.cart_button}`}>Proceed To Checkout</button>
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