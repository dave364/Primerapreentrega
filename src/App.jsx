  import "./App.css";

  import {BrowserRouter, Routes, Route  } from 'react-router-dom';
  import Cart from './components/Cart';
  import ItemDetailContainer from './components/ItemDetailContainer';
  import  ItemListContainer  from './components/ItemListContainer';
  import  NavBar  from './components/NavBar';

  

  function App() {
    return (
     <>
       <BrowserRouter>
         <NavBar />
         <Routes>
           <Route path="/Primerapreentrega/" element={<ItemListContainer />} />
           <Route path="/Primerapreentrega/categoria/:categoriaId" element={<ItemListContainer />} />
           <Route path="/Primerapreentrega/cart" element={<Cart />} />
           <Route path="/Primerapreentrega/detalle/:detalleId" element={<ItemDetailContainer />} />
         </Routes>
       </BrowserRouter>
     </>
    );
  }

  export default App;
