import React from "react";
import Btn from "./components/Btn";
import ContextProvider from "./components/ContextProvider";
import Card from "./components/Card";
import TextInput from "./components/TextInput";
import { ButtonContext } from "./components/ContextProvider";



function App() {
  const [inputValue, setInputValue] = React.useState(null);

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
            <Btn mode="add" value={inputValue} />
            <Btn mode="subtract" />
            <Btn mode="multiply" />
            <Btn mode="divide" />
            <Btn mode="reset input" />
            <Btn mode="reset result" />
          </Card>
        </ButtonContext.Provider>
      </ContextProvider>
    </div>
  );
}

export default App;
