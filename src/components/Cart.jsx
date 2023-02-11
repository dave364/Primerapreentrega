import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';


const Cart = () => {
 const { cart, precioTotal } = useCartContext();

 const order = {
    buyer: {
        name: "David",
        email: "Castrodavid9872@gmail.com",
        phone: "123456",
        address: "CABA"
    },
    item: cart.map(zapatos => ({ id: zapatos.id, nombre: zapatos.nombre, precio: zapatos.precio, quantity: zapatos.quantity })),
    total: precioTotal(),
 }

    const handLeClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
    }

 if (cart.length === 0) {
    return (
        <>
           <p>No hay zapatos en el carrito</p>
           <Link to='/Primerapreentrega/'>Comprar</Link>
        </>
    );
 }

    return (
        <>
        {
          cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p>
            total: ${precioTotal()}
        </p>
        <button onClick={handLeClick}>Comprar</button>
        </>
    )
}

export default Cart;