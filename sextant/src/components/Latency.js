import { useEffect, useState } from "react";

// ToDo: throttle the updates
const W3CWebSocket = require("websocket").w3cwebsocket;
let client;
const Latency = () => {
  let [latency, setLatency] = useState("---");

  useEffect(() => {
    client = new W3CWebSocket("ws://localhost:55455/");

    client.onerror = (e) => {
      console.log("Connection Error: ", e);
    };
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    client.onclose = () => {
      console.log("Client Closed");
    };

    client.onmessage = (msg) => {
      setLatency(Date.now() - msg.data);
    };
  }, []);

  return <div className="Latency">Latency: {latency}</div>;
};
export default Latency;
