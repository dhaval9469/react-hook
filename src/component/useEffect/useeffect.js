import "./login/login.css";
import React, { useState, useEffect } from "react";

const Useeffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("first useEffect");

    if (count >= 1) {
      document.title = `Massage ${count}`;
    } else {
      document.title = `Massage`;
    }
  }, [count]);

  // when cheng value at time run useeffect  then set value in list

  useEffect(() => {
    console.log("i am fine ");
  }, []);
  //  -: useEffect Dependency List :-
  // set empty  list to run at first time in useEffect

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{count}</h1>
        <button
          className="remove"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click 😊
        </button>
        <br />
        <br />
        <button
          className="remove"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Click 😊
        </button>
      </div>
    </>
  );
};

export default Useeffect;
