import React from "react";
import { useStateContext } from "./ContextProvider";

export default function TextInput() {
  const {state} = useStateContext();
  



  return (
    <>
      <h1>Simplest Working Calculator </h1>
      <p>{state}</p>
     
    </>
  );
}