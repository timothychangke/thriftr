import classes from '../../styles/CheckoutModal.module.css';
import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';
import { currencyFormatter } from '../../util/formatting.js';

function CheckoutModal({ children, onSubmit, onClose }) {
    const cartCtx = useContext(CartContext);
    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.price,
        0
    );
    return (
        <div className={classes.modal_container}>
            <div className={classes.modal}>
                <div className={classes.modal_header}>
                    <p className={classes.close} onClick={onClose}>
                        &times;
                    </p>
                </div>
                <div className={classes.modal_content}>
                    <ul>
                        {cartCtx.items.map((item) => (
                            <li
                                key={item.key}
                                className={classes.cartModalItems}
                            >
                                {item.name} -{' '}
                                {currencyFormatter.format(item.price)}
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <h3 className={classes.cartTotal}>
                        Your total is: {currencyFormatter.format(cartTotal)}
                    </h3>
                </div>
                <div className={classes.modal_footer}>
                    <button
                        className={`${classes.btn} ${classes.btn_submit}`}
                        onClick={onSubmit}
                    >
                        Confirm Purchase
                    </button>
                    <button
                        className={`${classes.btn} ${classes.btn_cancel}`}
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutModal;
