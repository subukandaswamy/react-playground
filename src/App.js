import logo from "./logo.svg";
import "./App.css";
import Increment1 from "./components/Increment1";
import Increment2 from "./components/Increment2";
function App() {
  return (
    <div className="App">
      <Increment1 step={2} />
      <Increment2 step={3} />
    </div>
  );
}

export default App;
