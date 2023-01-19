import "./ItemDetail.css";
import React from 'react';

const ItemDetail = ({data}) => {
    return (
        <div className='container'>
        <div className='detail'>
            <img className='detail_image' src={data.img} alt="" />
            <div className='content'>
                 <h1>{data.nombre}</h1>
                 <p>$ {data.precio}</p>
            </div>
            </div>    

        </div>
    );
};

export default ItemDetail;