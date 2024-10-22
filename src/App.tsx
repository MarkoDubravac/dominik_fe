import "./App.css";
import { Button } from "./components/ui/button";
import axios from "axios";
import { useState } from "react";
import fortuneTellerGif from "../src/assets/giphy.gif";

function App() {
  const [gatanje, setGatanje] = useState("");
  const [userText, setUserText] = useState("");

  const getGatanje = () => {
    axios
      .get(`api/gpt/fortune?userText=${encodeURIComponent(userText)}`)
      .then((res) => {
        setGatanje(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <img
        src={fortuneTellerGif}
        alt="Fortune Teller GIF"
        style={{ width: "500px", marginBottom: "20px" }} // Optional styling
      />
      <input
        type="text"
        placeholder="Enter your fortune request"
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      />
      <Button variant="outline" onClick={getGatanje}>
        Gataj mi
      </Button>
      <p>{gatanje}</p>
    </>
  );
}

export default App;
