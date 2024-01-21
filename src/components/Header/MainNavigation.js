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
                        {console.log(tabs)}
                        {tabs.map((tab) => (
                            <li
                                // className={`${
                                //     path === tab.id ? '' : 'hover:text-white/60'
                                // } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
                                style={{
                                    WebkitTapHighlightColor: 'transparent',
                                    'padding-left': '10rem '
                                }}
                                key={tab.id}
                            >
                                <NavLink to={tab.link}>
                                    {/* {(
                                        <motion.span
                                            layoutId="bubble"
                                            className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                            style={{ borderRadius: 9999 }}
                                            transition={{
                                                type: 'spring',
                                                bounce: 0.2,
                                                duration: 0.6
                                            }}
                                        />
                                    )} */}
                                    {tab.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default MainNavigation;
