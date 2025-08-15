import axios from "axios";
import React, { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  let navigator = useNavigate();
  let [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });
  useEffect(() => {}, []);
  let handleChange = (e) => {
    let { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/users", data).then(
      (e) => {
        toast.success("Sign-Up Successfully");
        navigator("/");
      },
      (err) => {
        toast.error("Something Went Wrong");
      }
    );
  };
  return (
    <div>
      <form className="signup-container" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
          onChange={handleChange}
          value={data.username}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={handleChange}
          value={data.password}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={handleChange}
          value={data.email}
        />
        <button type="submit">Sign Up</button>
        <button
          type="button"
          onClick={(e) => {
            navigator("/Login");
          }}
        >
          Already Have Account
        </button>
      </form>
    </div>
  );
}

export default SignUp;
