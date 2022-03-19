import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">todo</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
