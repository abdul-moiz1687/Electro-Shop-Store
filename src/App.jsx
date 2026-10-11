import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer"

function App() {
  
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
<Route path="/checkout" element={<Checkout />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App