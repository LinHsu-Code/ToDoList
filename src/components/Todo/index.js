import React from "react";
import TodoForm from "../TodoForm";
export default class Todo extends React.Component {
  render() {
    return (
      <main>
        <h4>Todo</h4>
        <TodoForm />
      </main>
    );
  }
}
