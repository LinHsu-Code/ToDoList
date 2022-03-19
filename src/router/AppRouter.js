import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Todo from "../components/Todo";
import About from "../components/About";

export default class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Todo />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
