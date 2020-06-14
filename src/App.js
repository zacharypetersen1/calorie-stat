import React from "react";
import SearchSection from "./components/SearchSection";
import ButtonSection from "./components/ButtonSection";
import CartSection from "./components/CartSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.scss";

function App() {
  return (
    <div className="app-container">
      <SearchSection />
      <ButtonSection />
      <CartSection />
    </div>
  );
}

export default App;
