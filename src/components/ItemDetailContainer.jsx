import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

/*const shoes = [
    {id: 1,
    nombre:  "Converse clasicos",
    precio: 1000,
    img: "https://http2.mlstatic.com/D_NQ_NP_746180-MLA43718796939_102020-W.jpg",
    category: "clasicos"},
    {id: 2,
    nombre: "Converse modernos",
    precio: 2000,
    img: "https://http2.mlstatic.com/D_NQ_NP_692985-MLA50236559821_062022-O.webp",
    category: "modernos"},
    {id: 3,
    nombre: "Nike clasicos ",
    precio: 2500,
    img: "https://http2.mlstatic.com/D_NQ_NP_948714-MLV46967864052_082021-W.jpg",
    category: "clasicos"},
    {id: 4,
    nombre: "Nike modernos",
    precio: 3000,
    img: "https://laopinion.com/wp-content/uploads/sites/3/2022/05/Nike-Free-Run-2.jpg?quality=80&strip=all&w=1200",
    category: "modernos"},
  ];*/

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {

        const db = getFirestore();
        /*console.log({querydb})
        console.log({detalleId})
        const queryDoc = doc(querydb, 'zapatos', detalleId);
        console.log({queryDoc})
        getDoc(queryDoc)
            .then(res => console.log( "queryDoc", {id: res.id, ...res.data() }) )
        */
        console.log({detalleId})
        //const ref = doc(db, "zapatos", "0HK1aREpGpywdLCc5w7J");
        const ref = doc(db, "zapatos", detalleId.trim());
        //const docSnap = await getDoc(ref);
        console.log({ref})
        getDoc(ref).then(res => setData({id: res.id, ...res.data() }) )
        }, [])  


    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;