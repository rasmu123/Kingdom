//import { useState } from "react";
//import Alert from "./components/alert";
//import Button from "./components/button";
import "./App.css";

function App() {
  //const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="App">
      {/* Top part, lvl, xp bar, burger */}
      <header className="app-header">
        {/* Left side: xp and level */}
        <div className="status-container">
          <p className="xp-text">33/66</p>
          <div className="progress-level-wrapper">
            <div className="progress-bar">
              {/* These two divs represent the colored parts of the bar */}
              <div className="progress-segment-1"></div>
              <div className="progress-segment-2"></div>
            </div>
            <p className="level-text">01</p>
          </div>
        </div>

        {/* Right side: Burger Menu */}
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      {/* Header */}
      <h1>Home</h1>
      <p>Welcome back, m'lord! We have awaited your return.</p>
      {/* Nav buttons */}
      <section></section>
      {/* Body */}
      <section className="town-post-body"></section>
    </div>
  );
}

export default App;

//{alertVisible && (
//        <Alert onClose={() => setAlertVisibility(false)}>Hello World!</Alert>
//      )}
//      <Button color="danger" onClick={() => setAlertVisibility(true)}>
//        My Button
//      </Button>
