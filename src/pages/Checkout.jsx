// import { useContext, useState } from "react";
// import { CardContext } from "../context/CardContext";

// function Checkout() {

//   const { cart, clearCart } = useContext(CardContext);

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   const [orderPlaced, setOrderPlaced] = useState(false);

//   function placeOrder(e) {
//     e.preventDefault();

//     if (cart.length === 0) {
//       alert("Cart is empty");
//       return;
//     }

//     setOrderPlaced(true);
//     clearCart();
//   }

//   if (orderPlaced) {
//     return (
//       <div>

//         <h1>Payment Successful 🎉</h1>

//         <p>Your order has been placed successfully.</p>

//         <h2>Thank you for shopping!</h2>

//       </div>
//     );
//   }

//   return (
//     <div>

//       <h1>Checkout</h1>

//       {/* ORDER SUMMARY */}
//       <h2>Order Summary</h2>

//       {cart.map((item) => (
//         <div key={item.id}>

//           <p>{item.name}</p>

//           <p>
//             {item.qty} x Rs {item.price}
//           </p>

//         </div>
//       ))}

//       <h2>Total: Rs {total}</h2>

//       {/* FAKE FORM */}
//       <form onSubmit={placeOrder}>

//         <input
//           type="text"
//           placeholder="Full Name"
//           required
//         />

//         <br /><br />

//         <input
//           type="text"
//           placeholder="Address"
//           required
//         />

//         <br /><br />

//         <input
//           type="text"
//           placeholder="Card Number"
//           required
//         />

//         <br /><br />

//         <button type="submit">
//           Place Order
//         </button>

//       </form>

//     </div>
//   );
// }

// export default Checkout;


import { useContext, useState } from "react";
import { CardContext } from "../context/CardContext";

import "./Checkout.css";

function Checkout() {

const { cart, clearCart } =
useContext(CardContext);

const total =
cart.reduce(
(sum,item)=>
sum +
item.price *
item.qty,
0
);

const [
orderPlaced,
setOrderPlaced
]
=
useState(false);

function placeOrder(e){

e.preventDefault();

if(cart.length===0){

alert("Cart is empty");

return;

}

setOrderPlaced(true);

clearCart();

}

if(orderPlaced){

return(

<div className="checkout-success">

<div className="success-card">

<i className="fa-solid fa-check"></i>

<h1>
Order Confirmed
</h1>

<p>
Your payment has been processed successfully.
</p>

</div>

</div>

);

}

return(

<div className="checkout-page">

<div className="checkout-left">

<h1>

Checkout

</h1>

<form
onSubmit={placeOrder}
className="checkout-form"
>

<label>
Full Name
</label>

<input
type="text"
placeholder="Enter your full name"
required
/>

<label>
Address
</label>

<input
type="text"
placeholder="Street, Area, City"
required
/>

<label>
Card Number
</label>

<input
type="text"
placeholder="**** **** **** ****"
required
/>

<button type="submit">

Place Order

</button>

</form>

</div>

<div className="checkout-right">

<h2>

Order Summary

</h2>

{

cart.map((item)=>(

<div
key={item.id}
className="summary-item"
>

<div>

<h4>

{item.name}

</h4>

<p>

Qty {item.qty}

</p>

</div>

<span>

Rs
{
item.price*
item.qty
}

</span>

</div>

))

}

<div className="grand-total">

<span>
Total
</span>

<strong>

Rs
{total}

</strong>

</div>

</div>

</div>

);

}

export default Checkout;