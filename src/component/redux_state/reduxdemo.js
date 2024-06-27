import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../../action/index";
const Reduxdemo = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux </h4>
        <div className="quantity">
          <a
            href=""
            className="qunatity-min"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span> - </span>
          </a>
          <input type="text" className="quantity_input" value={myState} />
          <a
            href=""
            className="qunatity-plus"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span> + </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Reduxdemo;
