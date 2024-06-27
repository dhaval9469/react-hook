import "./login.css";
import React, { useState } from "react";

const Login = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (email && pass) {
      setCount(count + 1);
      const newEntry = { id: count, emial: email, pass: pass };
      setAllEntry([...allEntry, newEntry]);
      setEmail("");
      setPass("");
    } else {
      alert("Please Fill the Data");
    }
  };
  const remove = (id) => {
    const removeUser = allEntry.filter((ele) => {
      return ele.id != id;
    });
    setAllEntry(removeUser);
  };

  const clear = () => {
    setAllEntry([]);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <form action="" className="login-form" onSubmit={submitForm}>
          <div className="login">
            <div className="login-email">
              <div style={{ textAlign: "start", marginBottom: "5px" }}>
                Email
              </div>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="login-pass">
              <div style={{ textAlign: "start", marginBottom: "5px" }}>
                Password
              </div>
              <input
                type="password"
                name="password"
                id="pass"
                autoComplete="off"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
        <div>
          {allEntry.map((event) => {
            return (
              <div className="user-list" key={event.id}>
                <div className="item">
                  <p>Email : {event.emial}</p>
                  <p>Pass : {event.pass}</p>
                </div>
                <button className="remove" onClick={() => remove(event.id)}>
                  remove
                </button>
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

export default Login;
