import { NavLink, useLocation } from 'react-router-dom';
import classes from '../../styles/MainNavigation.module.css';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/CartContext';
import { motion } from 'framer-motion';

function MainNavigation() {
    const [path, setPath] = useState();
    const cartCtx = useContext(CartContext);
    const totalCartItems = cartCtx.items.length;
    const location = useLocation();
    const { pathname } = location;
    useEffect(() => {
        setPath(pathname);
    }, [location]);

    const tabs = [
        { id: '/', text: 'Home', link: '/' },
        { id: '/products', text: 'Shop', link: '/products' },
        { id: '/cart', text: `Cart(${totalCartItems})`, link: '/cart' },
        { id: '/try', text: 'Try it on', link: '/try' }
    ];
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
                        {tabs.map((tab) => (
                            <motion.li
                                style={{
                                    'padding-left': '10rem '
                                }}
                                key={tab.id}
                            >
                                <NavLink to={tab.link}>{tab.text}</NavLink>
                                {tab.link === path && (
                                    <motion.div layoutId="tab-indictor"
                                        style={{
                                            border: '1.5px solid #fd5c63',
                                            'margin-top': '5px',
                                            'borderWidth': '1px'
                                        }}
                                    ></motion.div>
                                )}
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default MainNavigation;
