import React from 'react';
import { useCartContext } from '../context/CartContext';
 
 const CartWidget = () => {
const {productTotal} = useCartContext();
  return (
    <>
    <i className="bi bi-cart4"></i>
    <span>{productTotal() || ''} </span>
    </>
  );
}

export default CartWidget;