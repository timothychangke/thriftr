import classes from '../styles/Home.module.css';
import Button from '@mui/material/Button';
import BubbleText from '../components/HomePage/BubbleText'

function HomePage() {
    return (
        <>
            <div className={classes.background}>
                <main className={classes.main}>
                    <div className={classes.bubbleContainer}>
                        <div>
                            <BubbleText text="Thriftr - Fall in Love with Preloved Items" />
                        </div>
                    </div>

                    <div className={classes.centerText}>
                        Immerse yourself in a unique online shopping experience
                        that combines the charm of yesterday with the technology
                        of today
                    </div>
                    <Button
                        className={classes.button}
                        href="/products"
                        variant="outlined"
                        style={{"color": "darkred", "borderColor": "darkred"}}
                    >
                        Start Shopping
                    </Button>
                </main>
            </div>
        </>
    );
}

export default HomePage;
