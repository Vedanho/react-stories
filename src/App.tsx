import React from "react";
import Progress from "./components/Progress/Progress";
import SendMessage from "./components/SendMessage/SendMessage";

import "../src/styles/index.scss"

function App() {
  return (
    <div className="App">
      <Progress />
      <SendMessage />
    </div>
  );
}

export default App;
