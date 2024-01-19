import { NavLink } from 'react-router-dom';
import classes from '../styles/MainNavigation.module.css';
import { useContext } from 'react';
import CartContext from '../store/CartContext';

function MainNavigation() {
    const cartCtx = useContext(CartContext)
    const totalCartItems = cartCtx.items.length;
    return (
        <>
            <img
                className={classes.logo}
                src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
                alt="tinder-logo"
            />
            <header className={classes.header}>
                <nav>
                    <ul className={classes.list}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className={classes.listItem}>
                            <NavLink to="/products">Shop</NavLink>
                        </li>
                        <li className={classes.listItem}>
                            <NavLink to="/cart">Cart({totalCartItems})</NavLink>
                        </li>
                        <li className={classes.listItem}>
                            <NavLink to="/try">Try it on</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default MainNavigation;
