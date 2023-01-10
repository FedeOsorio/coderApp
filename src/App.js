import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CartItem } from './components/CartItem/CartItem';
import Mascotas from './components/NavBar/Mascotas';
import { Contacto } from './components/NavBar/Contacto';
import NavBar from './components/NavBar/NavBar';
import ClickEvent from './components/ClickEvent';
import { CartContext } from './context/CartContext';
import { ItemFire } from './components/Fromfirebase/ItemFire'
import {Cart} from './components/Cart/Cart'

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/coderApp/' element={<ItemListContainer />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/mascotas' element={<Mascotas />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/event' element={<ClickEvent />} />
            <Route path='/fire' element={<ItemFire />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
