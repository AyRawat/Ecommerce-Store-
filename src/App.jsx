import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
function App() {
  return (
    <ShoppingCartProvider>
      <MyNavbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
