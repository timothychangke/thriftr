import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';
import { currencyFormatter } from '../../util/formatting.js';
import classes from '../../styles/CartItems.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

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
                <AnimatePresence>
                    <tr>
                        <td className={classes.table_data}>
                            <AnimatePresence>
                                <motion.ol layout exit={{ y: -15, opacity: 0 }}>
                                    {cartCtx.items.map((item, index) => (
                                        <AnimatePresence>
                                            <motion.li
                                                className={classes.cart_info}
                                                exit={{ y: -15, opacity: 0 }}
                                                key={index}
                                            >
                                                <img
                                                    src={item.url}
                                                    alt={item.name}
                                                    className={classes.item_img}
                                                />
                                                <div
                                                    className={
                                                        classes.cart_data_info
                                                    }
                                                >
                                                    <p>{item.name}</p>
                                                    <p>
                                                        {currencyFormatter.format(
                                                            item.price
                                                        )}
                                                    </p>
                                                    <br />
                                                    <br />
                                                    <br />
                                                    {Object.keys(
                                                        item.sizing
                                                    ).map((key) => (
                                                        <p>{`${key}: ${item.sizing[key]}`}</p>
                                                    ))}
                                                    <br />
                                                    <CloseIcon
                                                        className={
                                                            classes.button
                                                        }
                                                        style={{
                                                            color: 'red',
                                                            padding: '8px 13px'
                                                        }}
                                                        onClick={() =>
                                                            cartCtx.removeItem(
                                                                item.id
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </motion.li>
                                        </AnimatePresence>
                                    ))}
                                </motion.ol>
                            </AnimatePresence>
                        </td>
                    </tr>
                </AnimatePresence>
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
