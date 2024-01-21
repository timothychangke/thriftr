import React, { useState } from 'react';
import CheckoutModal from '../components/Checkout/CheckoutModal';
import CartItems from '../components/Cards/CardItems';
import classes from '../styles/Cart.module.css';

function Cart() {
    const [showModal, setShowModal] = useState(false);

    function handleShowModal() {
        setShowModal(true);
    }
    function handleCloseModal() {
        setShowModal(false);
    }
    return (
        <>
            <h1>Your Cart</h1>
            <CartItems />
            <p>
                <button className={classes.button} onClick={handleShowModal}>
                    Go to Checkout
                </button>
                {showModal && (
                    <CheckoutModal
                        onSubmit={handleCloseModal}
                        onClose={handleCloseModal}
                    />
                )}
            </p>
        </>
    );
}

export default Cart;
