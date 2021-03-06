import './App.css';
import { useState } from "react";
import { emojiDictionary } from "./emoji.js"


function App() {
  const [meaning, setMeaning] = useState("");

  const inputChanged = (event) => {
    let value = emojiDictionary[event.target.value]
      ? emojiDictionary[event.target.value]
      : (event.target.value === ""
        ? ""
        : "We do not have the meaning of this emoji :(");
    setMeaning(value);
  }

  const emojiClickHandler = (event) => setMeaning(emojiDictionary[event.target.innerText]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-heading">Emoji Interpreter</h1>
        <p className="App-paragraph">With this app, you will never get confused while expressing your emotions 😃</p>
        <input
          placeholder="input emoji"
          className="App-input" onChange={inputChanged} />
        <h2 className="App-subheading">Meaning: <span className="meaning">{meaning}</span></h2>
        <ul className="list">
          {
            Object.keys(emojiDictionary).map((item, index) => {
              return <li
                key={index}
                onClick={emojiClickHandler}
              >{item}
              </li>
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
