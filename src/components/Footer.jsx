// import "./Footer.css";

// function Footer() {

// return (

// <footer className="footer">

// <div className="footer-container">

// <div className="footer-box">

// <h2>

// ElectroShop

// </h2>

// <p>

// Smart Electronics
// For Everyone

// </p>

// <div className="social">

// <i className="fa-brands fa-facebook-f"></i>

// <i className="fa-brands fa-instagram"></i>

// <i className="fa-brands fa-linkedin-in"></i>

// </div>

// </div>

// <div className="footer-box">

// <h3>

// Shop

// </h3>

// <a href="/">
// Home
// </a>

// <a href="/products">
// Products
// </a>

// <a href="/cart">
// Cart
// </a>

// </div>

// <div className="footer-box">

// <h3>

// Company

// </h3>

// <a href="/about">
// About
// </a>

// <a href="/contact">
// Contact
// </a>

// <a href="/">
// Support
// </a>

// </div>

// <div className="footer-box">

// <h3>

// Contact

// </h3>

// <p>

// <i className="fa-solid fa-envelope"></i>

// abdulmoizarain766@gamil.com

// </p>

// <p>

// <i className="fa-solid fa-phone"></i>

// +92 3022481495

// </p>

// </div>

// </div>

// <div className="footer-bottom">

// <p>

// © 2026 ElectroShop
// —
// All Rights Reserved

// </p>

// </div>

// </footer>

// );

// }

// export default Footer;


import "./Footer.css";

function Footer() {

return (

<footer className="footer">

<div className="footer-container">

<div className="footer-box brand">

<h2>

ElectroShop

</h2>

<p>

Quality electronics with simple and secure shopping.

</p>

<div className="social">

<a href="#">

<i className="fa-brands fa-facebook-f"></i>

</a>

<a href="#">

<i className="fa-brands fa-instagram"></i>

</a>

<a href="#">

<i className="fa-brands fa-linkedin-in"></i>

</a>

</div>

</div>

<div className="footer-box">

<h3>

Shop

</h3>

<a href="/">Home</a>

<a href="/products">Products</a>

<a href="/cart">Cart</a>

</div>

<div className="footer-box">

<h3>

Company

</h3>

<a href="/about">About</a>

<a href="/contact">Contact</a>

<a href="/">Support</a>

</div>

<div className="footer-box">

<h3>

Contact

</h3>

<a
className="contact"
href="mailto:abdulmoizarain766@gmail.com"
>

<i className="fa-regular fa-envelope"></i>

abdulmoizarain766@gmail.com

</a>

<a
className="contact"
href="tel:+923022481495"
>

<i className="fa-solid fa-phone"></i>

+92 3022481495

</a>

</div>

</div>

<div className="footer-bottom">

© 2026 ElectroShop · All Rights Reserved

</div>

</footer>

);

}

export default Footer;