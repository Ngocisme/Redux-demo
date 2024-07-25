import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  minusAll,
  sumAll,
} from "../features/reducers/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(increment());
  };

  const handleMinus = () => {
    dispatch(decrement());
  };

  const handleSum = () => {
    dispatch(sumAll(5));
  };

  const handleMinusAll = () => {
    dispatch(minusAll(5));
  };
  return (
    <div>
      <h3>Counter App</h3>
      <form>
        <input type="button" value="Minus" onClick={handleMinusAll} />
        <input type="button" value="+" onClick={handlePlus} />
        {count}
        <input type="button" value="-" onClick={handleMinus} />
        <input type="button" value="Sum" onClick={handleSum} />
      </form>
    </div>
  );
}

export default Counter;
