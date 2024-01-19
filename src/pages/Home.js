import classes from '../styles/Home.module.css';

import Button from '@mui/material/Button';
import BubbleText from '../components/BubbleText'

function HomePage() {
    return (
        <>
            <main className={classes.main}>
                <div className={classes.bubbleContainer}>
                    <div className="grid h-screen place-content-center bg-black">
                        <BubbleText text="Thriftr - Fall in Love with Preloved Items" />
                    </div>
                </div>

                <div className={classes.centerText}>
                    Immerse yourself in a unique online shopping experience that
                    combines the charm of yesterday with the technology of today
                </div>
                <Button
                    className={classes.Button}
                    href="/products"
                    variant="outlined"
                >
                    Start Shopping
                </Button>
            </main>
        </>
    );
}

export default HomePage;
