import React from "react";
import Btn from "./components/Btn";
import ContextProvider, { ButtonContext } from "./components/ContextProvider";
import Card from "./components/Card";
import TextInput from "./components/TextInput";



function App() {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div style={{ margin: 10 }}>
      <ContextProvider>
        <TextInput />
        <p>
          <input
            value={inputValue}
            type="number"
            style={{ padding: 10 }}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </p>
        <ButtonContext.Provider value={inputValue}>
          <Card>
            <Btn mode="add"  />
            <Btn mode="subtract" />
            <Btn mode="multiply" />
            <Btn mode="divide" />
            <Btn mode="reset input" reset={setInputValue} />
            <Btn mode="reset result" />
          </Card>
        </ButtonContext.Provider>
      </ContextProvider>
    </div>
  );
}

export default App;
