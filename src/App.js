import './App.css';
import { useState } from "react";

const emojiDictionary = {
  "😃": "Happy",
  "😔": "Sad",
  "😂": "Laughing",
  "😭": "Crying",
  "😷": "Sick",
  "😍": "Hearty Eyes",
};

function App() {

  const [meaning, setMeaning] = useState("");

  const inputChanged = (event) => {
    let value = emojiDictionary[event.target.value] ? emojiDictionary[event.target.value] : "We do not have the meaning of this emoji :(";
    setMeaning(value);
  }

  const emojiClickHandler = (event) => setMeaning(emojiDictionary[event.target.innerText]);

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <p>Know your emotions</p>
      <input onChange={inputChanged} />
      <p>Meaning: {meaning}</p>
      <ul>
        {
          Object.keys(emojiDictionary).map((item, index) => {
            return <li
              key={index}
              style={{ cursor: 'pointer' }}
              onClick={emojiClickHandler}
            >{item}
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
