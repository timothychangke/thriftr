import Cards from '../components/Cards/Cards';
import CardButtons from '../components/Cards/CardButtons';
import CartContext from '../store/CartContext';

import { useState, useEffect, useMemo, useRef, useContext } from 'react';
import React from 'react';
import database from '../firebase';

function ProductsPage() {
    const [clothes, setClothes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(19);
    const [prevClotheStack, setPrevClotheStack] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const cartCtx = useContext(CartContext);
    const currentIndexRef = useRef(currentIndex);

    let prevCloth;
    let first = true;

    function updateCurrentIndex(val) {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    }
    useEffect(() => {
        async function fetchClothes() {
            const unsubscribe = await database
                .collection('clothes')
                .onSnapshot((snapshot) => {
                    setClothes(snapshot.docs.map((doc) => doc.data()));
                });
            setIsLoading(false)
            return () => {
                unsubscribe();
            };
        }
        fetchClothes();
    }, []);

    const childRefs = useMemo(
        () =>
            Array(Object.keys(clothes).length)
                .fill(0)
                .map(() => React.createRef()),
        [clothes]
    );

    const outOfFrame = (name, idx) => {
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    };

    function swipedWithCursor(direction, cloth, index) {
        updateCurrentIndex(index - 1);
        prevClotheStack.push(direction);
        if (direction === 'right') {
            cartCtx.addItem(cloth);
            prevCloth = cloth;
        }
    }

    const goBack = async () => {
        if (!(currentIndex < Object.keys(clothes).length - 1)) return;
        const newIndex = currentIndex + 1;
        updateCurrentIndex(newIndex);
        await childRefs[newIndex].current.restoreCard();
        const prevDir = prevClotheStack.pop();
        if (prevDir === 'right') {
            cartCtx.removeItem(prevCloth);
        }
    };

    async function swipeWithButton(direction) {
        if (first) {
            setCurrentIndex(clothes.length - 1);
            first = false;
        }
        if (currentIndex > 0 && currentIndex < clothes.length) {
            await childRefs[currentIndex].current.swipe(direction);
        }
    }

    return (
        <>
            <h1>Products Page</h1>
            <Cards
                key={'clothes'}
                clothes={clothes}
                ref={childRefs}
                onSwipeWithCursor={swipedWithCursor}
                onOutOfFrame={outOfFrame}
                loadingState={isLoading}
            />
            <CardButtons
                clothes={clothes}
                onSwipeWithButton={swipeWithButton}
                onGoBackWithButton={goBack}
            />
        </>
    );
}

export default ProductsPage;
