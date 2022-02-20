import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './data';
import { useState } from 'react';

const App = () => {
  const { items } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };
  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main items={items} onAdd={onAdd}></Main>
        <Cart
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Cart>
      </div>
    </div>
  );
}

export default App;