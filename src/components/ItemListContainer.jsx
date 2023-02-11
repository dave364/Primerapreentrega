import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemLis from "./ItemList";
import { useParams } from 'react-router-dom';
import  Title  from './Title';

/*const shoes = [
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
];*/

export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(()=> {
  const querydb = getFirestore();
  const queryCollection = collection(querydb, "zapatos");
     if (categoriaId) {
      const queryFilter = query(queryCollection, where("category", "==", categoriaId))
      getDocs(queryFilter)
      .then(res => setData(res.docs.map(zapatos => ({id: zapatos.id, ...zapatos.data() }))))
     } else {
      getDocs(queryCollection)
      .then(res => setData(res.docs.map(zapatos => ({id: zapatos.id, ...zapatos.data() }))))
     }
  }, [categoriaId])

   

  return (
    <>
      <Title />
      <ItemLis data={data}/>
    </>
    
  );
}

export default ItemListContainer;