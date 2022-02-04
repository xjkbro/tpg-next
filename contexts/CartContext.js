import { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

const CartContext = createContext()
const CartProvider = ({ children }) => {
    const { user, setUser } = useContext(AuthContext);
    const [cart, setCart] = useState([])

    // change to useEffect
    const updateCart = () => {
        //updateCart

        if (JSON.stringify(user) != '{}')       //if user is logged in
            //update user field
            return
    }


    /**
     * addToCartHandler takes in the listed params of a single product to add 
     * item to the cart state. Call update Strapi to update the cart field in the user collection.
     * Users get saved cart sessions when they are logged in.
     * 
     * 
     * @param {int} id 
     * @param {int} qty 
     * @param {string} name 
     * @param {float} price 
     */
    const addToCartHandler = (id, qty, name, price) => {
        // Finds index of item in cart if exists.
        const foundIndex = cart.findIndex((cartItem) => cartItem.id == id);
        let newItem = { id, price, name, quantity: qty }
        // If item is not in cart, add to the cart array
        // Else get cart to a variable, get item, update item, update cart variable, then update state;
        if (foundIndex == -1)
            setCart([...cart, newItem])
        else {
            let newCart = [...cart];
            let updateItem = cart[foundIndex];
            updateItem.quantity = updateItem.quantity + qty;
            newCart[foundIndex] = updateItem;
            setCart([...newCart])
        }
    }
    const updateStrapi = (cart) => {

    }
    /**
     * Clears the cart
     */
    const dumpCart = () => {
        setCart([]);
        updateStrapi(cart);
        //remove from local storage
    }

    return (
        <CartContext.Provider
            value={{ cart, setCart, updateCart, addToCartHandler }}
        >
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }
