import React, { createContext } from "react";
import ComB from "./comB";
const data = createContext();

const ComA = () => {
  return (
    <data.Provider value={{ as: "asd", list: ["aaaa", "bbbbb", "ccccc"] }}>
      <ComB />
    </data.Provider>
  );
};

export default ComA;
export { data };
