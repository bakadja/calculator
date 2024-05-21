import React from 'react'
import { useStateContext,ButtonContext } from "./ContextProvider";

export default function Btn({mode, reset}) {
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
console.log('mode value',mode, value)
console.log(typeof value, typeof mode)

  const handleClick = () => {
    if(mode){
      dispatch({type: mode, payload:  parseInt(value) })
    }
    
    if(mode === "reset input") {
      reset(0)
    }
  } 

  return (
    
    <button style={sytleBgColorOrange} onClick={handleClick}>{mode}</button>
  )
}
