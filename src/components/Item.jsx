import './Item.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({info}) => {
    return (
        <Link to={`/Primerapreentrega/detalle/ ${info.id}`} className="shoe">
    <img src= {info.img} alt="" />
    <h1>{info.nombre}</h1>
    </Link>
    );
}

export default Item;