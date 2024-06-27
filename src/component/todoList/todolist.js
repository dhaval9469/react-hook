import React, { useState, useEffect } from "react";
import "./todolist.css";

const getDataLocal = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
const ToDoList = () => {
  const [data, setData] = useState("");
  const [item, setItem] = useState(getDataLocal());

  const addItem = () => {
    if (!data) {
    } else {
      setItem([...item, data]);
      setData("");
    }
  };

  const remove = (ind) => {
    const removeData = item.filter((ele, id) => {
      return ind !== id;
    });
    setItem(removeData);
  };

  const clear = () => {
    setItem([]);
  };

  // add data to local Storege

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(item));
  }, [item]);
  return (
    <>
      <div style={{ textAlign: "center", width: "500px" }}>
        <div className="add-item">
          <input
            type="text"
            placeholder="Add Item.."
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <i
            class="fa-solid fa-plus"
            id="icon"
            title="additem"
            onClick={addItem}
          ></i>
        </div>
        <br />
        <div>
          {item.map((event, ind) => {
            return (
              <div className="user-list" key={ind}>
                <div className="item">
                  <p>{event}</p>
                  <i
                    class="fa-solid fa-trash"
                    title="remove"
                    onClick={() => remove(ind)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="remove"
          onClick={clear}
          style={{ marginTop: "10px" }}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default ToDoList;
