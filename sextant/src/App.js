import "./App.css";
import Banner from "./components/banner";
import Exhibit from "./components/exhibit";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
      </header>
      <Exhibit heading={"Heading"} children={null}></Exhibit>
    </div>
  );
}

export default App;
