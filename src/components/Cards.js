import { useState, useEffect, useContext } from 'react';
import Card from 'react-tinder-card';
import classes from '../styles/Cards.module.css';
import database from '../firebase';
import CartContext from '../store/CartContext';

function Cards() {
    const [clothes, setClothes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const cartCtx = useContext(CartContext);
    useEffect(() => {
        async function fetchClothes() {
            setIsLoading(true);
            const unsubscribe = database
                .collection('clothes')
                .onSnapshot((snapshot) => {
                    setClothes(snapshot.docs.map((doc) => doc.data()));
                });
            setIsLoading(false);
            return () => {
                unsubscribe();
            };
        }
        fetchClothes();
    }, []);

    const swiped = (direction, cloth) => {
        if (direction === 'left') {
          cartCtx.addItem(cloth)
        }
    };

    return (
        <div>
            <main className={classes.cardContainer}>
                {isLoading && <p>Loading...</p>}
                {!isLoading &&
                    clothes.map((cloth) => (
                        <Card
                            className={classes.swipe}
                            key={cloth.id}
                            preventSwipe={['up', 'down']}
                            flickOnSwipe
                            swipeRequirementType="velocity"
                            onSwipe={(dir) => swiped(dir, cloth)}
                        >
                            <div
                                style={{ backgroundImage: `url(${cloth.url})` }}
                                className={classes.card}
                            >
                                <h3>{cloth.name}</h3>
                            </div>
                        </Card>
                    ))}
            </main>
        </div>
    );
}

export default Cards;
