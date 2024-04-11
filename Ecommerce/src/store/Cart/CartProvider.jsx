import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount:0
}

const cartReducer = (state, action)  => {

    if(action.type === 'ADD'){

        const updatedTotalAmount = state.totalAmount + action.item.price;
        const existingCartProductIndex = state.items.findIndex(item => item.id===action.item.id)
        const existingCartItem = state.items[existingCartProductIndex];

        let updatedItems;

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity+1,
            }

            updatedItems = [...state.items]
            updatedItems[existingCartProductIndex] = updatedItem;

        } else {
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }

    if(action.type === 'REMOVE'){

        const existingCartProductIndex = state.items.findIndex(item => item.id===action.id)
        const existingCartItem = state.items[existingCartProductIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;

        if(existingCartItem.quantity === 1){
            updatedItems = state.items.filter(item => item.id !==  action.id)
        }else{
            const updatedItem = {...existingCartItem, quantity: existingCartItem.quantity-1}
            updatedItems = [...state.items]
            updatedItems[existingCartProductIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
}

const CartContextProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    
    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: 'ADD',
            item: item,
        })
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem : addItemToCartHandler,
        removeItem : removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </ CartContext.Provider>
    )
}

export default CartContextProvider