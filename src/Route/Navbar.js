// import './App.css';
import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Footer from "./Footer";
import Header from "./Header";
import Mobile from "../Components/Mobile/Mobile";
import Laptop from "../Components/Laptop/Laptop";
import Accesories from "../Components/Accesories/Accesories";
import Fashion from "../Components/Fashion/Fashion";

function Navbar() {
    return (
        <>
            <Header />
            <div>
                <BrowserRouter>
                    <div className="navbar">
                        <div className="main-nav">
                            <ul type="none" className="ul">
                                <li><NavLink className={"home"} to="/">Home</NavLink></li>
                                <li><NavLink className={"home"} to="/mobile">Mobile</NavLink></li>
                                <li><NavLink className={"home"} to="/laptop">Laptop</NavLink></li>
                                <li><NavLink className={"home"} to="/fashion">Fashion</NavLink></li>
                                <li><NavLink className={"home"} to="/accesories">Accesories</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/mobile" element={<Mobile />} />
                        <Route path="/laptop" element={<Laptop />} />
                        <Route path="/fashion" element={<Fashion/>}/>
                        <Route path="/accesories" element={<Accesories/>}/>
                    </Routes>
                </BrowserRouter >
            </div >
            <Footer></Footer>
        </>
    )
}
export default Navbar;