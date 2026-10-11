// // import { useContext } from "react";
// // import { CardContext } from "../context/CardContext";

// // function Cart(){
// // const {cart,increase,decrease}=useContext(CardContext);

// // const total=cart.reduce((sum,item)=>sum + item.price*item.qty,
// // 0);
// // return(

// // <div>
// // <h1>Your Cart</h1>

// // {
// // cart.length===0
// // ?
// // <h2>
// // No Products Added
// // </h2>
// // :

// // cart.map(
// // (item)=>(

// // <div key={item.id}>

// // <h3>{item.name}</h3>

// // <p>Rs {item.price}</p>

// // <p>Qty:{item.qty}</p>

// // <button
// // onClick={()=>
// // decrease(
// // item.id
// // )}
// // >-</button>

// // <button
// // onClick={()=>
// // increase(
// // item.id
// // )}
// // >+</button>

// // </div>

// // ))
// // }
// // <h2>Total:Rs {total}</h2>
// // </div>
// // );
// // }
// // export default Cart;

// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { CardContext } from "../context/CardContext";

// function Cart() {

//   const {
//     cart,
//     increase,
//     decrease,
//     removeItem,
//     clearCart
//   } = useContext(CardContext);

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   return (
//     <div>

//       <h1>Your Cart</h1>

//       {cart.length === 0 ? (
//         <h3>Cart is empty</h3>
//       ) : (
//         <>
//           {/* CLEAR ALL BUTTON */}
//           <button onClick={clearCart}>
//             Clear Cart
//           </button>

//           {cart.map((item) => (
//             <div key={item.id} className="card">

//               <h2>{item.name}</h2>

//               <p>Price: Rs {item.price}</p>

//               <p>Qty: {item.qty}</p>

//               <p>Total: Rs {item.price * item.qty}</p>

//               <button onClick={() => decrease(item.id)}>
//                 -
//               </button>

//               <button onClick={() => increase(item.id)}>
//                 +
//               </button>

//               <button onClick={() => removeItem(item.id)}>
//                 Remove
//               </button>

//             </div>
//           ))}

//           <h2>
//             Grand Total: Rs {total}
//           </h2>
          
// <Link to="/checkout">
//             <button>
//               Proceed to Checkout
//             </button>
//           </Link>

//         </>
//       )}

//     </div>
//   );
  
// }

// export default Cart;


import { Link } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";

import "./Cart.css";

function Cart() {

const {
cart,
increase,
decrease,
removeItem,
clearCart
}
=
useContext(CardContext);

const total =
cart.reduce(
(sum,item)=>
sum +
item.price *
item.qty,
0
);

return (

<div className="cart-page">

<h1 className="cart-heading">

Your Cart

</h1>

{

cart.length===0

?

<h3 className="empty">

Cart is empty

</h3>

:

<>

<div className="top">

<button
className="clear-btn"
onClick={
clearCart
}
>

Clear Cart

</button>

</div>

{

cart.map(
(item)=>(

<div
key={item.id}
className="card"
>

<div>

<h2>

{item.name}

</h2>

<p>

Price:
Rs
{item.price}

</p>

<p>

Qty:
{item.qty}

</p>

<p>

Total:
Rs
{
item.price*
item.qty
}

</p>

</div>

<div className="actions">

<button

className="qty"

onClick={()=>
decrease(
item.id
)
}

>

-

</button>

<button

className="qty"

onClick={()=>
increase(
item.id
)
}

>

+

</button>

<button

className="remove"

onClick={()=>
removeItem(
item.id
)
}

>

Remove

</button>

</div>

</div>

))

}

<div className="summary">

<h2>

Grand Total:
Rs
{total}

</h2>

<Link
to="/checkout"
>

<button
className="checkout"
>

Proceed to Checkout

</button>

</Link>

</div>

</>

}

</div>

);

}

export default Cart;