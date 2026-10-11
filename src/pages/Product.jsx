// import { useState } from "react";
// import ProductCard from "../components/ProductCard"
// import Products from "../data/data"

// function Product() {
//      const [search, setSearch] = useState("");

//   const filtered = Products.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
// <h1>All Products</h1>

//       {/* SEARCH BAR */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{
//           padding: "10px",
//           margin: "10px",
//           width: "300px"
//         }}
//       />


// {
//     filtered.map((item)=>(
//         <ProductCard
//         key={item.id}
//         id={item.id}
//         image={item.image}
//          name={item.name}
//             price={item.price}
//             category={item.category}
//         />
//     ))
// }
//     </div>
//   )
// }

// export default Product

import { useState } from "react";

import ProductCard from "../components/ProductCard";

import Products from "../data/data";

import "./Product.css";

function Product() {

const [search,setSearch]=
useState("");

const filtered=

Products.filter(

(item)=>

item.name

.toLowerCase()

.includes(

search

.toLowerCase()

)

);

return(

<div className="product-page">

<div className="product-header">

<h1>

All Products

</h1>

<input

className="search"

type="text"

placeholder="Search Product"

value={search}

onChange={(e)=>

setSearch(
e.target.value
)

}

/>

</div>

<div className="product-grid">

{

filtered.map(

(item)=>(

<ProductCard

key={item.id}

id={item.id}

image={item.image}

name={item.name}

price={item.price}

category={item.category}

/>

)

)

}

</div>

</div>

);

}

export default Product;