import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";



const App = () => {
  return (
   
    <BrowserRouter>
    <Logo />
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        le "*" fonctionne uniquement si l'Url ne correspond à rien
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;