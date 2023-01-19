import ItemCount from './ItemCount.jsx'
import ItemLis from "./ItemList"
import { useEffect, useState } from 'react'
import  Title  from './Title'
import { useParams } from 'react-router-dom'

const shoes = [
  {id: "1",
  nombre:  "Converse clasicos",
  precio: 1000,
  img: "https://http2.mlstatic.com/D_NQ_NP_746180-MLA43718796939_102020-W.jpg",
  category: "clasicos"},
  {id: "2",
  nombre: "Converse modernos",
  precio: 2000,
  img: "https://http2.mlstatic.com/D_NQ_NP_692985-MLA50236559821_062022-O.webp",
  category: "modernos"},
];

export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(()=> {
     const getData = new Promise(resolve => {
      setTimeout(() => {
      resolve(shoes);
      }, 1000);
     });
     if (categoriaId) {
         getData.then(res => setData(res.filter(shoe => shoe.category === categoriaId)));
     } else {
         getData.then(res => setData(res));
     }
  }, [categoriaId])

   const onAdd = (quantity) => {
     console.log(`compraste ${quantity} unidades`);
   }

  return (
    <>
    <Title />
    <ItemCount initial={1} stock={10} onAdd={onAdd} />
    <ItemLis data={data}/>
    </>
    
  );
}

export default ItemListContainer;