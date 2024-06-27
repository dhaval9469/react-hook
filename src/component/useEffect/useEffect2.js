import React, { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [width, setWidht] = useState(window.screen.width);

  const actualWidth = () => {
    setWidht(window.innerWidth);
  };

  // cleanup dunction in useEffect Hook
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <>
      <div>
        <p style={{ fontSize: "22px", color: "white" }}>
          The actual size of the window is:
        </p>
        <h1 style={{ textAlign: "center", color: "white" }}>{width}</h1>
      </div>
    </>
  );
};

export default UseEffect2;
