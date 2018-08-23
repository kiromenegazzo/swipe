import React from "react";
import ReactDOM from "react-dom";
import { Item } from "./Item";
import styles from "./styles";

const settings = [
  {
    title: "Sound"
  },
  {
    title: "Network"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <div>
        {settings.map((item, index) => <Item key={index} item={item} />)}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
