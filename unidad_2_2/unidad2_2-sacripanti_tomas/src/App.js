import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Element from "./components/Element";

function App() {
  const [textInput, setTextInput] = useState("");
  const [textArray, setTextArray] = useState([]);

  const editElement = (index, editText) => {
    textArray.splice(index, 1, editText);
    console.log(textArray);
    setTextArray(textArray);
    console.log(textArray);
  };

  const deleteElement = (index) => {
    let filteredArray = textArray.filter((text, i) => i !== index);
    setTextArray(filteredArray);
  };

  return (
    <div className="App">
      <Form
        textInput={textInput}
        setTextInput={setTextInput}
        setTextArray={setTextArray}
        textArray={textArray}
      />
      <ul className="list">
        {textArray.map((text, index) => {
          return (
            <Element
              text={text}
              index={index}
              editElement={editElement}
              deleteElement={deleteElement}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
