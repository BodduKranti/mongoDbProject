import React from "react";

//Install denependcies 
//  1. npm i sass
//  2. npm i react-bootstrap bootstrap
//  3. npm i react-slick --save
//  4. npm i slick-carousel --save
//  5. npm i axios
//  6. npm i react-router-dom

// Other dependencies
// 7. npm install axios react-file-base64 [ for image upload ]

//import dependencies

import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sass/style.scss';

//Pages and routes here
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Common/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";
import Footer from "./Common/Footer/Footer";
import Bloglist from "./Pages/Blog/Bloglist";
import SingleBlog from "./Pages/Blog/SingleBlog";
import BlogCat from "./Pages/Blog/BlogCat";
import BlogCatItms from "./Pages/Blog/BlogCatItms";
import SingleProduct from "./Pages/Product/SingleProduct";
import ProductCat from "./Pages/Product/ProductCat";
import ProductCatItms from "./Pages/Product/ProductCatItms";
import ProductList from "./Pages/Product/ProductList";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import UpdateBlog from "./Pages/Blog/UpdateBlog";
import ProductSearch from "./Pages/Product/ProductSearch";

function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
              <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/bloglist" element={<Bloglist />} />
                  <Route path="/blog/:id" element={<SingleBlog />} />
                  <Route path="/blogCat" element={<BlogCat />} />
                  <Route path="/blogCat/:cat" element={<BlogCatItms />} />
                  <Route path="/blogUpdate/:id" element={<UpdateBlog />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/product/:id" element={<SingleProduct />} />
                  <Route path="/prodCat" element={<ProductCat />} />
                  <Route path="/prodList" element={<ProductList />} />
                  <Route path="/prodCat/:cat" element={<ProductCatItms />} />
                  <Route path="/productSrch" element={<ProductSearch />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
