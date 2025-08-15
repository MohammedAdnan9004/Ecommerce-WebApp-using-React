import React, { useContext } from "react";
import { userContext } from "../App";

import { NavLink } from "react-router-dom";

function NavBar() {
  let { users, auth } = useContext(userContext);
  let [isLogin, setIsLogin] = auth;
  let [name, setName] = users;
  return (
    <div className="Nav-container">
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/Products"}>Products</NavLink>
        </li>

        {!isLogin ? (
          <li>
            <NavLink to={"/Login"}>Log-In</NavLink>
          </li>
        ) : (
          <>
            <li>
              Hello , <strong>{name}</strong>
            </li>
            <li className="btn1">
              <button
                onClick={(e) => {
                  setIsLogin(false);
                }}
              >
                Log-Out
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
