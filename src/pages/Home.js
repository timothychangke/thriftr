import { NavLink } from 'react-router-dom';
import classes from '../styles/Home.module.css';

function HomePage() {
    return (
        <>
            <main className={classes.main}>
                <h1 className={classes.h1}>Thriftr - Fall in Love with Preloved Items</h1>
                <div>Immerse yourself in a unique online shopping experience that combines the charm of yesterday with the convenience of modern technology
                <br/>
                <div className={classes.navlink}>
                <NavLink  to="/products">Start Shopping</NavLink>
                </div>
                </div>
            </main>
        </>
    );
}

export default HomePage;
