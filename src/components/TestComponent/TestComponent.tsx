import React from "react";
import * as Styled from "./TestComponent.style";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  increase,
  increaseDouble,
} from "../../stores/testReducer/testReducer";
//types
import { AppDispatch, ReducerType } from "../../stores/rootReducer";

const TestComponent = () => {
  const dispatch = useDispatch<AppDispatch>();

  const value = useSelector<ReducerType, number>(
    (state) => state.testReducer.value
  );

  const increament = () => {
    dispatch(increase());
  };
  const decreament = () => {
    dispatch(decrease());
  };
  const doubleUp = () => {
    dispatch(increaseDouble({ value: 2 }));
  };

  return (
    <div>
      <Styled.Ptag>test</Styled.Ptag>
      <p>{value}</p>
      <button onClick={increament}>+</button>
      <button onClick={decreament}>-</button>
      <button onClick={doubleUp}>doubleUp</button>
    </div>
  );
};

export default TestComponent;
