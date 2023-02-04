import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import Address from "./components/Address";

function App() {
  return (
    <div className="App">
      <Banner title={"Sextant"} />
      <Exhibit heading={"IP Address"} children={null}>
        <Address method="IPv4"></Address>
        <Address method="IPv6"></Address>
      </Exhibit>
    </div>
  );
}

export default App;
