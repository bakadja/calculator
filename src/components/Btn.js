import React from 'react'
import { useStateContext,ButtonContext } from "./ContextProvider";

export default function Btn({mode}) {
  const {styleBtn, dispatch} = useStateContext();
  const value = React.useContext(ButtonContext);

  let sytleBgColorOrange = {
    ...styleBtn
  };
  if (mode === "reset input" || mode === "reset result") {
    
    sytleBgColorOrange = {
      ...styleBtn,
      backgroundColor: "orange",
    };

  }

  const handleClick = () => {
    if(mode === "add"){
      dispatch({type: "add", payload:  parseInt(value) })
    }
  } 

  return (
    
    <button style={sytleBgColorOrange} onClick={handleClick}>{mode}</button>
  )
}
