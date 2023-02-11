import "./ItemDetail.css";

import { useState } from "react";
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount.jsx'
import { Link } from "react-router-dom";
import React from 'react';


const ItemDetail = ({data}) => {
    const[irAlCarrito, setirAlCarrito] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setirAlCarrito(true);
        addProduct(data, quantity);
      }

    return (
        <div className='container'>
        <div className='detail'>
            <img className='detail_image' src={data.img} alt="" />
            <div className='content'>
                 <h1>{data.nombre}</h1>
                 <p>$ {data.precio}</p>
                  {
                    irAlCarrito
                    ? <Link to='/Primerapreentrega/cart'><button>Ir al Carrito</button></Link>
                    :<ItemCount initial={1} stock={10} onAdd={onAdd} />
                  }        
            </div>
            </div>    

        </div>
    );
};

export default ItemDetail;