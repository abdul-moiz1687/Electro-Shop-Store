// import { useContext } from "react";
// import { CardContext } from "../context/CardContext";


// function ProductCard({id, image, name, price, category }) {
//   const { addToCart } =
// useContext(CardContext);
//   return (
//     <div>
//         <img
//         src={image}
//         alt={name}
//         width={200}
//         />

// <h2>{name}</h2>
// <p>{category}</p>
// <h3>{price}</h3>

// <button onClick={()=>{

// addToCart({
// id,
// image,
// name,
// price
// });

// alert(
// "Added To Cart"
// );

// }}
// >Add to Cart</button>

//     </div>
//   )
// }

// export default ProductCard


import {
useContext
}
from "react";

import {
CardContext
}
from "../context/CardContext";

import "./ProductCard.css";

function ProductCard({

id,
image,
name,
price,
category

}){

const {

addToCart

}

=

useContext(
CardContext
);

return(

<div className="product-card">

<img
src={image}
alt={name}
/>

<h2>

{name}

</h2>

<p>

{category}

</p>

<h3>

Rs {price}

</h3>

<button

onClick={()=>{

addToCart({

id,
image,
name,
price

});

alert(
"Added To Cart " + name
);

}}

>

Add To Cart

</button>

</div>

);

}

export default ProductCard;