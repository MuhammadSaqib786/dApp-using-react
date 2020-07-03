import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./Components/Header";
import MainGrid from "./Components/MainGrid";
import formContext from "./Components/formContext";

function App() {
  const [createPoll, changePoll] = useState(false);
  return (
    <formContext.Provider value={[createPoll, changePoll]}>
      <div>
        <Header />
        <MainGrid />
      </div>
    </formContext.Provider>
  );
}

export default App;
