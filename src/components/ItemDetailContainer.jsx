import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const shoes = [
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
  ];

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect(() => {
        const getData =new Promise(resolve => {
         setTimeout(() => {
            resolve(shoes);
         }, 1000);   
        });
    
        getData.then(res => setData(res.find(shoe => shoe.id === parseInt(detalleId))));
     }, [])  


    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;