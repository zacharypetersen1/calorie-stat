import React from "react";
import SearchSection from "./components/SearchSection";
import CartSection from "./components/CartSection";
import OutcomeSection from "./components/OutcomeSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.scss";

function App() {
  return (
    <div className="app-container">
      <SearchSection />
      <CartSection />
      <OutcomeSection />
    </div>
  );
}

export default App;
