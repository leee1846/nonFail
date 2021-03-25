import React from "react";
import * as Styled from "./TestComponent.style";
import { useSelector } from "react-redux";
import {
  decrease,
  increase,
  increaseDouble,
} from "../../stores/testReducer/testReducer";
//types
import { ReducerType } from "../../stores/rootReducer";
import { useClickNumber } from "./../../hooks/useClickNumber";

const TestComponent = () => {
  const value = useSelector<ReducerType, number>(
    (state) => state.testReducer.value
  );

  const [increament] = useClickNumber({ reducer: increase });
  const [decreament] = useClickNumber({ reducer: decrease });
  const [doubleUp] = useClickNumber({ reducer: increaseDouble, payload: 2 });

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
