// import product from "../data/data"
// import ProductCard from "./ProductCard"
// import { Link } from "react-router-dom"

// function FeaturedProducts() {
//     const featured = product.slice(0,3)
//   return (
//     <div>

// {featured.map((item)=>(
//     <ProductCard
//     key={item.id}
//     image={item.image}
//     name={item.name}
//     category={item.category}
//     price={item.price}
//     />
// ))}

// <Link to="/products">

// <button>
// View All Products
// </button>
// </Link>
//     </div>
//   )
// }

// export default FeaturedProducts


import product from "../data/data";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

import "./FeaturedProducts.css";

function FeaturedProducts() {

const featured = product.slice(0, 3);

return (

<div className="featured-section">

<div className="featured-grid">

{featured.map((item) => (

<ProductCard

key={item.id}

image={item.image}

name={item.name}

category={item.category}

price={item.price}

/>

))}

</div>

<div className="featured-footer">

<Link to="/products">

<button>

View All Products

</button>

</Link>

</div>

</div>

);

}

export default FeaturedProducts;