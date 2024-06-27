import React, { useContext } from "react";
import { data } from "./comA";
const ComC = () => {
  const value = useContext(data);
  console.log(value);
  return (
    <>
      <div>
        <h1>{value.as}</h1>
        <h1>{value.list[0]}</h1>
        <h1>{value.list[1]}</h1>
        <h1>{value.list[2]}</h1>
      </div>
    </>
  );
};

export default ComC;
