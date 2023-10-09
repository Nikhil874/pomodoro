import axios from "axios";
import React, { useEffect, useState } from "react";
import { quotes } from "./quotes";

const MotivationalQuotes = () => {
  const [qoutes, setQoutes] = useState(quotes);
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#ff00a5",
        color: "white",
        width: "60%",
        margin: "auto",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      {qoutes.length && <h3>{qoutes[Math.floor(Math.random() * 50)]["q"]}</h3>}
    </div>
  );
};

export default MotivationalQuotes;
