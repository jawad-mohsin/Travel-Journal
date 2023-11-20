import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import travelData from "./Data.js";

function App() {
  const cardInfo = travelData.map((item) => {
    return <Card {...item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <div className="cards">{cardInfo}</div>
    </div>
  );
}

export default App;
