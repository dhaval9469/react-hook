import React, { useState, useRef } from "react";

const UnControlled = () => {
  // it is like useState only and its preserve the value, NO RERENDER
  const luckName = useRef(null);
  const [show, setShow] = useState(false);
  
  const submitForm = (e) => {
    e.preventDefault();
    const name = luckName.current.value;
    name === "" ? alert("Enter Somting") : setShow(true);
    console.log(luckName.current.value);
  };

  return (
    <>
      <div>
        <form action="" className="un-controlled" onSubmit={submitForm}>
          <div>
            <label htmlFor="luckyName">Enter your Luckt Name</label>
            <br />
            <br />
            <input type="text" id="luckyName" ref={luckName} />
          </div>
          <br />
          <button>Submit</button>
        </form>
        <p>{show ? `Lucky Name is ${luckName.current.value}` : ""}</p>
      </div>
    </>
  );
};

export default UnControlled;
