import CartContext from "./context"
import React, { useReducer } from "react"
export const CART_ITEMS="CART_ITEMS";


let getitems=JSON.parse (localStorage.getItem(CART_ITEMS))

const initialState={
    cart:getitems === null? [] : getitems
}


const cartReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:[...state.cart,action.payload]
            }
        case 'REMOVE_TO_CART':
            return{
                ...state,
                
                cart:state.cart.filter((item=>item.id!=action.payload))
            }
            default:
            return state;
    }
}
const CartProvider=({children})=>{
    const [state,dispatch]= useReducer(cartReducer,initialState); 
  

    return(
<CartContext.Provider value={{state,dispatch}}>
{children}
</CartContext.Provider>
    )
}

export default CartProvider