import React, { useContext } from 'react';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting.js';
import classes from '../styles/CartItems.module.css';

function CartItems() {
    const cartCtx = useContext(CartContext);
    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.price,
        0
    );
    return (
        <div className={classes.card_page}>
            <table className={classes.card_table}>
                <tr>
                    <th className={classes.table_head}></th>
                </tr>
                <tr>
                    <td className={classes.table_data}>
                        {cartCtx.items.map((item) => (
                            <div className={classes.cart_info}>
                                <img
                                    src={item.url}
                                    alt={item.name}
                                    className={classes.item_img}
                                />
                                <div className={classes.cart_data_info}>
                                    <p>{item.name}</p>
                                    <p>
                                        {currencyFormatter.format(item.price)}
                                    </p>
                                    <br /><br /><br />
                                    {Object.keys(item.sizing).map(key => <p>{`${key}: ${item.sizing[key]}`}</p>)}
                                    {/* <p>{item.sizing.map((attr) => <p>{attr}</p>)}</p> */}
                                    <br />
                                    <button className={classes.button} onClick={() => cartCtx.removeItem(item.id)}> Remove</button>

                                </div>
                            </div>
                        ))}
                    </td>
                </tr>
            </table>
            <div className={classes.total_price}>
                <table className={classes.total_price_table}>
                    <tr>
                        <td>
                            <b>Total</b>
                        </td>
                        <td>
                            <b>{currencyFormatter.format(cartTotal)}</b>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default CartItems;

