import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bulma-components";
import "bulma/css/bulma.min.css";
import Tanks from "./Tanks";

function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <h1 className="title">Tank Manager</h1>
          <p className="subtitle">Keeping track of our experiments!</p>
          <Tanks />
        </div>
      </section>
    </div>
  );
}

export default App;
