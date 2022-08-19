import React from "react";
import './App.css';
import WordCard from "./WordCard";

const word = "ComputerEngineering";
function App() {
  return (
    <div>
       <WordCard value="Hello"/>
       <WordCard value="Hardware"/>
       <WordCard value="Software"/>
       <WordCard value="Computer"/>
    </div>
  );
}

export default App;
