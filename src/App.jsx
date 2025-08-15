import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./global.css";
import Products from "./Component/Products";
import Home from "./Component/Home";
import SignUp from "./Component/SignUp";
import Footer from "./Component/Footer";
import NavBar from "./Component/NavBar";
import Login from "./Component/Login";
import { ToastContainer } from "react-toastify";
export let userContext = createContext();

function App() {
  let [name, setName] = useState(null);
  let [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <userContext.Provider
        value={{
          users: [name, setName],
          auth: [isLogin, setIsLogin],
        }}
      >
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </userContext.Provider>
    </div>
  );
}

export default App;
