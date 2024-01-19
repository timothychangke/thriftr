import { NavLink } from 'react-router-dom';
import classes from '../styles/Home.module.css';

function HomePage() {
    return (
        <>
            <main className={classes.main}>
                <h1 className={classes.h1}>Thriftr - Fall in love with Preloved items</h1>
                <div>Immerse yourself in a unique online shopping experience that combines the charm of yesterday with the convenience of modern technology
                <br/>
                <button className={classes.button}><NavLink to="/products">Start Shopping</NavLink></button>
                </div>
            </main>
        </>
    );
}

export default HomePage;
