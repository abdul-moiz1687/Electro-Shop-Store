import { Link } from "react-router-dom";
import Img from "../assets/Logo.png";

import "./Navbar.css";

import { useContext, useState } from "react";

import { CardContext } from "../context/CardContext";


function Navbar() {

const { cart } =
useContext(CardContext);


const [
open,
setOpen
] =
useState(false);

return (

<nav className="navbar">

<div className="left">

<img
src={Img}
alt=""
className="logo"
/>

<h2 className="title">

Electro Shop

</h2>

</div>

<button
className="menu"

onClick={()=>
setOpen(!open)
}

>

☰

</button>

<div

className={`right ${
open
?
"active"
:
""
}`}

>

<Link
to="/"
onClick={()=>
setOpen(false)
}
>

Home

</Link>

<Link
to="/products"
onClick={()=>
setOpen(false)
}
>

Products

</Link>

<Link
to="/about"
onClick={()=>
setOpen(false)
}
>

About

</Link>

<Link
to="/contact"
onClick={()=>
setOpen(false)
}
>

Contact

</Link>

<Link
to="/cart"
className="cart"

onClick={()=>
setOpen(false)
}

>

Cart
(
{cart.length}
)

</Link>



</div>

</nav>

);

}

export default Navbar;