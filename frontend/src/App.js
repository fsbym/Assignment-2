import React, { useState } from "react";
import { ethers } from "ethers";
import { Form, Button, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [storedPrice, setStoredPrice] = useState("");
  const [item, setItem] = useState({ pairs: "" });

  const { pairs } = item;

  const contractAddress = "0xC07325fb619d68d447E5169Bc26078fA76523756";
  const ABI = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "getBtcUsdLatestAnswer",
      outputs: [{ internalType: "int256", name: "", type: "int256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getEthUsdLatestAnswer",
      outputs: [{ internalType: "int256", name: "", type: "int256" }],
      stateMutability: "view",
      type: "function",
    },
  ];

  const provider = new ethers.BrowserProvider(window.ethereum);
  const contract = new ethers.Contract(contractAddress, ABI, provider);

  const getPair = async () => {
    let contractPrice;
    if (pairs === "BTC/USD") {
      contractPrice = await contract.getBtcUsdLatestAnswer();
    } else if (pairs === "ETH/USD") {
      contractPrice = await contract.getEthUsdLatestAnswer();
    } else {
      return; // If no pair selected, do nothing
    }

    setStoredPrice("$" + parseInt(contractPrice) / 100000000);
  };

  const handleChange = (e) => {
    setStoredPrice("");
    setItem((prevState) => ({
      ...prevState,
      pairs: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <Image
        src="https://seeklogo.com/images/C/chainlink-logo-B072B6B9FE-seeklogo.com.png"
        width={600}
        height={200}
        fluid
        className="mt-5"
      />
      <hr></hr>
      <div>
        <Card
          style={{ width: "32rem" }}
          className="mt-5 shadow bg-body rounded"
        >
          <Card.Header as="h5">Conversion Pair</Card.Header>
          <Card.Body>
            <div className="col">
              <form onSubmit={handleSubmit}>
                <Form.Group controlId="pairs">
                  <Form.Check
                    value="BTC/USD"
                    type="radio"
                    aria-label="radio 1"
                    label="BTC/USD"
                    onChange={handleChange}
                    checked={pairs === "BTC/USD"}
                  />
                  <Form.Check
                    value="ETH/USD"
                    type="radio"
                    aria-label="radio 2"
                    label="ETH/USD"
                    onChange={handleChange}
                    checked={pairs === "ETH/USD"}
                  />
                </Form.Group>
              </form>
              <div className="mt-5">
                <Button
                  variant="outline-primary"
                  size="sm"
                  type="submit"
                  onClick={getPair}
                >
                  Get Conversion From Price Oracle
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
        <div>
          <Card
            style={{ width: "32rem" }}
            className="mt-5 shadow bg-body rounded"
          >
            <Card.Header as="h5">Result</Card.Header>
            <Card.Body>
              <div className="col">
                <h5>
                  {pairs} ➡ {storedPrice}
                </h5>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
