/* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react-refresh/only-export-components */
// import { createContext, useState } from "react";

// export const CardContext =
// createContext();

// function CardProvider({
// children
// }) {

// const [cart,setCart]=
// useState([]);

// function addToCart(product){

// setCart((prev)=>{

// const exist=
// prev.find(
// (item)=>
// item.id===product.id
// );

// if(exist){

// return prev.map(
// (item)=>

// item.id===product.id
// ?

// {
// ...item,
// qty:item.qty+1
// }

// :

// item
// );

// }

// return [

// ...prev,

// {
// ...product,
// qty:1
// }

// ];

// });

// }

// function increase(id){

// setCart(
// (prev)=>

// prev.map(
// (item)=>

// item.id===id

// ?

// {
// ...item,
// qty:item.qty+1
// }

// :

// item

// )

// );

// }

// function decrease(id){

// setCart(

// (prev)=>

// prev
// .map(

// (item)=>

// item.id===id

// ?

// {
// ...item,
// qty:item.qty-1
// }

// :

// item

// )

// .filter(
// (item)=>
// item.qty>0
// )

// );

// }

// return(

// <CardContext.Provider

// value={

// {
// cart,
// addToCart,
// increase,
// decrease
// }

// }

// >

// {children}

// </CardContext.Provider>

// );

// }

// export {
// CardProvider
// };

import { createContext, useState, useEffect } from "react";

export const CardContext = createContext();

function CardProvider({ children }) {

  // Load from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart (qty system)
  function addToCart(product) {
    setCart((prev) => {
      const exist = prev.find(item => item.id === product.id);

      if (exist) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  }

  // Increase qty
  function increase(id) {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  }

  // Decrease qty (remove if 0)
  function decrease(id) {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  }

  // ❌ Remove single item
  function removeItem(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  // 🧹 Clear all cart
  function clearCart() {
    setCart([]);
  }

  return (
    <CardContext.Provider value={{
      cart,
      addToCart,
      increase,
      decrease,
      removeItem,
      clearCart
    }}>
      {children}
    </CardContext.Provider>
  );
}

export { CardProvider };