import {useContext, forwardRef, useMemo} from 'react';
import Card from 'react-tinder-card';
import classes from '../../styles/Cards.module.css';

const Cards = forwardRef(function Cards(props, ref) {
    return (
        <div>
            <main className={classes.cardContainer}>
                {!props.clothes && <p>Loading...</p>}
                {props.clothes && props.clothes.map((cloth, index) => {
                    return <Card
                        key={cloth.name}
                        ref={ref[index]}
                        className={classes.swipe}
                        preventSwipe={['up', 'down']}
                        flickOnSwipe
                        swipeRequirementType="velocity"
                        onSwipe={(dir) => props.onSwipeWithCursor(dir, cloth, index)}
                        onCardLeftScreen={() => props.onOutOfFrame(cloth.name, index)}
                    >
                        <div
                            style={{ backgroundImage: `url(${cloth.url})` }}
                            className={classes.card}
                        >
                            <h3>{cloth.name}</h3>
                        </div>
                    </Card>
})}
            </main>
        </div>
    );
});

export default Cards;

