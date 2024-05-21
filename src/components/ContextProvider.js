import React from "react";

const StateContext  = React.createContext();
// const initialState = {result: 0, input: 0};

const initialState = 0;

const reducer = (state, action) => {
  switch(action.type) {
    case "add":
      return state + action.payload;
    case "subtract":
      return state - action.payload;
    case "multiply":
      return state * action.payload;
    case "divide":
      return state / action.payload;
    case "reset input":
      return action.payload;
    case "reset result":
      return state;
    default:
      return state;
  }
}

const styleBtn = {
    padding: "10px",
    backgroundColor: "gray",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    color: "white",
  };



export default function ContextProvider({children}) {
  
  const [ state, dispatch] =  React.useReducer(reducer, initialState)
const value = React.useMemo(() => ({state, dispatch, styleBtn}), [state, dispatch]) 
  return (
    <StateContext.Provider value = {value}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => {
  const context = React.useContext(StateContext);
  if(!context) {
    throw new Error("useStateContext must be used within a ContextProvider")
  }
  return {...context};
}

export const ButtonContext = React.createContext();