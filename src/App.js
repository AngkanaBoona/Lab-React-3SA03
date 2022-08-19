import React from "react";
import './App.css';
import WordCard from "./WordCard";

const word = "ComputerEngineering";
function App() {
  return (
    <div>
      <div class="value">
      <header>
      <h1>Word Game</h1>
      </header>
      <p>All About Coe</p>

      <button type="button"
      onclick="document.getElementById('test').innerHTML = Date()">
        Spell the words correctly.

        </button>
          </div>
       <WordCard value="Hello"/>
       <WordCard value="Hardware"/>
       <WordCard value="Software"/>
       <WordCard value="Computer"/>
    </div>
  );
}

export default App;
