import React from "react";
import { useSelector } from "react-redux";

function AnotherCounter(props) {
  const sum = useSelector((state) => state.counter.sum);

  return (
    <div>
      Plus 5<h1>{sum}</h1>
    </div>
  );
}

export default AnotherCounter;
