import "./styles.css";
import React, { useState } from "react";

var headingElement = "Welcome to Emoji Interpretter";

var emojiDictionary = {
  "😀": "grinning face",
  "😃": "grinning face with big eyes",
  "😄": "grinning face smilling eyes",
  "😁": "beamming face with smilling eyes",
  "😆": "grinning squinting face",
  "😅": "grinning face with sweat"
};

var emojisWeHave = Object.keys(emojiDictionary);

// var username = prompt("What's your name?");
export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var meaning = emojiDictionary[event.target.value];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App" style={{ border: "dotted 4px" }}>
      <h1>{headingElement}</h1>
      <h2> Welcome user! </h2>
      <input onChange={emojiInputHandler} />
      <div style={{ padding: "1rem" }}> Meaning : {meaning} </div>
      <h3>Emojis we have in our database</h3>
      <small>You can also click on emoji to know their meaning</small>
      <ul style={{ padding: "0rem" }}>
        {emojisWeHave.map((emoji) => {
          return (
            <li
              onClick={() => emojiClickHandler(emoji)}
              style={{ display: "inline", padding: "1rem", listStyle: "none" }}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
