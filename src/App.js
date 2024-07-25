import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/Counter";
import AnotherCounter from "./component/AnotherCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Demo redux</h1>
        <Counter />
        <AnotherCounter />
      </header>
    </div>
  );
}

export default App;
