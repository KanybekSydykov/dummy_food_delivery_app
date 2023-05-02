import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import React,{useState} from 'react'
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false)
  const showCartHandler = ()=>{
    setCartIsShown(true)
  }

  const hideCartHandler= ()=>{
    setCartIsShown(false)
  }
  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={setCartIsShown} onHideCart={hideCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
