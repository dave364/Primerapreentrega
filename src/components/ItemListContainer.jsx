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
  {id: 3,
  nombre: "Nike Clasicos ",
  precio: 2500,
  img: "https://http2.mlstatic.com/D_NQ_NP_948714-MLV46967864052_082021-W.jpg",
  category: "clasicos"},
  {id: 4,
  nombre: "Nike modernos",
  precio: 3000,
  img: "https://http2.mlstatic.com/D_NQ_NP_813094-MLA50401970090_062022-W.jpghttps://laopinion.com/wp-content/uploads/sites/3/2022/05/Nike-Free-Run-2.jpg?quality=80&strip=all&w=1200",
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
    <ItemCount initial={1} stock={10} onAdd={onAdd} />
    <Title />
    <ItemLis data={data}/>
    </>
    
  );
}

export default ItemListContainer;