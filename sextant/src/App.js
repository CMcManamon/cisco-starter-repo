import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import Address from "./components/Address";
import Latency from "./components/Latency";

function App() {
  return (
    <div className="App">
      <Banner title={"Sextant"} />
      <Exhibit heading={"IPv4 Address"}>
        <Address method="IPv4"></Address>
      </Exhibit>
      <Exhibit heading={"IPv6 Address"}>
        <Address method="IPv6"></Address>
      </Exhibit>
      <Exhibit heading={"Latency"}>
        <Latency />
      </Exhibit>
    </div>
  );
}

export default App;
