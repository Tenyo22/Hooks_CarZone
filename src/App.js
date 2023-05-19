import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import Agenda from "./components/Agenda";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/register" element={<Formulario/>}/>
        <Route path="/inventario" element={<Lista/>} />
        <Route path="/servicio" element={<Agenda/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
