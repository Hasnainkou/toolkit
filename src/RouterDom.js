import React from 'react'

const RouterDom = () => {
  return (
    <div>
        <h3>App.js</h3>
        <h4>npm i react-router-dom</h4>
<code>{`import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";

const App = () => {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/products" element={<Products/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/singleproduct/:id" element={<SingleProduct/>} />
<Route path="/cart" element={<Cart/>} />
</Routes>

</BrowserRouter>

  );
};

export default App;
`}</code>
       <h3>Navbar.js</h3>
<code>{`import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <NavLink to="/" >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" >
                           About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" >
                           Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Nav;`}</code>

<hr />
  
<h2>Board creation like trello</h2>
<h3>App.js</h3>
            <img src="1.jpg" alt="" style={{ width: "700px" }} />
            <h3>SingleProduct.js</h3>
            <img src="2.jpg" alt="" style={{ width: "700px" }} />
            <h3>Home.js</h3>
            <img src="3.jpg" alt="" style={{ width: "800px" }} />
            <a href="Reduxupload.zip" download>
                <div > 
               Download trello board</div>
            </a>
    </div>
  )
}

export default RouterDom;