import React, { useState, useEffect } from "react";
import "./useEffectApi.css";

const UseEffectApi = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <h1>List Of Github Users</h1>
      <div className="item">
        {loading === true ? (
          <p>Loading</p>
        ) : (
          userData.map((element) => {
            return (
              <div className="userDetails" key={element.id}>
                <div className="user-img">
                  <img
                    id="user-img"
                    src={element.avatar_url}
                    alt="user-image"
                  />
                </div>
                <div className="user-info">
                  <p id="username">{element.login}</p>
                  <p id="usertec">{element.type}</p>
                  <div className="user-git-info">
                    <div className="activits">
                      <p id="a-h">Articles</p>
                      <p id="a-v">38</p>
                    </div>
                    <div className="activits">
                      <p id="a-h">Followers</p>
                      <p id="a-v">125</p>
                    </div>
                    <div className="activits">
                      <p id="a-h">Rating</p>
                      <p id="a-v">8.9</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default UseEffectApi;
