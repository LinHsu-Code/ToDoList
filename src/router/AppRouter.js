import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Todo from "../components/Todo";
import About from "../components/About";
import TaskDeatil from "../components/TaskDetail";

export default class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/todo/:id" element={<TaskDeatil />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Navigate replace to="/todo" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
