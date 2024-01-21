import MainNavigation from '../components/Header/MainNavigation';
import { Outlet } from 'react-router-dom';
import { CartContextProvider } from '../store/CartContext';

import classes from '../styles/RootLayout.module.css';

function RootLayout() {
    return (
        <CartContextProvider>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </CartContextProvider>
    );
}

export default RootLayout;
