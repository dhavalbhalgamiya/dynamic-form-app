import "./App.css";
import Data from "./FormData.json";
import Home from "./templates/Home/Home";

function App() {
  return (
    <div className="App">
      <Home jsonConfig={Data.form} />
    </div>
  );
}

export default App;
