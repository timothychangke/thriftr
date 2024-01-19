import { createContext, useReducer } from 'react';

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = [...state.items];
        updatedItems.push(action.item);
        return { ...state, items: updatedItems };
    }
    if (action.type === 'REMOVE_ITEM') {
        const cartItemIndex = state.item.findIndex(
            (item) => item.id === action.id
        );
        const cartItem = state.items[cartItemIndex];
        const updatedItems = [...state.items];
        updatedItems.splice(cartItem, 1);
        return { ...state, items: updatedItems };
    }
    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item });
    }

    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id });
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    };
    console.log(cartContext)

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
