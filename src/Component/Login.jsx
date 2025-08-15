import React, { useContext, useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "../App.jsx";
import { toast } from "react-toastify";

function Login() {
  let { auth, users } = useContext(userContext);
  let [, setIsLogin] = auth;
  let [, setName] = users;
  let [fetchData, setFetchData] = useState(null);
  let [data, setData] = useState({
    username: "",
    password: "",
  });
  let navigator = useNavigate();
  useEffect((e) => {
    axios.get("http://localhost:4000/users").then(
      (res) => {
        setFetchData(res.data);

        // console.log(fetchData);
      },
      (err) => {
        err;
      }
    );
  }, []);
  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);

    let result = fetchData.some((v) => {
      setName(v.username);
      return v.username == data.username && v.password == data.password;
    });
    if (result) {
      toast.success("LogIn SuccessFully");
      setIsLogin(true);

      navigator("/");

      setData({ username: "", password: "" });
    } else {
      toast.error("Something Went Wrong.......");
    }
  };
  return (
    <div className="Login-container">
      <form onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <input
          type="text"
          name="username"
          id="username"
          value={data.value}
          placeholder="Enter UserName"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={handleChange}
          value={data.value}
        />
        <button type="submit">Log in</button>
        <button
          type="button"
          onClick={(e) => {
            navigator("/SignUp");
          }}
        >
          Create New Account
        </button>
      </form>
    </div>
  );
}

export default Login;
