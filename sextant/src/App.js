import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";

function App() {
  return (
    <div className="App">
      <Banner title={"Sextant"} />
      <Exhibit heading={"Heading"} children={null}></Exhibit>
    </div>
  );
}

export default App;
