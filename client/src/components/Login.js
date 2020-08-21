import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initalLoginValues = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [inputText, setInputText] = useState(initalLoginValues);

  const handleChange = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", inputText)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <h2>Login:</h2>
      <form onSubmit={login}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={inputText.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={inputText.password}
            onChange={handleChange}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
