
import React, { useContext, useState } from 'react';
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    /*const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({ ...item, quantity: newQuantity});
        setCart(newCart);
    }*/

    const addProduct = (item,quantity) => {
        let newCart;
        let product = cart.find(product => product.id === item.id);
        if (product) {
            product.quantity += quantity;
            newCart = [ ...cart];    
        } else {
            product = { ...item, quantity: quantity };
            newCart = [ ...cart, product];
        };
        setCart(newCart)
    }

    const precioTotal = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
    }

    const productTotal = () => cart.reduce((acumular, productoActual) => acumular + productoActual.quantity, 0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product.id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return (
    <CartContext.Provider value= {{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        precioTotal,
        productTotal,
        cart
    }}>
       {children} 
    </CartContext.Provider>

    )
}

export default CartProvider