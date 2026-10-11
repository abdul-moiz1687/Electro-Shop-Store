import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";

import "./Home.css";

function Home() {

return (

<div className="home">

<Hero/>

<div className="marquee">

<div className="track">

<span>

Free Delivery Above Rs 5000

</span>

<span>

New Collection Available

</span>

<span>

Premium Electronics

</span>

<span>

Fast Checkout Experience

</span>

<span>

Exclusive Weekly Offers

</span>

</div>

</div>

<h1 className="featured-heading">

Featured Products

</h1>

<FeaturedProducts/>

</div>

);

}

export default Home;