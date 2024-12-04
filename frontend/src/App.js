import React, { useState } from "react";
import "./App.css";

function App() {
  // State to store the selected pair and the result
  const [selectedPair, setSelectedPair] = useState("BTC/USD");
  const [result, setResult] = useState("");

  // Price data (you can replace this with an API call)
  const prices = {
    "BTC/USD": "$93612.48",
    "ETH/USD": "$1800.23",
    "LINK/USD": "$7.56",
    "BTC/ETH": "51.23 ETH",
  };

  // Handle button click
  const handleGetPrice = () => {
    setResult(prices[selectedPair] || "Price not available.");
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Chainlink</h1>
        <div className="conversion-box">
          <h2>Conversion Pair</h2>
          <form>
            <label>
              <input
                type="radio"
                name="pair"
                value="BTC/USD"
                checked={selectedPair === "BTC/USD"}
                onChange={(e) => setSelectedPair(e.target.value)}
              />
              BTC/USD
            </label>
            <label>
              <input
                type="radio"
                name="pair"
                value="ETH/USD"
                checked={selectedPair === "ETH/USD"}
                onChange={(e) => setSelectedPair(e.target.value)}
              />
              ETH/USD
            </label>
            <label>
              <input
                type="radio"
                name="pair"
                value="LINK/USD"
                checked={selectedPair === "LINK/USD"}
                onChange={(e) => setSelectedPair(e.target.value)}
              />
              LINK/USD
            </label>
            <label>
              <input
                type="radio"
                name="pair"
                value="BTC/ETH"
                checked={selectedPair === "BTC/ETH"}
                onChange={(e) => setSelectedPair(e.target.value)}
              />
              BTC/ETH
            </label>
          </form>
          <button onClick={handleGetPrice}>
            Get Conversion From Price Oracle
          </button>
        </div>
        <div className="result-box">
          <h2>Result</h2>
          <p>
            {result
              ? `${selectedPair} → ${result}`
              : "Select a pair to see the price."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
