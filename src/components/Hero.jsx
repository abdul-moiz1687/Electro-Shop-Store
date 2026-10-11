import { Link } from "react-router-dom";
import hero from "../assets/Hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

<div className="hero-banner">

<img
src={hero}
alt=""
className="hero-image"
/>

<Link to="/products">
<button className="hero-btn">
Shop Now
</button>
</Link>

</div>

</section>
  );
}

export default Hero;